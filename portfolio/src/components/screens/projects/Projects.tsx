import { FC } from 'react';

import Cards from '@/ui/cards/Cards';
import Collection from '@/ui/collection/Collection';
import Framer from '@/ui/framer/Framer';
import Test from '@/ui/framer/Test';
import { LayoutCards } from '@/ui/framer/Test2';
import MarqueeEl from '@/ui/marquee/MarqueeEl';
import { marqueeData } from '@/ui/marquee/marquee.data';
import Description from '@/ui/typography/Description';
import Heading from '@/ui/typography/Heading';

import { IProjectItems } from '@/shared/types/projects.interface';

import Meta from '@/utils/meta/Meta';

import styles from './Projects.module.scss';

const Projects: FC = () => {
  return (
    <Meta title={'Home'} description={'Design projects'}>
      <div className={styles.projects}>
        <Heading title={'Projects'} />
        <Description>
          Имею опыт работы как с Frontend, так и c Backend разработкой. Стек
          используемых технологий представлен современными средствами
          разработки.
        </Description>
        <MarqueeEl items={marqueeData} />
        <Cards />
        {/*<Collection />*/}
        {/*<Framer />*/}
        {/*<Test />*/}
        {/*<LayoutCards />*/}
      </div>
    </Meta>
  );
};

export default Projects;
