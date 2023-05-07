import { ILink } from '@/shared/types/link.types';

export interface ISlide {
  image: string;
  title: string;
  description: string;
  links: ILink[];
}

export interface ISlider {
  slides: ISlide[];
}
