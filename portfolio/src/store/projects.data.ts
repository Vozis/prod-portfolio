import { IProjectItem } from '@/shared/types/projects.interface';

export const projectsData: IProjectItem[] = [
  {
    id: 1,
    title: 'В Спорте',
    category: 'Full-stack | SCRUM-разработка | React, NestJS, PrismaORM, NxDev, SocketIO, Redux Toolkit, Axios, Nodemailer, React-hook-form, TypeScript',
    shortDescription: `
    <p>
    Сервис, целью которого является помощь в поиске единомышленников для занятия спортом любых видов, улучшение 
    социальной активности, поиска друзей и знакомых.
</p>
    `,
    description:
      `
      <p>
      Сервис, целью которого является помощь в поиске единомышленников для занятия спортом любых видов, улучшение 
      социальной активности, поиска друзей и знакомых. В основе сервиса заложена возможность создания собственных событий 
      по заданным вами параметрам или принятие участия в событиях других пользователей.
    
      </p>
      <Image src='/images/projects/sport/sport-main.jpg'/>
      <p>
      Для создания более уникального и узконаправленного опыта для отдельно взятого пользователя есть возможность указать 
      свои интересы и пожелания с возможностью изменять их в любой момент времени с целью обеспечить целенаправленную работу сервиса.
      </p>
      <Image src='/images/projects/sport/sport-profile.jpg'/>
      <p>
      Для улучшения социальной активности добавлена возможность общения с 
      другими участниками в реальном времени.
      </p>
      <Image src='/images/projects/sport/sport-event.jpg'/>
      <p>
      Реализована система получения в реальном времени и классификации по
      категориям уведомлений. 
      </p>
      <Image src='/images/projects/sport/sport-notifications.jpg'/>
      <p>
      Работа приложения адаптирована под различные разрешения экрана для наибольшей 
      доступности.
      </p>
      <div>
      <Image src='/images/projects/sport/sport-main-mobile.jpg'/>
      <Image src='/images/projects/sport/sport-profile-mobile.jpg'/>
      </div>
      <p>
        Backend часть выполнена на фреймворке Nest JS c созданием базы данных 
        в PostgreSQL. Разработана таблица с организацией связи между сущностями. 
      </p>
      <Image src='/images/projects/sport/sport-main-loading.jpg'/>
      <Image src='/images/projects/sport/sport-profile-load-mobile.jpg'/>
      <p>
        Backend часть выполнена на фреймворке NestJS c созданием базы данных 
        в PostgreSQL. Разработана таблица с организацией связи между сущностями. 
      </p>
      <Image src='/images/projects/sport/sport-table-2.jpg'/>
     `
    ,
    imageUrl: '/images/projects/sport/sport-main.jpg',
    links: [
      {
        url: 'https://github.com/Vozis/gb-final-project',
        name: 'Github',
        icon: 'FaGithubAlt',
      },
      {
        url: 'https://github.com/',
        name: 'Deploy',
        icon: 'FaSafari',
      },
    ],
  },
  {
    id: 2,
    title: 'Amazon',
    category: 'Full-stack | NestJS, NextJS, React-query, Redux Toolkit, Axios, React-select, Tailwind, SCSS, TypeScript',
    shortDescription: `
    <p>
      Реализация копии интернет-магазина Amazon. FullStack-разработка.
    </p>
    `,
    description:
      `<p>
        В проекте реализован основной функционал интернет-магазина в
        тренировочном формате, включая реализации поиска, сортировки и корзины 
        с добавлением и оплатой товара. 
      </p>
      <Image src='/images/projects/amazon/amazon.jpg'/>
      <p>
        Backend часть выполнена на фреймворке Nest JS c созданием базы данных 
        в PostgreSQL. Разработана таблица с организацией связи между сущностями. 
      </p>
      <Image src='/images/projects/amazon/amazon-table.jpg'/>
      `,
    imageUrl: '/images/projects/amazon/amazon.jpg',
    links: [
      {
        url: 'https://github.com/Vozis/gb-final-project',
        name: 'Github',
        icon: 'FaGithubAlt',
      },
      {
        url: 'https://github.com/',
        name: 'Deploy',
        icon: 'FaSafari',
      },
    ],
  },
  {
    id: 3,
    title: 'Личное портфолио',
    category: 'Full-stack | NextJS, Framer-motion, Tailwind, SASS, Typescript',
    shortDescription: `
    <p>
      Реализация моего портфолио для всемирного доступа.
    </p>
    `,
    description:
      `
      <p>
      Реализация моего портфолио для всемирного доступа. 
      </p>
      <Image src='/images/projects/portfolio/portfolio-main.jpg'/>
      <Image src='/images/projects/portfolio/portfolio-design.jpg'/>
      <p>
      Реализация моего портфолио для всемирного доступа. 
      </p>
      <Image src='/images/projects/portfolio/portfolio-projects.jpg'/>
      <Image src='/images/projects/portfolio/portfolio-about.jpg'/>
      <p>
      Реализация моего портфолио для всемирного доступа. 
      </p>
      `,
    imageUrl: '/images/projects/portfolio/portfolio-main.jpg',
    links: [
      {
        url: 'https://github.com/Vozis/prod-portfolio',
        name: 'Github',
        icon: 'FaGithubAlt',
      },
      {
        url: 'https://github.com/',
        name: 'Deploy',
        icon: 'FaSafari',
      },
    ],
  },
  {
    id: 4,
    title: 'Online-cinema',
    category: 'Full-stack',
    shortDescription: `
    <p>
      Сервис для поиска и просмотра любимых фильмов и сериалов. FullStack 
      разработка с реализацией всех функций для полноценного 
      использования как пользователя, так и администратора.
</p>
    `,
    description:
      `
      <p>
      Сервис представляет собой портал для просмотра фильмов и сериалов online.
       
      Интерфейс разделен на 3 раздела: меню, основной контент и sidebar для 
      подручной пользователю информации.
      </p>
      <Image src='/images/projects/cinema/cinema-fresh.jpg'/>
      <p>
      При разработке была учтена работа с сервисом в режиме Администрирования.
      В данном разделе содержится статистика сервиса и функционал по добавлению 
      нового контента и редактированию существующего. 
      </p>
      <Image src='/images/projects/cinema/cinema-admin.jpg'/>
      <Image src='/images/projects/cinema/cinema-update-form.jpg'/>
      <p>
      Реализован функционал WYSIWYG редактора.
      </p>
      <Image src='/images/projects/cinema/cinema-wysiwyg.jpg'/>
      
      Разработаны версии для различных устройств с адаптацией интерфейса для 
      всех разрешений.
      <Image src='/images/projects/cinema/cinema-discovery-mobile.jpg'/>
      <p>
        Backend часть выполнена на фреймворке Nest JS c созданием базы данных 
        в PostgreSQL. Разработана таблица с организацией связи между сущностями. 
      </p>
      <Image src='/images/projects/cinema/cinema-table.jpg'/>
     `
    ,
    imageUrl: '/images/projects/cinema/cinema.jpg',
    links: [
      {
        url: 'https://github.com/Vozis/red-cinema',
        name: 'Github',
        icon: 'FaGithubAlt',
      },
      {
        url: 'https://github.com/',
        name: 'Deploy',
        icon: 'FaSafari',
      },
    ],
  }
];
