import { ILink } from '@/shared/types/link.types';

export interface IDesignItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  links: ILink[];
}

export interface IDesignItems {
  items: IDesignItem[];
  previousPage: number | null;
  nextPage: number | null;
  total: number;
  totalPages: number;
}
