import { apiClient } from '../api-client';
import { User } from './auth.service';

export interface UpdateUserParams {
  firstName?: string;
  lastName?: string;
  email?: string;
  bio?: string;
  avatarUrl?: string;
}

export const UserService = {
  getProfile: async () => {
    return apiClient.get<User>('/users/profile');
  },

  updateProfile: async (data: UpdateUserParams) => {
    return apiClient.put<User>('/users/profile', data);
  }
};
