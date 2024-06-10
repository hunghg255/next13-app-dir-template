import { MetadataRoute } from 'next';
// import { getTranslations } from 'next-intl/server';

export default function manifest(): Promise<MetadataRoute.Manifest> {
  // const locale = 'en';
  // const t = await getTranslations({ locale });

  return {
    name: 'name',
    start_url: '/',
    theme_color: '#101E33',
  };
}
