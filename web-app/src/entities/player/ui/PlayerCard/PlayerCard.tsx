import React from 'react';
import { Player } from '../../model/types';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {player.avatarUrl ? (
          <img src={player.avatarUrl} alt={player.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl text-gray-400">👤</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{player.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{player.position}</span>
          <span className="text-gray-500 font-mono">#{player.number}</span>
        </div>
      </div>
    </div>
  );
};
