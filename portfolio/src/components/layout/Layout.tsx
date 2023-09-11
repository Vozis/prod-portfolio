import React, { FC, PropsWithChildren } from 'react';

import Navigation from '@/layout/Navigation/Navigation';
import Footer from '@/layout/footer/Footer';

import TransitionProvider from '@/providers/transition/TransitionProvider';

import styles from './Layout.module.scss';
import MaterialIcon from '@/ui/MaterialIcon';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    // <div className={'grid-areas-layout min-h-full h-full justify-stretch'}>
    <div className={styles.layout}>
      <Navigation />
      <main className={'grid-in-main mx-auto pt-24 max-md:pt-16 animate-fade px-layout max-md:px-5 max-sm:px-4 max-w-[1200px]'}>
        {children}
      </main>
      {/*<TransitionProvider className={'grid-in-main mx-auto pt-24 max-md:pt-16 animate-fade px-layout max-md:px-5 max-sm:px-4 max-w-[1200px]'}>*/}
      {/*  {children}*/}
      {/*</TransitionProvider>*/}
      <Footer />
    </div>
  );
};

export default Layout;
