// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { IProjectItems } from '@/shared/types/projects.interface';

import { projectsData } from '@/store/projects.data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProjectItems>,
) {
  res.status(200).json(projectsData);
}
