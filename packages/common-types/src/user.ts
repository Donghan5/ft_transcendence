export interface User {
  id: number;
  googleId: string;
  email: string;
  name: string;
  token: string;
  nickname: string;
  avatar_url: string;
  profile_setup_complete?: boolean;
}
