'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { SearchService, SearchResult } from '@/shared/api/services/search.service';
import Link from 'next/link';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams ? searchParams.get('q') : null;
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Define the async function inside
    const fetchResults = async () => {
       if (!query) return;

       setLoading(true);
       try {
           const res = await SearchService.search(query);
           if (isMounted) setResults(res.data);
       } catch (err) {
           console.error(err);
           if (isMounted) {
               // Fallback
               const mockResults: SearchResult[] = [
                   { id: '1', type: 'player', title: 'John Doe', subtitle: 'Forward', url: '/players/1' },
                   { id: '2', type: 'news', title: 'Match Report: Gladiators vs Lions', subtitle: 'News', url: '/news/123' },
               ];
               setResults(mockResults.filter(r => r.title.toLowerCase().includes(query.toLowerCase())));
           }
       } finally {
           if (isMounted) setLoading(false);
       }
    };

    fetchResults();

    return () => {
      isMounted = false;
    };
  }, [query]);

  if (!query) {
    return (
        <div className="py-12 text-center text-neutral-500">
            Please enter a search term.
        </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Search Results for &quot;{query}&quot;</h1>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : results.length === 0 ? (
        <p className="text-neutral-500">No results found.</p>
      ) : (
        <div className="space-y-4">
          {results.map((result) => (
            <Link key={`${result.type}-${result.id}`} href={result.url} className="block bg-white p-4 rounded shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
               <h3 className="font-bold text-lg text-primary-700">{result.title}</h3>
               {result.subtitle && <p className="text-sm text-neutral-500 capitalize">{result.type} • {result.subtitle}</p>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
            <SearchResults />
        </Suspense>
    );
}
