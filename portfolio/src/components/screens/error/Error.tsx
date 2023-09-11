import Image from 'next/image';
import { FC } from 'react';

import errorImage from '@/assets/images/error.png';

import styles from './Error.module.scss';

const Error: FC = () => {
  return (
    <div className={styles.error}>
      <div className={'text-center'}>
        <Image
          src={errorImage}
          alt={'error'}
          className={
            'w-40 p-3 bg-cyan-500 bg-opacity-80 rounded-full shadow-2xl mx-auto'
          }
        />
        <div className={'mt-10 flex flex-col gap-3'}>
          <p>Упс, страница еще не доступна...</p>
          <p>Кликните на логотип, чтобы вернуться на главную страницу </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
