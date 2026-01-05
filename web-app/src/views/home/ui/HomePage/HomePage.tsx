import React from 'react';
import { UserCard } from '@/entities/user';

export const HomePage = () => {
  const dummyUser = { id: '1', name: 'John Doe', email: 'john@example.com' };

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back</h2>
        <div className="bg-white overflow-hidden shadow rounded-lg p-6">
          <p className="mb-4 text-gray-600">This is your dashboard overview.</p>
          <div className="max-w-md">
            <UserCard user={dummyUser} />
          </div>
        </div>
      </div>
    </main>
  );
};
