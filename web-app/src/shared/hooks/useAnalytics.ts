'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { AnalyticsService } from '@/shared/api/services/analytics.service';

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
    AnalyticsService.trackPageView(url).catch(console.error);
  }, [pathname, searchParams]);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    AnalyticsService.trackEvent({ eventName, properties }).catch(console.error);
  };

  return { trackEvent };
}
