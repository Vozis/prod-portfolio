import React, { FC, PropsWithChildren } from 'react';

import Navigation from '@/layout/Navigation/Navigation';
import Footer from '@/layout/footer/Footer';

import TransitionProvider from '@/providers/transition/TransitionProvider';

import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <TransitionProvider className={styles.containerContent}>
        {children}
      </TransitionProvider>
      <Footer />
    </div>
  );
};

export default Layout;
