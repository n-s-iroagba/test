import { useState, useEffect } from 'react';
import { PlayerService, Player, PlayerQueryParams } from '../api/services/player.service';

export function usePlayers(params?: PlayerQueryParams) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    async function fetchPlayers() {
      setLoading(true);
      try {
        const response = await PlayerService.getPlayers(params);
        setPlayers(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPlayers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)]);

  return { players, loading, error };
}
