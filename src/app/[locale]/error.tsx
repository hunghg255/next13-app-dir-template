'use client';

import { useEffect } from 'react';

import { useTranslations } from 'next-intl';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div>
        {t.rich('description', {
          p: (chunks) => <p className='mt-4'>{chunks}</p>,
          retry: (chunks) => (
            <button
              className='text-white underline underline-offset-2'
              onClick={reset}
              type='button'
            >
              {chunks}
            </button>
          ),
        })}
      </div>
    </>
  );
}
