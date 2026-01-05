import { apiClient } from '../api-client';

export interface PlayerStats {
  goals?: number;
  assists?: number;
  [key: string]: unknown;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  teamId?: string;
  stats?: PlayerStats;
}

export interface PlayerQueryParams {
  position?: string;
  search?: string;
  limit?: number;
  page?: number;
}

export const PlayerService = {
  getPlayers: async (params?: PlayerQueryParams) => {
    // In a real app, these params go to the API.
    // For now, if the API doesn't support them, we might filter client-side,
    // but let's assume the API handles it or we'll mock it in the component for demo if no real backend exists.
    return apiClient.get<Player[]>('/players', { params });
  },
  getPlayerById: async (id: string) => {
    return apiClient.get<Player>(`/players/${id}`);
  }
};
