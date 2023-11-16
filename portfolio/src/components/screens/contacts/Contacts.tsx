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
          <div  className={'flex justify-center items-center flex-col'}>
            {/*<Heading title={'Контакты'} className={'mb-6'} />*/}
            {/*<Description>*/}
            {/*  Minim culpa excepteur minim nisi enim eu laborum mollit. Irure*/}
            {/*  nisi qui consectetur ut ex ut magna ex consectetur aliqua.*/}
            {/*  Consequat fugiat veniam amet nostrud occaecat ipsum consequat ut*/}
            {/*  eiusmod ad. Do tempor ea minim adipisicing. Officia tempor*/}
            {/*  pariatur pariatur est fugiat non deserunt. Tempor culpa elit*/}
            {/*  proident nulla. Quis Lorem magna excepteur nostrud in minim veniam*/}
            {/*  laboris labore proident consectetur elit aute esse mollit. Nostrud*/}
            {/*  labore culpa irure fugiat officia ea non sunt reprehenderit labore*/}
            {/*  labore tempor cupidatat ipsum.*/}
            {/*</Description>*/}
            <Image src={'/images/logo.png'} alt={'Изображение'} width={200} height={100}/>
            <h4 className={'text-3xl font-semibold drop-shadow-2xl rounded-2xl text-center'}>На связи 24/7. До новых встреч!</h4>
          </div>
          {/*<Image src={'/23.jpg'} alt={''} width={500} height={500} />*/}
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
            <Link href={'https://github.com/Vozis'}>Github</Link>
          </div>
          <div className={styles.item} style={{
            fontSize: '1.5rem',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}>
            <Link href={'https://wa.me/79994643719'}>
              <MaterialIcon name={'FaWhatsapp'} />
            </Link>
          </div>
          <div className={styles.item} style={{
            fontSize: '1.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}>
            <Link href={'https://tlgg.ru/IlyaaSizov'}>
              <MaterialIcon name={'FaTelegram'} />
            </Link>
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default Contacts;
