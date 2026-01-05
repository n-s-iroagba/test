import { apiClient, ApiResponse } from '@/shared/api';
import { Player } from '../model/types';

export const playerApi = {
  getPlayers: async (params?: any): Promise<ApiResponse<Player[]>> => {
    return apiClient.get<Player[]>('/players', { params });
  },
  getPlayerById: async (id: string): Promise<ApiResponse<Player>> => {
    return apiClient.get<Player>(`/players/${id}`);
  },
};
