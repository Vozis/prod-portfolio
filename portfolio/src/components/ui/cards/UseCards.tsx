import { useInfiniteQuery } from 'react-query';

import { ProjectService } from '@/services/project.service';

export const useCards = () => {
  const {
    data: projects,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['get-project-items'],
    ({ pageParam = 1 }) => ProjectService.getAll(pageParam),
    {
      getNextPageParam: lastPage => lastPage.data.nextPage ?? undefined,
    },
  );

  return {
    projects,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
  };
};
