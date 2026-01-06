import { apiClient } from '../api-client';

export interface AdCreative {
  id: string;
  name: string;
  imageUrl: string;
  targetUrl: string;
  type: 'banner' | 'sidebar' | 'popup';
}

export interface AdCampaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'archived';
  creatives: AdCreative[];
}

export const AdvertisingService = {
  // Mock function to get an active ad since endpoints in yaml are CRUD mostly
  // We'll simulate getting an ad for a specific slot
  getAdForSlot: async (slotId: string) => {
    // Ideally this would be POST /api/ad-delivery/select or similar
    // using the patterns from api-service-mapping
    return apiClient.post<{ creative: AdCreative }>('/ad-delivery/select', { slotId });
  },

  trackImpression: async (creativeId: string) => {
    return apiClient.post('/ad-delivery/impression', { creativeId });
  },

  trackClick: async (creativeId: string) => {
    return apiClient.post('/ad-delivery/click', { creativeId });
  }
};
