import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import MaterialIcon from '@/ui/MaterialIcon';
import Description from '@/ui/typography/Description';
import Heading from '@/ui/typography/Heading';

import Meta from '@/utils/meta/Meta';

import styles from './Contacts.module.scss';

const Contacts: FC = () => {
  return (
    <Meta title={'Contacts'} description={'Contacts page'}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div>
            <Heading title={'Contacts'} className={'mb-6'} />
            <Description>
              Minim culpa excepteur minim nisi enim eu laborum mollit. Irure
              nisi qui consectetur ut ex ut magna ex consectetur aliqua.
              Consequat fugiat veniam amet nostrud occaecat ipsum consequat ut
              eiusmod ad. Do tempor ea minim adipisicing. Officia tempor
              pariatur pariatur est fugiat non deserunt. Tempor culpa elit
              proident nulla. Quis Lorem magna excepteur nostrud in minim veniam
              laboris labore proident consectetur elit aute esse mollit. Nostrud
              labore culpa irure fugiat officia ea non sunt reprehenderit labore
              labore tempor cupidatat ipsum.
            </Description>
          </div>
          <Image src={'/23.jpg'} alt={''} width={500} height={500} />
        </div>
        <div className={styles.contacts}>
          <div className={styles.item}>
            <MaterialIcon name={'FaMailBulk'} />
            <a href={'mailto:sizov.ilya1996@gmail.com'}>
              sizov.ilya1996@gmail.com
            </a>
          </div>
          <div className={styles.item}>
            <MaterialIcon name={'FaPhone'} />
            <a href={'tel:+79994643719'}>+7 (999) 464-37-19</a>
          </div>
          <div className={styles.item}>
            <MaterialIcon name={'FaGithub'} />
            <Link href={'https://github.com/'}>Github</Link>
          </div>
          <div className={styles.item}>
            <MaterialIcon name={'FaHeading'} />
            <Link href={'https://hh.com/'}>Github</Link>
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default Contacts;
