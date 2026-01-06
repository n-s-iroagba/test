import React from 'react';
import { Fixture } from '@/shared/api/services/league.service';

interface FixtureCardProps {
  fixture: Fixture;
}

export const FixtureCard: React.FC<FixtureCardProps> = ({ fixture }) => {
  const date = new Date(fixture.date);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center text-xs text-neutral-400 mb-3">
        <span>{date.toLocaleDateString()} • {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          fixture.status === 'live' ? 'bg-error-500 text-white animate-pulse' :
          fixture.status === 'completed' ? 'bg-neutral-100 text-neutral-500' :
          'bg-success-50 text-success-600'
        }`}>
          {fixture.status}
        </span>
      </div>

      <div className="flex justify-between items-center mb-3">
        <div className="flex-1 text-right font-bold text-neutral-800 pr-3">{fixture.homeTeam}</div>
        <div className="bg-neutral-100 px-3 py-1 rounded text-sm font-mono font-bold text-neutral-600">
          {fixture.status === 'scheduled' ? 'VS' : `${fixture.score?.home ?? 0} - ${fixture.score?.away ?? 0}`}
        </div>
        <div className="flex-1 text-left font-bold text-neutral-800 pl-3">{fixture.awayTeam}</div>
      </div>

      <div className="text-center text-xs text-neutral-500 border-t border-neutral-100 pt-2">
        📍 {fixture.venue}
      </div>
    </div>
  );
};
