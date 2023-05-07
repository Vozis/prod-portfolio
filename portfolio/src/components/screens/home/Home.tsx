import dynamic from 'next/dynamic';
import { FC } from 'react';

import MaterialIcon from '@/ui/MaterialIcon';
import Cover from '@/ui/cover/Cover';
import Gallery from '@/ui/gallery/Gallery';
import Slider from '@/ui/slider/Slider';
import { slidesData } from '@/ui/slider/slides.data';
import Heading from '@/ui/typography/Heading';
import { SubHeading } from '@/ui/typography/SubHeading';

import { IProjectItems } from '@/shared/types/projects.interface';

import { projectsData } from '@/store/projects.data';

import Meta from '@/utils/meta/Meta';

import styles from './Home.module.scss';

const DynamicSlider = dynamic(() => import('@/ui/slider/Slider'), {
  ssr: false,
});

interface IHome {
  // categories: ICategory[];
}

const Home: FC = () => {
  return (
    <Meta title={'Home'} description={'Welcome to my portfolio'}>
      <div className={styles.home}>
        <Cover />
        <DynamicSlider items={projectsData.items.slice(0, 3)} />
      </div>
    </Meta>
  );
};

export default Home;
