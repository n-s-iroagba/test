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

export const PlayerService = {
  getPlayers: async (params?: unknown) => {
    return apiClient.get<Player[]>('/players', { params });
  },
  getPlayerById: async (id: string) => {
    return apiClient.get<Player>(`/players/${id}`);
  }
};
