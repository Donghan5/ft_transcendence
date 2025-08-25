export type SectionId = 'hero' | 'game' | 'profile' | 'login' | 'nicknameSetup' | 'friends' | 'publicProfile' | 'waiting' | 'tournamentLobby';

interface NavigationState {
    sectionId: SectionId;
    title: string;
    url: string;
    data?: any; // Additional data relevant to the section (like game data)
}

export class NavigationManager {
    private static instance: NavigationManager;
    private currentState: NavigationState | null = null;
    private showSectionCallback: ((sectionId: SectionId) => void) | null = null;

    private constructor() {
        this.initializeHistoryListener();
    }

    /**
     * @returns The singleton instance of NavigationManager
     */
    public static getInstance(): NavigationManager {
        if (!NavigationManager.instance) {
            NavigationManager.instance = new NavigationManager();
        }
        return NavigationManager.instance;
    }

    public setShowSectionCallback(callback: (sectionId: SectionId) => void) {
        this.showSectionCallback = callback;
    }
    
    public navigateToWithTitle(sectionId: SectionId, title: string, data?: any): void {
        this.navigateTo(sectionId, title, data);
    }

    public navigateTo(sectionId: SectionId, title: string, data?: any) {
        const url = this.generateUrl(sectionId);

        const newState: NavigationState = {
            sectionId,
            title,
            url,
            data
        };

        if (this.currentState && this.currentState.sectionId === sectionId) {
            return; // Prevent redundant navigation
        }

        history.pushState(newState, title, url);

        this.currentState = newState;

        document.title = title;

        this.performNavigation(sectionId);
    }

    /**
     * Change the URL and state without adding a new entry to the history stack.
     * @param sectionId 
     * @param title 
     * @param data 
     */
    public replaceState(sectionId: SectionId, title: string, data?: any): void {
        const url = this.generateUrl(sectionId);

        const newState: NavigationState = {
            sectionId,
            title,
            url,
            data
        };

        history.replaceState(newState, title, url);

        this.currentState = newState;

        document.title = title;

        this.performNavigation(sectionId);
    }

    public initializeState(sectionId: SectionId, title: string): void {
        const currentUrl = window.location.pathname + window.location.search;
        const exceptedUrl = this.generateUrl(sectionId);

        if (currentUrl !== exceptedUrl) {
            this.replaceState(sectionId, title);
        } else {
            this.currentState = {
                sectionId,
                title,
                url: currentUrl
            };
            document.title = title;
        }
    }

    private initializeHistoryListener() {
        window.addEventListener('popstate', (event) => {
            console.log('popstate event:', event);

            if (event.state && event.state.sectionId) {
                const state = event.state as NavigationState;
                this.currentState = state;
                document.title = state.title;
                this.performNavigation(state.sectionId);
            } else {
                this.performNavigation('hero'); // Default to hero section if state is missing
            }
        });
    }

    /**
     * Doing the actual navigation by invoking the callback
     * @param sectionId The section to navigate to
     */
    private performNavigation(sectionId: SectionId) {
        if (this.showSectionCallback) {
            this.showSectionCallback(sectionId);
        } else {
            console.warn('Show section callback is not set.');
        }
    }

    /**
     * Generate URL based on sectionId
     * @param sectionId 
     * @returns 
     */
    private generateUrl(sectionId: SectionId): string {
        switch (sectionId) {
            case 'hero':
                return '/';
            case 'game':
                return '/game';
            case 'profile':
                return '/profile';
            case 'login':
                return '/login';
            case 'nicknameSetup':
                return '/nickname-setup';
            case 'friends':
                return '/friends';
            case 'publicProfile':
                return '/public-profile';
            case 'waiting':
                return '/waiting';
            case 'tournamentLobby':
                return '/tournament-lobby';
            default:
                return '/';
        }
    }

    public getCurrentSection(): SectionId | null {
        return this.currentState?.sectionId || null;
    }

    public goBack(): void {
        history.back();
    }

    public goForward(): void {
        history.forward();
    }

    public go(delta: number): void {
        history.go(delta);
    }

    public getCurrentData(): any {
        return this.currentState?.data || null;
    }

    private getTitleForSection(sectionId: SectionId): string {
        const titles: Record<SectionId, string> = {
            hero: 'PONG - Pick Your Battle',
            game: 'PONG - Game in Progress',
            profile: 'PONG - Profile',
            login: 'PONG - Login',
            nicknameSetup: 'PONG - Set Up Nickname',
            friends: 'PONG - Friends',
            publicProfile: 'PONG - User Profile',
            waiting: 'PONG - Waiting for Opponent',
            tournamentLobby: 'PONG - Tournament Lobby'
        }

        return titles[sectionId] || 'PONG - ft_transcendence';
    }

    public navigateToWithDefaultTitle(sectionId: SectionId, data?: any): void {
        const title = this.getTitleForSection(sectionId);
        this.navigateTo(sectionId, title, data);
    }

    public replaceStateWithDefaultTitle(sectionId: SectionId, data?: any): void {
        const title = this.getTitleForSection(sectionId);
        this.replaceState(sectionId, title, data);
    }
}