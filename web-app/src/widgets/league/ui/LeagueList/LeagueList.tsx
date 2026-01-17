import React from 'react';
import { LeagueCard, League } from '@/entities/league';

const MOCK_LEAGUES: League[] = [
  { id: '1', name: 'Premier League', country: 'England', season: '2023/2024' },
  { id: '2', name: 'La Liga', country: 'Spain', season: '2023/2024' },
  { id: '3', name: 'Bundesliga', country: 'Germany', season: '2023/2024' },
  { id: '4', name: 'Serie A', country: 'Italy', season: '2023/2024' },
];

export const LeagueList = () => {
  return (
    <div className="space-y-4">
      {MOCK_LEAGUES.map(league => (
        <LeagueCard key={league.id} league={league} />
      ))}
    </div>
  );
};
