import { IProjectItem } from '@/shared/types/projects.interface';

export const projectsData: IProjectItem[] = [
  {
    id: 1,
    title: 'В Спорте',
    category:
      'Full-stack | SCRUM-разработка | React, NestJS, PrismaORM, NxDev, SocketIO, Redux Toolkit, Axios, Nodemailer, React-hook-form, TypeScript',
    shortDescription: `
    <p>
    Сервис, целью которого является помощь в поиске единомышленников для занятия спортом любых видов, улучшение 
    социальной активности, поиска друзей и знакомых.
</p>
    `,
    description: `
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
     `,
    imageUrl: '/images/projects/sport/sport-main.jpg',
    links: [
      {
        url: 'https://github.com/Vozis/gb-final-project',
        name: 'Github',
        icon: 'FaGithubAlt',
      },
      {
        url: 'http://final-project.ilyasizov.webtm.ru',
        name: 'Deploy',
        icon: 'FaSafari',
      },
    ],
  },
  {
    id: 2,
    title: 'Online-cinema',
    category: 'Full-stack',
    shortDescription: `
    <p>
      Сервис для поиска и просмотра любимых фильмов и сериалов. FullStack 
      разработка с реализацией всех функций для полноценного 
      использования как пользователя, так и администратора.
</p>
    `,
    description: `
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
      <p>
      Разработаны версии для различных устройств с адаптацией интерфейса для 
      всех разрешений.
      </p>
      <Image src='/images/projects/cinema/cinema-discovery-mobile.jpg'/>
      <p>
        Backend часть выполнена на фреймворке Nest JS c созданием базы данных 
        в PostgreSQL. Разработана таблица с организацией связи между сущностями. 
      </p>
      <Image src='/images/projects/cinema/cinema-table.jpg'/>
     `,
    imageUrl: '/images/projects/cinema/cinema.jpg',
    links: [
      {
        url: 'https://github.com/Vozis/portfolio-cinema',
        name: 'Github',
        icon: 'FaGithubAlt',
      },
      {
        url: 'http://cinema.ilyasizov.webtm.ru',
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
    description: `
      <p>
      Реализация моего портфолио для всемирного доступа. Здесь вы найдете информацию о моих проектах, опыте работе и обо
      мне.
      </p>
      <Image src='/images/projects/portfolio/portfolio-main.jpg'/>
      <Image src='/images/projects/portfolio/portfolio-design.jpg'/>
      <p>
      Реализованы несколько страниц, разделенных по тематике.
      </p>
      <Image src='/images/projects/portfolio/portfolio-projects.jpg'/>
      <Image src='/images/projects/portfolio/portfolio-about.jpg'/>
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
    title: 'Telegram Bot помощник',
    category: 'Full-stack | NextJS, Prisma, Postgres, React-hook-form',
    shortDescription: `
    <p>
      Бот - помощник для работы в группах учеников. Позволяет работать с ним как ученикам, так и преподавателям и 
      администраторам групп. Корневой функционал заключен в создании автоматизации по отправке уведомлений о предстоящих
      уроках в соответствии с действующим расписанием.
    </p>
    `,
    description: `
      <p>
      
      Бот - помощник для работы в группах учеников. Позволяет работать с ним как ученикам, так и преподавателям и 
      администраторам групп. Корневой функционал заключен в создании автоматизации по отправке уведомлений о предстоящих
      уроках в соответствии с действующим расписанием.
      </p>
      <Image src='/images/projects/telegram-bot/bot-start-page.jpg'/>
      <Image src='/images/projects/telegram-bot/bot-hello.jpg'/>
      <p>
      При создании бота по возможности использовались все доступные функции Telegram API.  
      Созданы несколько поэтапных сцен для создания, изменения и удаления действующих уроков, изменения расписания учеников. 
      </p>
      <Image src='/images/projects/telegram-bot/bot-create-cron.jpg'/>
      <Image src='/images/projects/telegram-bot/bot-create-cron2.jpg'/>
      <Image src='/images/projects/telegram-bot/bot-create-cron3.jpg'/>
      <p>
      Предоставление расписания также отличается для участников с разным статусом: так администратор в праве просматривать расписание 
      любых групп, тогда как участник ограничен своей группой.
      </p>
      <Image src='/images/projects/telegram-bot/bot-show-schedule.jpg'/>
      <p>
      С ростом функционала появилась необходимость добавления ежедневных задачек для студентов, как в виде текстовых закрепленных
      сообщений, так и в виде опросов с сохранением результатов тестирования. Здесь понадобился простой и понятный преподавателю 
      способ получения информации посредством Google таблиц.  
      </p>
      <Image src='/images/projects/telegram-bot/bot-google-table.jpg'/>
      <Image src='/images/projects/telegram-bot/bot-table.jpg'/>
      `,
    imageUrl: '/images/projects/telegram-bot/bot-start-page.jpg',
    links: [
      {
        url: 'https://github.com/Vozis/telegram-bot',
        name: 'Github',
        icon: 'FaGithubAlt',
      },
      {
        url: 'https://t.me/YamaSchoolBot',
        name: 'Telegram',
        icon: 'FaTelegram',
      },
    ],
  },
  {
    id: 5,
    title: 'Wedding',
    category:
      'Frontend | NestJS, NextJS, React-query, Redux Toolkit, Axios, React-select, Tailwind, SCSS, TypeScript',
    shortDescription: `
    <p>
      Сайт-приглашение для будущего торжества с формой отправки данных гостями.
    </p>
    `,
    description: `<p>
        Сайт-приглашение для будущего торжества. Реализован полностью при помощи функционала NextJS, включая серверную часть
      приложения. Frontend-часть реализована в виде одностраничного лендинга с закрепленным меню, для перемещения между 
      разделами. Backend-часть реализована с использованием Postgres для сбора данных гостей (для подтверждения участия и 
      информации о вкусовых предпочтениях, форма реализована с применением библиотеки React-hook-form. Сделана
      легкая анимация с применением библиотеки Framer-motion. Кроме того, сделан кастомный плеер для тематического музыкального 
      сопровождения присутствия на сайте.
      </p>
      <Image src='/images/projects/wedding/wedding-main.jpg'/>
      <Image src='/images/projects/wedding/wedding-invite.jpg'/>
      <Image src='/images/projects/wedding/wedding-location.jpg'/>
      <Image src='/images/projects/wedding/wedding-form.jpg'/>
      <p>
      Разработаны версии для различных устройств с адаптацией интерфейса для 
      всех разрешений.
      </p>
      <Image src='/images/projects/wedding/wedding-main-mobile.jpg'/>
      <Image src='/images/projects/wedding/wedding-schedule-mobile.jpg'/>
      <Image src='/images/projects/wedding/wedding-menu-mobile.jpg'/>
      `,
    imageUrl: '/images/projects/wedding/wedding-main.jpg',
    links: [
      {
        url: 'https://github.com/Vozis/project-wedding',
        name: 'Github',
        icon: 'FaGithubAlt',
      },
      {
        url: 'https://project-wedding-gules.vercel.app/',
        name: 'Deploy',
        icon: 'FaSafari',
      },
    ],
  },
  {
    id: 6,
    title: 'Amazon',
    category:
      'Full-stack | NestJS, NextJS, React-query, Redux Toolkit, Axios, React-select, Tailwind, SCSS, TypeScript',
    shortDescription: `
    <p>
      Реализация копии интернет-магазина Amazon. FullStack-разработка.
    </p>
    `,
    description: `<p>
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
];
