import React, { FC } from 'react';

import MenuItem from '@/layout/Navigation/header-menu/menu-item/MenuItem';
import { IMenu } from '@/layout/Navigation/header-menu/menu.interface';

import styles from '../Navigation.module.scss';

const Menu: FC<{ menu: IMenu; clickHandler: () => void }> = ({
  menu: { items, title },
  clickHandler,
}) => {
  return (
    <ul className={styles.menu}>
      {items && items.length
        ? items.map(item => (
            <MenuItem clickHandler={clickHandler} key={item.link} item={item} />
          ))
        : null}
    </ul>
  );
};

export default Menu;
