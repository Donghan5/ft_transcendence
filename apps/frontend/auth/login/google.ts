export function redirectGoogleLogin() {
	const backendLoginUrl = 'https://localhost:8443/api/users/login/google';

	window.location.href = backendLoginUrl;
}
