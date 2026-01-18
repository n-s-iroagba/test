'use client';

import React, { useState, useEffect } from 'react';
import { I18nService, Locale } from '@/shared/api/services/i18n.service';

export const LanguageSwitcher: React.FC = () => {
  const [locales, setLocales] = useState<Locale[]>([]);
  const [currentLocale, setCurrentLocale] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchLocales() {
      try {
        const response = await I18nService.getLocales();
        setLocales(response.data);
      } catch (err) {
        console.error("Failed to load locales", err);
        // Fallback
        setLocales([
            { code: 'en', name: 'English', flag: '🇬🇧' },
            { code: 'es', name: 'Español', flag: '🇪🇸' },
            { code: 'fr', name: 'Français', flag: '🇫🇷' },
        ]);
      }
    }
    fetchLocales();
  }, []);

  const handleLocaleChange = async (locale: string) => {
    setCurrentLocale(locale);
    setIsOpen(false);
    try {
        await I18nService.updateUserLocale(locale);
        // In a real app, this would trigger a context update to fetch new translations
        console.log(`Locale changed to ${locale}`);
    } catch (err) {
        console.error(err);
    }
  };

  const currentFlag = locales.find(l => l.code === currentLocale)?.flag || '🌐';

  return (
    <div className="relative ml-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded hover:bg-primary-800 transition-colors flex items-center text-sm font-medium"
      >
        <span className="mr-1">{currentFlag}</span>
        <span className="uppercase">{currentLocale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-30 border border-neutral-200">
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={() => handleLocaleChange(locale.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 ${currentLocale === locale.code ? 'font-bold text-primary-600' : 'text-neutral-700'}`}
            >
              <span className="mr-2">{locale.flag}</span>
              {locale.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
