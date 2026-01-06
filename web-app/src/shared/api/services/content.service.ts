import { apiClient } from '../api-client';

export interface ContentItem {
  id: string;
  title: string;
  summary?: string;
  content?: string;
  category?: string;
  publishedAt?: string;
  thumbnailUrl?: string;
}

export const ContentService = {
  getLatestContent: async (limit: number = 5, category?: string) => {
    return apiClient.get<ContentItem[]>('/content/latest', {
      params: { limit, category }
    });
  },

  getContentById: async (id: string) => {
    return apiClient.get<ContentItem>(`/content/${id}`);
  },

  getAllContent: async (params?: unknown) => {
    return apiClient.get<ContentItem[]>('/content', { params });
  }
};
