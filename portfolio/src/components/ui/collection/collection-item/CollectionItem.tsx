import Image from 'next/image';
import Link from 'next/link';
import { FC, Suspense, useState } from 'react';

import LinkButton from '@/ui/button/LinkButton';

import { IDesignItem } from '@/shared/types/design-item.types';

import image from '@/assets/images/23.jpg';

import styles from './CollectionItem.module.scss';

const CollectionItem: FC<{ item: IDesignItem }> = ({ item }) => {
  return (
    <div className={styles.collectionItem}>
      <p className={styles.linkHead}>{item.title}</p>
      <p className={styles.linkDescription}>{item.description}</p>
      <div className={styles.linkImage}>
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          sizes={'(max-width:1440px) 100%'}
          placeholder="blur"
          blurDataURL="/23.jpg"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.linkActions}>
        {item.links.map((item, index) => (
          <LinkButton
            key={index}
            link={item}
            className={'text-white hover:border-white'}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionItem;
