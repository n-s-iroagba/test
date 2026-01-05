export interface Fixture {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  score?: {
    home: number;
    away: number;
  };
  status: 'scheduled' | 'live' | 'finished';
}
