// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { IDesignItems } from '@/shared/types/design-item.types';

import { designItems } from '@/store/design.data';

import { paginate } from '@/utils/paginate';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDesignItems>,
) {
  const query = req.query;
  const { page } = query;
  const per_page = 6;

  let data = paginate(designItems);

  if (page) {
    data = paginate(designItems, +page, +per_page);
  }

  res.status(200).json(data);

  // if (!count || count === 'all') {
  // } else {
  //   res.status(200).json(designItems.slice(0, +count));
  // }
}
