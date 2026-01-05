import { apiClient, ApiResponse } from '@/shared/api';
import { NewsArticle } from '../model/types';

export const newsApi = {
  getLatestNews: async (limit: number = 10): Promise<ApiResponse<NewsArticle[]>> => {
    return apiClient.get<NewsArticle[]>('/content/latest', { params: { limit } });
  },
  getArticleById: async (id: string): Promise<ApiResponse<NewsArticle>> => {
    return apiClient.get<NewsArticle>(`/content/${id}`);
  },
};
