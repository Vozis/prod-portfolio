import dynamic from 'next/dynamic';
import { FC } from 'react';

import Cover from '@/ui/cover/Cover';

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
        <DynamicSlider items={projectsData.slice(0, 3)} />
      </div>
    </Meta>
  );
};

export default Home;
