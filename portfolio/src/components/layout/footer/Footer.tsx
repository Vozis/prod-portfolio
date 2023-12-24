import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle';
import { FaLongArrowAltRight } from '@react-icons/all-files/fa/FaLongArrowAltRight';
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import React, { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={'py-3 grid-in-footer'}>
      <div className={styles.content}>
        <p
          className={
            'flex items-center gap-3 text-lg transition-all ease-in-out duration-150 hover:translate-x-4'
          }
        >
          До встречи
          <FaLongArrowAltRight className={'mt-0.5'} />
          {/*<MaterialIcon name={'FaLongArrowAltRight'} className={'mt-0.5'} />*/}
        </p>

        <div className={styles.socials}>
          <a href={'mailto:sizov.ilya1996@gmail.com'} target={'_blank'}>
            <FaGoogle />
            {/*<MaterialIcon name={'FaGoogle'} />*/}
          </a>
          <a href={'https://wa.me/79994643719'} target={'_blank'}>
            <FaWhatsapp />
            {/*<MaterialIcon name={'FaWhatsapp'} />*/}
          </a>
          <a href={'https://tlgg.ru/IlyaaSizov'} target={'_blank'}>
            <FaTelegram />
            {/*<MaterialIcon name={'FaTelegram'} />*/}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
