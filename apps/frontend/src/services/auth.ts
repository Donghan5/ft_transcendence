import { appState } from "../state/state";
import { redirectGoogleLogin } from '../../auth/login/google';
import { AuthService } from '../../auth/services/auth-service';
import { StatsManager } from "../stats/stats-manager";
import { StatusManager } from "../status/status-manager";
import { showAppScreen, showSection } from "../services/ui";
import { showNicknameSetupScreen, showFriendsScreen } from "./ui";
import { showProfileScreen } from "./user";

/**
 * @description handler setting up local authentication handlers
 */
export function setupLocalAuthHandlers(): void {
    // Initialize auth tabs
    initializeAuthTabs();
    
    // Setup all auth event listeners
    setupAuthEventListeners();
}

/**
 * @description Show the specified authentication tab with proper styling
 * @param tabName - The name of the tab to show ('login' or 'register')
 */
export function showAuthTab(tabName: 'login' | 'register'): void {
    console.log('Switching to tab:', tabName);
    
    // Get form elements
    const loginForm = document.getElementById('login-form') as HTMLElement;
    const registerForm = document.getElementById('register-form') as HTMLElement;
    
    // Get tab button elements
    const loginTab = document.querySelector('[data-tab="login"]') as HTMLElement;
    const registerTab = document.querySelector('[data-tab="register"]') as HTMLElement;

    if (!loginForm || !registerForm || !loginTab || !registerTab) {
        console.error('Auth tab elements not found');
        return;
    }

    // Hide both forms
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');

    // Reset both tabs to inactive state using direct style manipulation to override Tailwind
    const inactiveStyles = {
        backgroundColor: 'rgb(229, 231, 235)', // gray-200
        color: 'rgb(75, 85, 99)' // gray-600
    };

    const activeStyles = {
        backgroundColor: 'rgb(253, 224, 71)', // yellow-300
        color: 'rgb(0, 0, 0)' // black
    };

    // Apply inactive styles to both tabs first
    Object.assign(loginTab.style, inactiveStyles);
    Object.assign(registerTab.style, inactiveStyles);

    // Show selected form and activate corresponding tab
    if (tabName === 'login') {
        loginForm.classList.remove('hidden');
        Object.assign(loginTab.style, activeStyles);
        console.log('Login tab activated');
    } else if (tabName === 'register') {
        registerForm.classList.remove('hidden');
        Object.assign(registerTab.style, activeStyles);
        console.log('Register tab activated');
    }

    // Clear any error/success messages
    clearAuthMessages();
}

/**
 * @description Clear all authentication error and success messages
 */
export function clearAuthMessages(): void {
    const messageElements = document.querySelectorAll('#loginError, #registerError, #loginSuccess, #registerSuccess');
    messageElements.forEach(el => {
        el.classList.add('hidden');
        el.textContent = '';
    });
}

/**
 * @description Initialize auth tabs when DOM is loaded
 */
export function initializeAuthTabs(): void {
    // Make function globally available for onclick handlers
    (window as any).showAuthTab = showAuthTab;
    
    // Set login as default active tab
    showAuthTab('login');
    
    console.log('Auth tabs initialized');
}

/**
 * @description Setup authentication event listeners
 */
export function setupAuthEventListeners(): void {
    // Add event listeners for tab buttons (alternative to onclick)
    const loginTab = document.querySelector('[data-tab="login"]') as HTMLElement;
    const registerTab = document.querySelector('[data-tab="register"]') as HTMLElement;
    
    if (loginTab) {
        loginTab.addEventListener('click', () => showAuthTab('login'));
    }
    
    if (registerTab) {
        registerTab.addEventListener('click', () => showAuthTab('register'));
    }

    // Form submission handlers
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    const registerForm = document.getElementById('registerForm') as HTMLFormElement;

    if (loginForm) {
        loginForm.addEventListener('submit', handleLocalLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleLocalRegister);
    }

    console.log('Auth event listeners setup complete');
}

/**
 * @description Shows an error message
 * @param elementId
 * @param message
 */
function showAuthError(elementId: string, message: string) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.remove('hidden');
    }
}

/**
 * @description Shows a success message
 * @param elementId
 * @param message
 */
