import { ILink } from '@/shared/types/link.types';
import React from 'react';

export interface IProjectItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  links: ILink[];
}

export interface IProjectItems {
  items: IProjectItem[];
  previousPage: number | null;
  nextPage: number | null;
  total: number;
  totalPages: number;
}
