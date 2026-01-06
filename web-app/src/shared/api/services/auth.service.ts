import { apiClient } from '../api-client';

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password?: string;
  [key: string]: unknown;
}

export const AuthService = {
  login: async (credentials: LoginCredentials) => {
    return apiClient.post<AuthResponse>('/auth/login', credentials);
  },
  register: async (data: unknown) => {
    return apiClient.post<AuthResponse>('/auth/register', data);
  },
  logout: async () => {
    return apiClient.post('/auth/logout');
  },
  getSession: async () => {
    return apiClient.get<User>('/auth/session');
  }
};
