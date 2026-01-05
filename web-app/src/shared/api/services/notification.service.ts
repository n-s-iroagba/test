import { apiClient } from '../api-client';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: string;
}

export const NotificationService = {
  getUnreadCount: async () => {
    return apiClient.get<{ count: number }>('/notifications/unread/count'); // Adjusted path slightly or can use /notifications/unread
  },

  getNotifications: async (limit: number = 5) => {
    return apiClient.get<Notification[]>('/notifications', { params: { limit } });
  },

  markAsRead: async (id: string) => {
    return apiClient.put(`/notifications/${id}/read`);
  }
};
