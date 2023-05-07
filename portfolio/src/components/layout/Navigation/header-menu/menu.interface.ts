import { IMenuItem } from '@/layout/Navigation/header-menu/menu-item/menu-item.interface';

export interface IMenu {
  title?: string;
  items: IMenuItem[];
}
