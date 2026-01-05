import { apiClient, ApiResponse } from '@/shared/api';
import { League } from '../model/types';

export const leagueApi = {
  getLeagues: async (): Promise<ApiResponse<League[]>> => {
    return apiClient.get<League[]>('/leagues');
  },
  getLeagueById: async (id: string): Promise<ApiResponse<League>> => {
    return apiClient.get<League>(`/leagues/${id}`);
  },
};
