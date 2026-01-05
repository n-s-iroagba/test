import React from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h3 className="font-bold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};
