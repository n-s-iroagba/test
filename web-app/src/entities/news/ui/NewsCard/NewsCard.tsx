import React from 'react';
import { NewsArticle } from '../../model/types';
import Link from 'next/link';

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {article.imageUrl && (
        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{article.category}</span>
          <span className="text-xs text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.summary}</p>
        <Link href={`/news/${article.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};
