import Image from 'next/image';
import { FC } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import InfoBlock from '@/ui/Info-block/InfoBlock';
import InfoItem from '@/ui/Info-block/info-item/InfoItem';
import LinkButton from '@/ui/button/LinkButton';
import SummaryButton from '@/ui/button/SummaryButton';
import Description from '@/ui/typography/Description';
import Heading from '@/ui/typography/Heading';
import { SubHeading } from '@/ui/typography/SubHeading';

import Meta from '@/utils/meta/Meta';

import styles from './About.module.scss';

const About: FC = () => {
  const isMobile = useMediaQuery('(min-width:425px)');

  return (
    <Meta title={'About'} description={'About me'}>
      <div className={styles.wrapper}>
        <div className={'grid-auto-fit-lg grid'}>
          <div className={'flex flex-col gap-6 md:mr-48'}>
            <Heading title={'About me'} />
            <Description>Здесь представлена краткая информация</Description>
          </div>

          <Image
            src={'/23.jpg'}
            alt={''}
            width={500}
            height={400}
            className={'block shadow-xl max-sm:hidden'}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <SubHeading title={'Образование'} className={'mx-auto'} />
            <InfoBlock>
              <InfoItem
                period={'2014-2019'}
                name={'СГУПС'}
                category={'Мостостроение'}
              />
              <InfoItem
                period={'2021-2022'}
                name={'GeekBrains'}
                category={'Full-Stack JS Разработка'}
              />
            </InfoBlock>
          </div>
          <div className={styles.item}>
            <SubHeading title={'Опыт работы'} className={'mx-auto'} />
            <InfoBlock>
              <InfoItem
                period={'2021-2022'}
                name={'КИБЕРГЕО'}
                category={'Дизайн | верстка'}
              />
              <InfoItem
                period={'2020-2022'}
                name={'Фриланс'}
                category={'Дизайн'}
              />
              <InfoItem
                period={'2022-2023'}
                name={'GeekBrains'}
                category={'Full-stack разработка'}
              />
            </InfoBlock>
          </div>
        </div>
        <SummaryButton />
      </div>
    </Meta>
  );
};

export default About;
