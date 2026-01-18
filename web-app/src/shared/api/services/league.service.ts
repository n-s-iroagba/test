import { apiClient } from '../api-client';

export interface Fixture {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  venue: string;
  status: 'scheduled' | 'live' | 'completed' | 'postponed';
  score?: {
    home: number;
    away: number;
  };
  leagueId?: string;
}

export interface Standing {
  teamId: string;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

export const LeagueService = {
  getUpcomingFixtures: async (limit: number = 5) => {
    return apiClient.get<Fixture[]>('/fixtures/upcoming', {
      params: { limit }
    });
  },

  getFixtureById: async (id: string) => {
    return apiClient.get<Fixture>(`/fixtures/${id}`);
  },

  getAllFixtures: async () => {
    return apiClient.get<Fixture[]>('/fixtures');
  },

  getStandings: async (leagueId?: string) => {
    return apiClient.get<Standing[]>('/standings/current', { params: { leagueId } });
  }
};
