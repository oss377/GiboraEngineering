// app/i18n.ts
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';

export const locales = ['en', 'am', 'om'];
export const defaultLocale = 'en';

export async function initI18n(lang: string = defaultLocale) {
  const i18nInstance = createInstance();
  
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => 
      import(`../public/locales/${language}/${namespace}.json`)
    ))
    .init({
      lng: lang,
      fallbackLng: defaultLocale,
      ns: ['common'],
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
    });
    
  return i18nInstance;
}
