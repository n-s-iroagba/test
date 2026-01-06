'use client';

import { useAnalytics } from '@/shared/hooks/useAnalytics';

export function AnalyticsTracker() {
  useAnalytics();
  return null;
}
