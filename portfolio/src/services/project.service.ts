import { IProjectItems } from '@/shared/types/projects.interface';

import { AxiosClassic, getProjectsApi } from '@/config/config/api.config';

export const ProjectService = {
  async getAll() {
    return await AxiosClassic.get<IProjectItems>(getProjectsApi());
  },
};
