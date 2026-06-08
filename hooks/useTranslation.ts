// hooks/useTranslation.ts
"use client";

import { useEffect, useState } from 'react';

type TranslationValue = string | { [key: string]: TranslationValue };

export function useTranslation() {
  const [translations, setTranslations] = useState<any>(null);
  const [currentLang, setCurrentLang] = useState('en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'en';
    setCurrentLang(lang);
    
    fetch(`/locales/${lang}/common.json`)
      .then(res => res.json())
      .then(data => {
        setTranslations(data);
        setLoading(false);
      });
  }, []);

  const t = (key: string): string => {
    if (!translations) return key;
    const keys = key.split('.');
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
      if (!value) return key;
    }
    return typeof value === 'string' ? value : key;
  };

  return { t, loading, currentLang };
}