import { FC } from 'react';

import Collection from '@/ui/collection/Collection';
import Description from '@/ui/typography/Description';
import Heading from '@/ui/typography/Heading';

import Meta from '@/utils/meta/Meta';

import styles from './Design.module.scss';

const Design: FC = () => {
  return (
    <Meta title={'Home'} description={'Design projects'}>
      <div className={styles.wrapper}>
        <Heading title={'Design'} />
        <Description>
          Первым делом я, как Frontend разработчик, решил приобщиться к делу
          дизайнера, понять как начинаются первые шаги в разработке будущего
          проекта. Здесь я приобрел навыки работы с Figma, познал верстку и CSS.
        </Description>
        <Collection />
      </div>
    </Meta>
  );
};

export default Design;
