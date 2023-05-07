import cn from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@/layout/Navigation/header-menu/menu-item/menu-item.interface';

import MaterialIcon from '@/ui/MaterialIcon';

import { useMediaQuery } from '@/hooks/useMediaQueries';

import styles from '../../Navigation.module.scss';

const MenuItem: FC<{ item: IMenuItem; clickHandler: () => void }> = ({
  item: { title, link, icon },
  clickHandler,
}) => {
  const { asPath } = useRouter();
  return (
    <li>
      <Link
        href={link}
        className={cn(styles.menuItem, {
          ['border-b border-black']: link === asPath,
        })}
        onClick={clickHandler}
      >
        {/*<MaterialIcon*/}
        {/*  name={icon}*/}
        {/*  className={cn({*/}
        {/*    hidden: !isMobile,*/}
        {/*    'text-5xl': isMobile,*/}
        {/*  })}*/}
        {/*/>*/}
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
