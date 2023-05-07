import { useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';

import { DesignService } from '@/services/design.service';

export const useCollection = () => {
  // const [count, setCount] = useState<string>('2');
  //
  // const handleSetCount = (string: string) => {
  //   setCount(string);
  // };
  //
  // const { data: items, isLoading } = useQuery(
  //   ['get-collection', count],
  //   () => DesignService.getAll(count),
  //   {
  //     select: ({ data }) => data,
  //   },
  // );

  const {
    data: items,
    fetchNextPage,
    fetchPreviousPage,
    isLoading,
    hasNextPage,
    isSuccess,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['get'],
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
