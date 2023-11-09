export interface LoginResponse {
  message : string;
  details?: string;
  access_token: string;
  data: UserResponse;
}

export interface UserResponse {
  id: number,
  name: string;
  email: string;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
}
