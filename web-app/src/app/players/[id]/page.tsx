'use client';

import { useState, useEffect, use } from 'react';
import { PlayerService, Player } from '@/shared/api/services/player.service';
import Link from 'next/link';

export default function PlayerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await PlayerService.getPlayerById(resolvedParams.id);
        setPlayer(response.data);
      } catch (err) {
        console.error(err);
        // Fallback for demo if API fails
        if (resolvedParams.id === '1' || resolvedParams.id === 'p1') {
             setPlayer({
                 id: resolvedParams.id,
                 name: 'John Doe',
                 position: 'Forward',
                 teamId: 'gladiators',
                 stats: { goals: 12, assists: 5, appearances: 18 }
             });
        } else {
            setError('Player not found');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPlayer();
  }, [resolvedParams.id]);

  if (loading) return <div className="text-center py-12">Loading player profile...</div>;
  if (error || !player) return <div className="text-center py-12 text-error-600">Player not found.</div>;

  return (
    <div className="py-8">
      <Link href="/players" className="text-primary-600 hover:text-primary-800 mb-4 inline-block">&larr; Back to Squad</Link>

      <div className="bg-white rounded-lg shadow-card border border-neutral-200 overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 h-64 md:h-auto bg-neutral-200 flex items-center justify-center relative">
             {/* Placeholder Image */}
             <span className="text-8xl">👤</span>
             <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                 <h1 className="text-3xl font-bold text-white font-serif">{player.name}</h1>
                 <p className="text-white/90 font-medium">{player.position}</p>
             </div>
          </div>

          <div className="p-8 md:w-2/3">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-xl font-bold text-neutral-900 mb-2">Player Info</h2>
                    <p className="text-neutral-600">Jersey Number: <span className="font-bold">#{player.id.slice(0,2).toUpperCase()}</span></p>
                    <p className="text-neutral-600">Team: <span className="font-bold">Amafor Gladiators</span></p>
                </div>
                <div className="bg-primary-50 px-4 py-2 rounded-lg text-center">
                    <span className="block text-2xl font-bold text-primary-700">{player.stats?.goals || 0}</span>
                    <span className="text-xs font-bold text-primary-600 uppercase">Goals</span>
                </div>
            </div>

            <div className="border-t border-neutral-100 pt-6">
                <h3 className="font-bold text-lg text-neutral-800 mb-4">Season Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-neutral-50 p-4 rounded border border-neutral-200 text-center">
                        <span className="block text-xl font-bold text-neutral-900">{(player.stats as unknown as { appearances: number })?.appearances || 0}</span>
                        <span className="text-xs text-neutral-500 uppercase">Matches</span>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded border border-neutral-200 text-center">
                        <span className="block text-xl font-bold text-neutral-900">{player.stats?.goals || 0}</span>
                        <span className="text-xs text-neutral-500 uppercase">Goals</span>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded border border-neutral-200 text-center">
                        <span className="block text-xl font-bold text-neutral-900">{player.stats?.assists || 0}</span>
                        <span className="text-xs text-neutral-500 uppercase">Assists</span>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded border border-neutral-200 text-center">
                        <span className="block text-xl font-bold text-neutral-900">7.5</span>
                        <span className="text-xs text-neutral-500 uppercase">Rating</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
