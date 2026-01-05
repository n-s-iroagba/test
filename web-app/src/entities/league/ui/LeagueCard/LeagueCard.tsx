import React from 'react';
import { League } from '../../model/types';

interface LeagueCardProps {
  league: League;
}

export const LeagueCard = ({ league }: LeagueCardProps) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
        {league.logoUrl ? (
          <img src={league.logoUrl} alt={league.name} className="w-8 h-8" />
        ) : (
          <span className="text-xl">🏆</span>
        )}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{league.name}</h4>
        <p className="text-sm text-gray-500">{league.country} • {league.season}</p>
      </div>
    </div>
  );
};
