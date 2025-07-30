export interface User {
  id: number;
  googleId: string;
  email: string;
  name: string;
  token: string;
  profile_setup_complete?: boolean;
}
