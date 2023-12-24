import { ILink } from '@/shared/types/link.types';

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
}
