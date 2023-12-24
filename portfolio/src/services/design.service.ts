import { IDesignItems } from '@/shared/types/design-item.types';

import { AxiosClassic, getDesignApi } from '@/config/config/api.config';

export const DesignService = {
  async getAll(page?: string) {
    return AxiosClassic.get<IDesignItems>(getDesignApi(''), {
      params: page
        ? {
            page,
          }
        : {},
    });
  },
};
