'use client';

import React, { useCallback, useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import i18n from '~i18n/index';

const Home = () => {
  const { t } = useTranslation();
  const [lng, setLng] = useState(i18n.language.slice(0, 2));

  const onChange = useCallback(
    (option: string) => {
      i18n.changeLanguage(option);
      setLng(option);
    },
    [lng],
  );
  const languages = useMemo(() => Object.keys(i18n.services.resourceStore.data), []);

  return (
    <>
      <h1> {t('hello')}</h1>

      {languages.map((language) => (
        <button
          key={language}
          onClick={() => onChange(language)}
          style={{
            backgroundColor: language === lng ? 'red' : 'blue',
            color: language === lng ? 'white' : 'black',
            padding: '10px',
            margin: '10px',
          }}
        >
          {language}
        </button>
      ))}
    </>
  );
};

export default Home;
