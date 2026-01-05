'use client';

import { useState, useEffect } from 'react';
import { ContentService, ContentItem } from '@/shared/api/services/content.service';
import { NewsCard } from '@/widgets/news-card';

export default function NewsPage() {
  const [news, setNews] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await ContentService.getAllContent();
        setNews(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load news.');
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="py-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-bold font-serif text-primary-900 mb-2">Club News</h1>
          <p className="text-neutral-500">Stay up to date with the latest from Amafor Gladiators</p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : error ? (
        <div className="bg-error-50 text-error-600 p-4 rounded-lg text-center">
          {error}
        </div>
      ) : news.length === 0 ? (
        <div className="text-center py-20 bg-neutral-50 rounded-lg border border-neutral-100">
          <span className="text-4xl block mb-4">📭</span>
          <p className="text-neutral-500 text-lg">No news articles found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
