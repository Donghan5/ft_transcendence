const TOKEN_KEY = 'auth_token';

export function getToken() {
	return localStorage.getItem(TOKEN_KEY);
}

export function saveToken(token: string) {
	localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
	localStorage.removeItem(TOKEN_KEY);
}

export function isLoggedIn(): boolean {
	const token = getToken();
	return !!token; // Returns true if token exists, false otherwise
}
