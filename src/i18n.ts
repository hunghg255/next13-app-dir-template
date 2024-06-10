/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from './config';

export const getLocaleFromCdn = async ({ locale }: any) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('../public/locales/en.json')
        : import(`../public/locales/${locale}.json`))
    ).default,
  };
};

export default getRequestConfig(getLocaleFromCdn);
