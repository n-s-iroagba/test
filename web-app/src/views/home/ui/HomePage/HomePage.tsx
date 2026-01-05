import React from 'react';
import { Header } from '@/widgets/header';
import { UserCard } from '@/entities/user';

export const HomePage = () => {
  const dummyUser = { id: '1', name: 'John Doe', email: 'john@example.com' };

  return (
    <main>
      <Header />
      <div className="p-8">
        <h2 className="text-2xl mb-4">Welcome</h2>
        <UserCard user={dummyUser} />
      </div>
    </main>
  );
};
