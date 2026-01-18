import { apiClient } from '../api-client';

export interface SearchResult {
  id: string;
  type: 'player' | 'news' | 'fixture' | 'team';
  title: string;
  subtitle?: string;
  url: string;
}

export const SearchService = {
  search: async (query: string) => {
    return apiClient.get<SearchResult[]>('/search', { params: { q: query } });
  },
  getSuggestions: async (query: string) => {
    return apiClient.get<string[]>('/search/suggestions', { params: { q: query } });
  }
};
