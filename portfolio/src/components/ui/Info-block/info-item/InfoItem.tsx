import { FC, PropsWithChildren } from 'react';

import styles from './InfoItem.module.scss';

interface IInfoItem {
  name: string;
  period: string;
  category?: string;
}

const InfoItem: FC<PropsWithChildren<IInfoItem>> = ({
  children,
  period,
  name,
  category,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.itemContent}>
        <p>Период</p>
        <p>{period}</p>
      </div>
      <div className={styles.itemContent}>
        <p>Наименование</p>
        <p>{name}</p>
      </div>
      {category && (
        <div className={styles.itemContent}>
          <p>Категория</p>
          <p>{category}</p>
        </div>
      )}
    </li>
  );
};

export default InfoItem;
