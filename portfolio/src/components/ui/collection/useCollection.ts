import { useInfiniteQuery } from 'react-query';

import { DesignService } from '@/services/design.service';

export const useCollection = () => {
  const {
    data: items,
    fetchNextPage,
    fetchPreviousPage,
    isLoading,
    hasNextPage,
    isSuccess,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['get-design-items'],
    ({ pageParam = 1 }) => DesignService.getAll(pageParam),
    {
      getNextPageParam: lastPage => lastPage.data.nextPage ?? undefined,
    },
  );

  return {
    items,
    isLoading,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    isSuccess,
    isFetchingNextPage,
  };
};
