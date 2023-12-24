import React, { FC, Suspense } from 'react';

import { useCollection } from '@/ui/collection/useCollection';
import SkeletonLoader from '@/ui/skeleton/SkeletonLoader';

import styles from './Collection.module.scss';

const DynamicCollectionItem = React.lazy(
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
            <SkeletonLoader className={styles.skeletonCard} />
            <SkeletonLoader className={styles.skeletonCard} />
            <SkeletonLoader className={styles.skeletonCard} />
          </>
        ) : (
          items?.pages.map(page => (
            <React.Fragment key={page.data.nextPage}>
              {page.data.items.map(item => (
                <Suspense
                  key={item.id}
                  fallback={<SkeletonLoader className={styles.skeletonCard} />}
                >
                  <DynamicCollectionItem item={item} />
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
