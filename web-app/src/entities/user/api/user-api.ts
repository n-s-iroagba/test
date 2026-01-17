import { apiClient, ApiResponse } from '@/shared/api';
import { User } from '../model/types';

export const userApi = {
  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    // In real app: return apiClient.get<User>('/users/me');
    // Mock response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            bio: 'Football enthusiast and team supporter.',
            location: 'London, UK',
            joinDate: '2023-01-01',
          },
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {} as any
        });
      }, 500);
    });
  },
  updateProfile: async (id: string, data: Partial<User>): Promise<ApiResponse<User>> => {
    return apiClient.put<User>(`/users/${id}/profile`, data);
  },
};
