'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ContentService, ContentItem } from '@/shared/api/services/content.service';
import { LeagueService, Fixture } from '@/shared/api/services/league.service';
import { NewsCard } from '@/widgets/news-card';
import { FixtureCard } from '@/widgets/fixture-card';
import { AdBanner } from '@/widgets/ad-banner';

export default function Home() {
  const [latestNews, setLatestNews] = useState<ContentItem[]>([]);
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [newsRes, fixturesRes] = await Promise.all([
          ContentService.getLatestContent(2),
          LeagueService.getUpcomingFixtures(3)
        ]);
        setLatestNews(newsRes.data || []);
        setFixtures(fixturesRes.data || []);
      } catch (error) {
        console.error("Failed to fetch home data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-primary-900 mb-6 font-serif">Welcome to the Club</h1>
      <p className="text-lg text-neutral-600 max-w-2xl text-center mb-12">
        The official digital ecosystem for Amafor Gladiators Football Club.
        Follow matches, check player stats, and stay updated with the latest news.
      </p>

      <AdBanner slotId="home-top-banner" className="w-full max-w-4xl mb-12" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* Latest News Section */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-secondary-700">Latest News</h2>
            <Link href="/news" className="text-primary-600 hover:text-primary-800 text-sm font-semibold">View All News &rarr;</Link>
          </div>

          {loading ? (
             <div className="animate-pulse space-y-4">
               <div className="h-48 bg-neutral-200 rounded-lg"></div>
               <div className="h-48 bg-neutral-200 rounded-lg"></div>
             </div>
          ) : latestNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestNews.map(item => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="bg-neutral-50 p-8 rounded-lg text-center border border-neutral-200">
              <p className="text-neutral-500">No news available currently.</p>
            </div>
          )}
        </div>

        {/* Upcoming Fixtures Section */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-secondary-700">Upcoming Fixtures</h2>
            <span className="text-primary-600 hover:text-primary-800 text-sm font-semibold cursor-pointer">Calendar &rarr;</span>
          </div>

          {loading ? (
             <div className="animate-pulse space-y-4">
               <div className="h-24 bg-neutral-200 rounded-lg"></div>
               <div className="h-24 bg-neutral-200 rounded-lg"></div>
               <div className="h-24 bg-neutral-200 rounded-lg"></div>
             </div>
          ) : fixtures.length > 0 ? (
            <div className="space-y-4">
              {fixtures.map(fixture => (
                <FixtureCard key={fixture.id} fixture={fixture} />
              ))}
            </div>
          ) : (
            <div className="bg-neutral-50 p-8 rounded-lg text-center border border-neutral-200">
              <p className="text-neutral-500">No fixtures scheduled.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
