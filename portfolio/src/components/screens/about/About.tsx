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
            <Heading title={'Больше, чем в двух словах'} />
            <Description>Мне 26 лет. Программирование запало в душу более 10 лет назад, полноценно занимаюсь разработкой около 3 лет. Больше всего люблю нетривиальные задачи, за решением которых
            Безумно интересно работать в небольшой команде с грандиозными планами :)
            </Description>
          </div>

          <Image
            src={'/images/me.jpg'}
            alt={'Моя фотография'}
            width={350}
            height={100}
            priority={true}
            style={{
              objectFit: 'cover',
            }}
            className={'block shadow-xl max-sm:hidden rounded-3xl w-full'}
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
                period={'2021-2022'}
                name={'GeekBrains'}
                category={'Full-stack разработка'}
              />
              <InfoItem
                period={'2023-2023'}
                name={'В спорте | Стартап'}
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
