import React from 'react';
import { Button } from '@/shared/ui/Button';

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <h1 className="text-xl font-bold">My App</h1>
      <Button>Login</Button>
    </header>
  );
};
