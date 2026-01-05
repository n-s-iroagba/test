import React from 'react';
import { Navbar } from '@/widgets/navigation';
import { PlayerGrid } from '@/widgets/player';

export const PlayersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Players Database</h1>
          <PlayerGrid />
        </div>
      </div>
    </div>
  );
};
