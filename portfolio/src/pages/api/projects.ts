// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { IProjectItem, IProjectItems } from '@/shared/types/projects.interface';

import { designItems } from '@/store/design.data';
import { projectsData } from '@/store/projects.data';

import { paginate } from '@/utils/paginate';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProjectItems>,
) {
  const query = req.query;
  const { page } = query;
  const per_page = 8;

  let data = paginate(projectsData);

  if (page) {
    data = paginate(projectsData, +page, +per_page);
  }

  res.status(200).json(data);
}
