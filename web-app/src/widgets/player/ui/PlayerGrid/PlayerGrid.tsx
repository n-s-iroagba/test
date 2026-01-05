'use client';

import React, { useState } from 'react';
import { PlayerCard, Player } from '@/entities/player';
import { PlayerFilter } from '@/features/player/filter';

// Mock data for demonstration since backend is not connected
const MOCK_PLAYERS: Player[] = [
  { id: '1', name: 'Lionel Messi', position: 'Forward', teamId: 'mia', number: 10 },
  { id: '2', name: 'Cristiano Ronaldo', position: 'Forward', teamId: 'nas', number: 7 },
  { id: '3', name: 'Kevin De Bruyne', position: 'Midfielder', teamId: 'mci', number: 17 },
  { id: '4', name: 'Virgil van Dijk', position: 'Defender', teamId: 'liv', number: 4 },
];

export const PlayerGrid = () => {
  const [search, setSearch] = useState('');
  const [position, setPosition] = useState('');

  const filteredPlayers = MOCK_PLAYERS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesPosition = position ? p.position === position : true;
    return matchesSearch && matchesPosition;
  });

  return (
    <div>
      <PlayerFilter onSearch={setSearch} onPositionChange={setPosition} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPlayers.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};
