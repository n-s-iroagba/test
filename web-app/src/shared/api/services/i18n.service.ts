import { apiClient } from '../api-client';

export interface Locale {
  code: string;
  name: string;
  flag?: string;
}

export const I18nService = {
  getLocales: async () => {
    return apiClient.get<Locale[]>('/i18n/locales');
  },

  getTranslations: async (locale: string) => {
    return apiClient.get<Record<string, string>>(`/i18n/translations/${locale}`);
  },

  updateUserLocale: async (locale: string) => {
    return apiClient.put('/i18n/user-locale', { locale });
  }
};
