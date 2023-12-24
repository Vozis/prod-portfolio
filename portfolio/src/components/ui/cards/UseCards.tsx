import { useQuery } from 'react-query';

import { ProjectService } from '@/services/project.service';

export const useCards = () => {
  const { data: projects, isLoading } = useQuery(
    ['get-project-data-items'],
    () => ProjectService.getAll(),
    {
      select: ({ data }) => data,
    },
  );

  return {
    projects,
    isLoading,
  };
};
