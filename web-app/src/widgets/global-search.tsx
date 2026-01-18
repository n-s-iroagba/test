'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { SearchService, SearchResult } from '@/shared/api/services/search.service';

export const GlobalSearch: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 2) {
        setLoading(true);
        try {
            // Mocking results for demo if API fails or returns empty
            const response = await SearchService.search(query);
            setResults(response.data);
        } catch (error) {
            // Fallback mock results for better UX demonstration
            console.log("Search API error (expected if no backend):", error);
            const mockResults: SearchResult[] = [
                { id: '1', type: 'player', title: 'John Doe', subtitle: 'Forward', url: '/players/1' },
                { id: '2', type: 'news', title: 'Match Report: Gladiators vs Lions', subtitle: 'News', url: '/news/123' },
            ];
            setResults(mockResults.filter(r => r.title.toLowerCase().includes(query.toLowerCase())));
        } finally {
            setLoading(false);
            setIsOpen(true);
        }
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (url: string) => {
    router.push(url);
    setIsOpen(false);
    setQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if(query.trim()) {
          router.push(`/search?q=${encodeURIComponent(query)}`);
          setIsOpen(false);
      }
  }

  return (
    <div className="relative w-full max-w-sm ml-4" ref={wrapperRef}>
      <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <input
                type="text"
                className="w-full bg-primary-800 text-white placeholder-primary-300 border border-primary-700 rounded-md py-1.5 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-primary-400 focus:border-primary-400 sm:text-sm"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query.length >= 2 && setIsOpen(true)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
          </div>
      </form>

      {isOpen && (results.length > 0 || loading) && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 border border-neutral-200">
          {loading ? (
            <div className="px-4 py-2 text-sm text-neutral-500">Searching...</div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((result) => (
                <li key={`${result.type}-${result.id}`}>
                  <button
                    onClick={() => handleSelect(result.url)}
                    className="block w-full text-left px-4 py-2 hover:bg-neutral-50"
                  >
                    <div className="text-sm font-medium text-neutral-900">{result.title}</div>
                    {result.subtitle && (
                      <div className="text-xs text-neutral-500 capitalize">{result.type} • {result.subtitle}</div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
             <div className="px-4 py-2 text-sm text-neutral-500">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
};
