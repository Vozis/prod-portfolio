import { ILink } from '@/shared/types/link.types';

export interface IProjectItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  links: ILink[];
}

export interface IProjectItems {
  items: IProjectItem[];
  previousPage: number | null;
  nextPage: number | null;
  total: number;
  totalPages: number;
}
