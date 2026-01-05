'use client';

import { usePlayers } from '@/shared/hooks/usePlayers';

export default function PlayersPage() {
  const { players, loading, error } = usePlayers();

  if (loading) {
    return <div className="p-8 text-center">Loading players...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-error-500">
        Error loading players. Please try again later.
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6 font-serif text-primary-900">Squad</h1>

      {players.length === 0 ? (
         <div className="text-neutral-500">No players found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <div key={player.id} className="bg-white rounded-lg shadow-player overflow-hidden border border-neutral-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-neutral-200 flex items-center justify-center">
                {/* Placeholder for player image */}
                <span className="text-neutral-400 text-4xl">👤</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-neutral-900">{player.name}</h3>
                <p className="text-secondary-600 font-medium">{player.position}</p>

                <div className="mt-4 pt-4 border-t border-neutral-100 flex justify-between text-sm text-neutral-500">
                   <span>Stats available</span>
                   <button className="text-primary-600 hover:text-primary-700 font-semibold">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
