import { IMenu } from '@/layout/Navigation/header-menu/menu.interface';

export const headerMenuLeft: IMenu = {
  title: 'Header-menu',
  items: [
    {
      title: 'Design',
      icon: 'FaHome',
      link: '/design',
    },
    {
      title: 'Projects',
      icon: 'FaWeibo',
      link: '/projects',
    },
  ],
};

export const headerMenuRight: IMenu = {
  title: 'Header-menu',
  items: [
    {
      title: 'About',
      icon: 'FaInfo',
      link: '/about',
    },
    {
      title: 'Contacts',
      icon: 'FaContao',
      link: '/contacts',
    },
  ],
};

export const headerMenu: IMenu = {
  title: 'Header-menu',
  items: [
    {
      title: 'Design',
      icon: 'FaHome',
      link: '/design',
    },
    {
      title: 'Projects',
      icon: 'FaWeibo',
      link: '/projects',
    },
    {
      title: 'Обо мне',
      icon: 'FaInfo',
      link: '/about',
    },
    {
      title: 'Контакты',
      icon: 'FaContao',
      link: '/contacts',
    },
  ],
};
