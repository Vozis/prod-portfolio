import cn from 'clsx';
import Link from 'next/link';
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { useLockedBody, useOnClickOutside } from 'usehooks-ts';

import Menu from '@/layout/Navigation/header-menu/Menu';
import {
  headerMenuLeft,
  headerMenuRight,
} from '@/layout/Navigation/header-menu/menu.data';

import MaterialIcon from '@/ui/MaterialIcon';
import BurgerMenu from '@/ui/burger-menu/BurgerMenu';

import { useMediaQuery } from '@/hooks/useMediaQueries';

import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  const isMobile = useMediaQuery('(max-width:650px)');
  const navRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useLockedBody(isMenuOpen, 'root');

  // useOnClickOutside(navRef, () => {
  //   if (isMenuOpen) {
  //     setIsMenuOpen(!isMenuOpen);
  //   }
  // });

  return (
    <header className={cn(styles.navigation)}>
      {isMobile && (
        <BurgerMenu
          className={'absolute top-0.5 right-0.5 z-20'}
          isOpen={isMenuOpen}
          // className={'absolute z-10 right-5 top-5'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}
      <nav>
        {isMobile && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className={cn(styles.cover, {
              [styles.coverShow]: isMenuOpen,
            })}
          />
        )}
        <div
          className={cn(styles.menuContainer, {
            [styles.menuOpen]: isMenuOpen,
          })}
          ref={navRef}
        >
          <Menu
            clickHandler={() => setIsMenuOpen(false)}
            menu={headerMenuLeft}
          />
          <Link href={'/'} className={styles.logo}>
            IlyaSizov
          </Link>
          <Menu
            clickHandler={() => setIsMenuOpen(false)}
            menu={headerMenuRight}
          />
          {isMobile && (
            <div className={styles.socials}>
              <a href={'mailto:sizov.ilya1996@gmail.com'}>
                <MaterialIcon name={'FaGoogle'} />
              </a>
              <a href={'mailto:sizov.ilya1996@gmail.com'}>
                <MaterialIcon name={'FaWhatsapp'} />
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;