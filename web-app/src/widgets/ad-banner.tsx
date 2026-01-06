'use client';

import React, { useEffect, useState } from 'react';
import { AdvertisingService, AdCreative } from '@/shared/api/services/advertising.service';

interface AdBannerProps {
  slotId: string;
  className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ slotId, className }) => {
  const [ad, setAd] = useState<AdCreative | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchAd() {
      try {
        const response = await AdvertisingService.getAdForSlot(slotId);
        if (isMounted) {
            setAd(response.data.creative);
            // Track impression
            if (response.data.creative) {
                AdvertisingService.trackImpression(response.data.creative.id).catch(console.error);
            }
        }
      } catch (err) {
        console.error("Failed to fetch ad", err);
        // Fallback mock ad for demo
        if (isMounted) {
            setAd({
                id: 'mock-1',
                name: 'Season Tickets',
                imageUrl: 'https://placehold.co/728x90/0ea5e9/ffffff?text=Season+Tickets+On+Sale+Now',
                targetUrl: '/tickets',
                type: 'banner'
            });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchAd();
    return () => { isMounted = false; };
  }, [slotId]);

  const handleClick = () => {
    if (ad) {
      AdvertisingService.trackClick(ad.id).catch(console.error);
    }
  };

  if (loading) return <div className={`h-24 bg-neutral-100 animate-pulse rounded ${className}`}></div>;
  if (!ad) return null;

  return (
    <div className={`flex justify-center my-6 ${className}`}>
      <a
        href={ad.targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="block relative overflow-hidden rounded shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="absolute top-0 right-0 bg-neutral-200 text-[10px] px-1 text-neutral-500">Ad</div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ad.imageUrl} alt={ad.name} className="max-w-full h-auto" />
      </a>
    </div>
  );
};
