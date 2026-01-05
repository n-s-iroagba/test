import React from 'react';

interface PlayerFiltersProps {
  onFilterChange: (filters: PlayerFiltersState) => void;
}

export interface PlayerFiltersState {
  position: string;
  search: string;
}

export const PlayerFilters: React.FC<PlayerFiltersProps> = ({ onFilterChange }) => {
  const [position, setPosition] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPosition = e.target.value;
    setPosition(newPosition);
    onFilterChange({ position: newPosition, search });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    onFilterChange({ position, search: newSearch });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 mb-6 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <label htmlFor="search" className="sr-only">Search Players</label>
        <input
          type="text"
          id="search"
          placeholder="Search by name..."
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="w-full md:w-48">
        <label htmlFor="position" className="sr-only">Position</label>
        <select
          id="position"
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          value={position}
          onChange={handlePositionChange}
        >
          <option value="">All Positions</option>
          <option value="Goalkeeper">Goalkeeper</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Forward">Forward</option>
        </select>
      </div>
    </div>
  );
};
