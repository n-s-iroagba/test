import { apiClient } from '../api-client';

export interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, unknown>;
  timestamp?: string;
}

export const AnalyticsService = {
  trackEvent: async (event: AnalyticsEvent) => {
    return apiClient.post('/analytics/events', {
      ...event,
      timestamp: event.timestamp || new Date().toISOString()
    });
  },

  trackPageView: async (path: string) => {
    return apiClient.post('/analytics/pageview', {
      path,
      timestamp: new Date().toISOString()
    });
  }
};
