import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  return (
    <>
      <p className='max-w-[590px]'>
        {t('home')}
        <br />
        <br />
        <Link href={'/en'}>En</Link>
        <br />
        <br />
        <Link href={'/vi'}>Vi</Link>
      </p>
    </>
  );
}
