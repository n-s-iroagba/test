import React from 'react';

interface PlayerFilterProps {
  onSearch: (query: string) => void;
  onPositionChange: (position: string) => void;
}

export const PlayerFilter = ({ onSearch, onPositionChange }: PlayerFilterProps) => {
  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search players..."
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 rounded-md border-gray-300 shadow-sm p-2 border"
      />
      <select
        onChange={(e) => onPositionChange(e.target.value)}
        className="rounded-md border-gray-300 shadow-sm p-2 border"
      >
        <option value="">All Positions</option>
        <option value="Forward">Forward</option>
        <option value="Midfielder">Midfielder</option>
        <option value="Defender">Defender</option>
        <option value="Goalkeeper">Goalkeeper</option>
      </select>
    </div>
  );
};
