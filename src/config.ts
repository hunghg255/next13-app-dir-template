import { Pathnames } from 'next-intl/navigation';

export const port = 3000;
export const host = 'http://localhost:3000';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'vi'] as const;

export const pathnames = {
  '/': '/',
  en: '/en',
  vi: '/vi',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = 'as-needed' as const;

export type AppPathnames = keyof typeof pathnames;
