import { apiClient } from '../api-client';

export interface ThemePreset {
  id: string;
  name: string;
  colors: Record<string, string>;
}

export const ThemeService = {
  getTheme: async () => {
    return apiClient.get<{ mode: 'light' | 'dark', preset?: string }>('/theme');
  },

  updateTheme: async (mode: 'light' | 'dark') => {
    return apiClient.put('/theme', { mode });
  },

  getPresets: async () => {
    return apiClient.get<ThemePreset[]>('/theme/presets');
  }
};
