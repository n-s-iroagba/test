import React from 'react';
import { Standing } from '@/shared/api/services/league.service';

interface StandingsTableProps {
  standings: Standing[];
}

export const StandingsTable: React.FC<StandingsTableProps> = ({ standings }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-neutral-200">
      <table className="min-w-full divide-y divide-neutral-200">
        <thead className="bg-neutral-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider w-10">Pos</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Team</th>
            <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">P</th>
            <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider hidden sm:table-cell">W</th>
            <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider hidden sm:table-cell">D</th>
            <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider hidden sm:table-cell">L</th>
            <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider hidden md:table-cell">GD</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-neutral-700 uppercase tracking-wider">Pts</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-neutral-200">
          {standings.map((team, index) => (
            <tr key={team.teamId} className={team.teamName === 'Amafor Gladiators' ? 'bg-primary-50' : 'hover:bg-neutral-50'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 font-medium">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="text-sm font-bold text-neutral-900">{team.teamName}</div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-neutral-600">{team.played}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-neutral-600 hidden sm:table-cell">{team.won}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-neutral-600 hidden sm:table-cell">{team.drawn}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-neutral-600 hidden sm:table-cell">{team.lost}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-neutral-600 hidden md:table-cell">
                {team.goalsFor - team.goalsAgainst}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-neutral-900">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
