'use client';

import { useState, useEffect } from 'react';
import { LeagueService, Standing } from '@/shared/api/services/league.service';
import { StandingsTable } from '@/widgets/standings-table';

export default function StandingsPage() {
  const [standings, setStandings] = useState<Standing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStandings() {
      try {
        const response = await LeagueService.getStandings();
        setStandings(response.data);
      } catch (err) {
        console.error(err);
        // Fallback Mock Data
        setStandings([
            { teamId: '1', teamName: 'Amafor Gladiators', played: 10, won: 8, drawn: 1, lost: 1, points: 25, goalsFor: 20, goalsAgainst: 5 },
            { teamId: '2', teamName: 'Lions FC', played: 10, won: 7, drawn: 2, lost: 1, points: 23, goalsFor: 18, goalsAgainst: 8 },
            { teamId: '3', teamName: 'Eagle United', played: 10, won: 6, drawn: 2, lost: 2, points: 20, goalsFor: 15, goalsAgainst: 10 },
            { teamId: '4', teamName: 'City Rovers', played: 10, won: 5, drawn: 1, lost: 4, points: 16, goalsFor: 12, goalsAgainst: 15 },
            { teamId: '5', teamName: 'Athletic Club', played: 10, won: 3, drawn: 2, lost: 5, points: 11, goalsFor: 9, goalsAgainst: 14 },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchStandings();
  }, []);

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold font-serif text-primary-900 mb-6">League Table</h1>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <StandingsTable standings={standings} />
      )}
    </div>
  );
}
