// GOOGLE LOGIN REDIRECT FUNCTION

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = 'http://localhost:3000/auth/google/callback';

export function redirectGoogleLogin() {
	const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;

	window.location.href = googleLoginUrl;
}

