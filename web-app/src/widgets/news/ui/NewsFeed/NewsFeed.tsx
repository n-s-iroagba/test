import React from 'react';
import { NewsCard, NewsArticle } from '@/entities/news';

const MOCK_NEWS: NewsArticle[] = [
  {
    id: '1',
    title: 'Season Opener: What to Expect',
    summary: 'The new season is finally here! Here is a breakdown of what to expect from the team this year, including key player matchups and tactical shifts.',
    publishedAt: '2023-08-10T10:00:00Z',
    category: 'Team News',
    imageUrl: 'https://via.placeholder.com/400x200?text=Season+Opener'
  },
  {
    id: '2',
    title: 'Youth Academy Graduates Sign Pro Contracts',
    summary: 'Three promising talents from our youth academy have put pen to paper on their first professional contracts with the club.',
    publishedAt: '2023-08-12T14:30:00Z',
    category: 'Academy',
    imageUrl: 'https://via.placeholder.com/400x200?text=Academy'
  },
  {
    id: '3',
    title: 'Match Report: Pre-season Friendly',
    summary: 'A thrilling encounter ended in a draw as the team finalized their preparations for the upcoming campaign.',
    publishedAt: '2023-08-05T18:00:00Z',
    category: 'Match Report',
    imageUrl: 'https://via.placeholder.com/400x200?text=Match+Report'
  }
];

export const NewsFeed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_NEWS.map(article => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};
