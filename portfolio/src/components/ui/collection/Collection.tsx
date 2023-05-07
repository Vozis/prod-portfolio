import React, { FC, Suspense, useEffect, useState } from 'react';

import Button from '@/ui/button/Button';
import CollectionItem from '@/ui/collection/collection-item/CollectionItem';
import { useCollection } from '@/ui/collection/useCollection';
import SkeletonLoader from '@/ui/skeleton/SkeletonLoader';

import { IDesignItems } from '@/shared/types/design-item.types';

import styles from './Collection.module.scss';

const LazyItem = React.lazy(
  () => import('@/ui/collection/collection-item/CollectionItem'),
);

const Collection: FC = () => {
  const {
    items,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isFetchingNextPage,
  } = useCollection();

  return (
    <>
      <div className={styles.collection}>
        {isLoading ? (
          <>
            <SkeletonLoader className={'h-48 self-stretch'} />
            <SkeletonLoader className={'h-48 self-stretch'} />
            <SkeletonLoader className={'h-48 self-stretch'} />
          </>
        ) : (
          items?.pages.map(page => (
            <React.Fragment key={page.data.nextPage}>
              {page.data.items.map(item => (
                <Suspense
                  key={item.id}
                  fallback={<SkeletonLoader className={'h-48 rounded-3xl'} />}
                >
                  <LazyItem item={item} />
                </Suspense>
              ))}
            </React.Fragment>
          ))
          // items?.map(item => (
          //   <Suspense key={item.id} fallback={<SkeletonLoader />}>
          //     <LazyItem item={item} />
          //   </Suspense>
          // ))
        )}
      </div>
      {hasNextPage && (
        <>
          <button
            onClick={() => fetchNextPage()}
            className={'inline-flex mx-auto px-4 py-2'}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Идет загрузка...' : 'Показать больше'}
          </button>
        </>
      )}
    </>
  );
};

export default Collection;
