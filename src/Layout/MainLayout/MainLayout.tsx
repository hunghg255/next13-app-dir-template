'use client';

import React from 'react';

import '../../../i18n/index';

import styles from './index.module.scss';

const MainLayout = ({ children }: any) => {
  return <div className={styles.containerMainLayout}>{children}</div>;
};

export default MainLayout;
