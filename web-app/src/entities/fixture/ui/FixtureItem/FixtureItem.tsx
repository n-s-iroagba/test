import React from 'react';
import { Fixture } from '../../model/types';

interface FixtureItemProps {
  fixture: Fixture;
}

export const FixtureItem = ({ fixture }: FixtureItemProps) => {
  const isLive = fixture.status === 'live';

  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-100 last:border-0">
      <div className="flex-1 text-right font-medium">{fixture.homeTeam}</div>
      <div className="mx-4 px-3 py-1 bg-gray-100 rounded text-sm font-bold min-w-[60px] text-center">
        {fixture.status === 'scheduled' ? (
          <span className="text-gray-500">{new Date(fixture.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        ) : (
          <span className={isLive ? "text-red-500" : "text-gray-900"}>
            {fixture.score?.home} - {fixture.score?.away}
          </span>
        )}
      </div>
      <div className="flex-1 text-left font-medium">{fixture.awayTeam}</div>
    </div>
  );
};
