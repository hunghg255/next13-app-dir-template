import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { defaultLocale, localePrefix, locales, pathnames } from './config';

// Check auth from server side here
const nextIntl = createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
});

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return nextIntl(request);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|ko|id|ja|es)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
