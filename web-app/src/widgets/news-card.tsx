import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ContentItem } from '@/shared/api/services/content.service';

interface NewsCardProps {
  item: ContentItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <Link href={`/news/${item.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-card border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
        <div className="h-48 bg-neutral-200 flex items-center justify-center overflow-hidden relative">
          {item.thumbnailUrl ? (
            <Image
              src={item.thumbnailUrl}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <span className="text-4xl">📰</span>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full uppercase tracking-wider">
              {item.category || 'News'}
            </span>
            <span className="text-xs text-neutral-400">
              {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString() : ''}
            </span>
          </div>
          <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
            {item.title}
          </h3>
          <p className="text-neutral-500 text-sm line-clamp-3">
            {item.summary || 'No summary available.'}
          </p>
          <div className="mt-auto pt-4 text-primary-600 text-sm font-medium flex items-center">
            Read More
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};
