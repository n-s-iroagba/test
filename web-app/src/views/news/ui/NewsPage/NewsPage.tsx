import React from 'react';
import { Navbar } from '@/widgets/navigation';
import { NewsFeed } from '@/widgets/news';

export const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h1>
          <NewsFeed />
        </div>
      </div>
    </div>
  );
};
