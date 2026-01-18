'use client';

import { useState } from 'react';
import { usePlayers } from '@/shared/hooks/usePlayers';
import { PlayerFilters, PlayerFiltersState } from '@/widgets/player-filters';
import { Player } from '@/shared/api/services/player.service';
import { Pagination } from '@/shared/ui/pagination';

export default function PlayersPage() {
  const [filters, setFilters] = useState<PlayerFiltersState>({ position: '', search: '' });
  const [page, setPage] = useState(1);
  const { players, loading, error } = usePlayers({ ...filters, page, limit: 9 });

  // Client-side filtering for demo purposes if the API doesn't actually filter (since we are likely mocking or using a placeholder API)
  // In a real scenario, the 'usePlayers' hook would pass the filters to the API, and 'players' would already be filtered.
  // We'll trust 'usePlayers' passes it, but if the backend is a dummy, we might want to filter here.
  // For this exercise, I'll implement client-side filtering as a fallback or enhancement if the "backend" returns all.

  const filteredPlayers = players.filter((player: Player) => {
    const matchesPosition = filters.position ? player.position === filters.position : true;
    const matchesSearch = filters.search
      ? player.name.toLowerCase().includes(filters.search.toLowerCase())
      : true;
    return matchesPosition && matchesSearch;
  });

  if (loading) {
    return (
        <div className="py-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-neutral-500">Loading squad...</p>
        </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center text-error-500">
        Error loading players. Please try again later.
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8">
         <div>
            <h1 className="text-3xl font-bold font-serif text-primary-900 mb-2">First Team Squad</h1>
            <p className="text-neutral-500">Meet the Gladiators</p>
         </div>
      </div>

      <PlayerFilters onFilterChange={setFilters} />

      {filteredPlayers.length === 0 ? (
         <div className="text-center py-20 bg-neutral-50 rounded-lg border border-neutral-100">
           <span className="text-4xl block mb-4">🔍</span>
           <p className="text-neutral-500 text-lg">No players found matching your criteria.</p>
         </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <div key={player.id} className="bg-white rounded-lg shadow-player overflow-hidden border border-neutral-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="h-64 bg-neutral-200 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for player image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <span className="text-neutral-400 text-6xl transform group-hover:scale-110 transition-transform duration-500">👤</span>
                <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-3xl font-bold font-serif shadow-black drop-shadow-md">#{player.id.slice(0,2)}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-neutral-900 leading-tight">{player.name}</h3>
                    <span className="bg-secondary-50 text-secondary-700 text-xs font-bold px-2 py-1 rounded uppercase">{player.position}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-100 flex justify-between text-sm text-neutral-500">
                   <div className="flex gap-4">
                       {player.stats?.goals !== undefined && (
                           <div className="flex flex-col">
                               <span className="font-bold text-neutral-900">{player.stats.goals}</span>
                               <span className="text-xs">Goals</span>
                           </div>
                       )}
                       {player.stats?.assists !== undefined && (
                           <div className="flex flex-col">
                               <span className="font-bold text-neutral-900">{player.stats.assists}</span>
                               <span className="text-xs">Assists</span>
                           </div>
                       )}
                   </div>
                   <button className="text-primary-600 hover:text-primary-700 font-semibold self-end">View Profile &rarr;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && filteredPlayers.length > 0 && (
         <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />
      )}
    </div>
  );
}