function showAuthSuccess(elementId: string, message: string) {
    const successEl = document.getElementById(elementId);
    if (successEl) {
        successEl.textContent = message;
        successEl.classList.remove('hidden');
    }
}

/**
 * @description Handles user registration
 * @param e - The submit event
 */
export async function handleLocalLogin(e: Event) {
    e.preventDefault();
    clearAuthMessages();

    const formData = new FormData(e.target as HTMLFormElement);
    const loginData = {
        loginInput: formData.get('loginInput') as string,
        password: formData.get('password') as string
    };

    const validationError = AuthService.validateLoginInput(loginData);
    if (validationError) {
        showAuthError('loginError', validationError);
        return;
    }

    const result = await AuthService.localLogin(loginData);

    if (result.success) {
        showAuthSuccess('loginSuccess', result.message);

        try {
            const userResponse = await fetch('/api/auth/me', { credentials: 'include' });
            if (userResponse.ok) {
                const userData = await userResponse.json();
                console.log('User data after login:', userData);
                appState.currentUser = userData;

                appState.statusManager = StatusManager.getInstance();
                await appState.statusManager!.initializeStatusConnection('', userData);
                console.log('StatusManager successfully initialized for new session.');
                
                if (!userData.profileComplete) {
                    showNicknameSetupScreen();
                } else {
                    showAppScreen(userData);
                }
            } else {
                throw new Error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            showAuthError('loginError', 'Failed to load user profile');
        }
    } else {
        showAuthError('loginError', result.error || 'Login failed.');
    }
}

/**
 * @description Handles local user registration
 * @param e - The submit event
 */
export async function handleLocalRegister(e: Event) {
    e.preventDefault();
    clearAuthMessages();

    const formData = new FormData(e.target as HTMLFormElement);
    const registerData = {
        nickname: formData.get('nickname') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirmPassword') as string
    };

    const validationError = AuthService.validateRegisterInput(registerData);
    if (validationError) {
        showAuthError('registerError', validationError);
        return;
    }

    const result = await AuthService.localRegister(registerData);

    if (result.success) {
        showAuthSuccess('registerSuccess', result.message);

        (e.target as HTMLFormElement).reset(); // Reset the form

        setTimeout(() => {
            showAuthTab('login'); // Switch to login tab after successful registration
            showAuthSuccess('registerSuccess', 'Please login to continue.');
        }, 1000);
    } else {
        showAuthError('registerError', result.error || 'Registration failed.');
    }
}

/**
 * showing login screen
 */
export function showLoginScreen(){
    console.log('Showing login screen');

    if (appState.statusManager) {
        appState.statusManager.disconnect();
        appState.statusManager = null; 
        console.log('Disconnected existing StatusManager for logout.');
    }

    if (window.location.pathname !== '/login') {
        history.replaceState({ sectionId: 'login' }, 'PONG - Login', '/login');
    }

    showSection('login');
    
    document.getElementById('loginSection')?.classList.remove('hidden');
    document.getElementById('appSection')?.classList.add('hidden');

    const loginButton = document.getElementById('loginBtn');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            console.log('Login button clicked');
            redirectGoogleLogin();
        });
    }
}


/**
 * @description Updated updateLoginStatus function
 */
export async function updateLoginStatus() {
    try {
        const response = await fetch('/api/auth/me', { credentials: 'include' });
        
        if (!response.ok) {
            throw new Error('Not logged in');
        }
        
        const user = await response.json();
        appState.currentUser = user;
        
        // Initialize StatusManager once (non-blocking, fire-and-forget)
        appState.statusManager = StatusManager.getInstance();
        await appState.statusManager.initializeStatusConnection('', user);
        console.log('StatusManager successfully re-initialized for new session.');
        
        const currentPath = window.location.pathname;
        
        if (!user.profileComplete) {
            showNicknameSetupScreen();
            return;
        }
        
        // Handle normal navigation based on URL path
        if (currentPath === '/profile') {
            showAppScreen(user);
            showProfileScreen();
        } else if (currentPath === '/friends') {
            showAppScreen(user);
            await showFriendsScreen();
        } else if (currentPath === '/tournament') {
            showAppScreen(user);
            showSection('tournament');
        } else {
            showAppScreen(user);
        }
        
    } catch (error) {
        console.error('Not logged in or session expired');
        showLoginScreen();
    }
}