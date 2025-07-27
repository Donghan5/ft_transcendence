export function redirectGoogleLogin() {
	const backendLoginUrl = 'http://localhost:8080/api/users/login/google';

	window.location.href = backendLoginUrl;
}