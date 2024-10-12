export interface Identity {
  provider: string;
  isSocial: boolean;
  access_token: string;
  expires_in: number;
  connection: string;
  user_id: string;
}

export interface Auth0User {
  nickname: string;
  created_at: string;
  updated_at: string;
  identities: Identity[];
  picture: string;
  given_name: string;
  user_id: string;
  email: string;
  family_name: string;
  email_verified: boolean;
  name: string;
  last_login: string;
  last_ip: string;
  logins_count: number;
}