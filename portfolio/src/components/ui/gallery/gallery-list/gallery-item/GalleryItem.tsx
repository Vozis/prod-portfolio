import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import MaterialIcon from '@/ui/MaterialIcon';
import Badge from '@/ui/badge/Badge';
import Button from '@/ui/button/Button';
import LinkButton from '@/ui/button/LinkButton';
import { SubHeading } from '@/ui/typography/SubHeading';

import image from '@/assets/images/23.jpg';

const GalleryItem: FC = () => {
  return (
    <div className={'flex flex-col max-w-[300px] gap-6'}>
      <SubHeading title={'Test'} />
      <div className={'flex gap-3'}>
        <Badge title={'React'} classname={'bg-blue-500'} link={'/'} />
        <Badge title={'React'} classname={'bg-red-500'} link={'/'} />
      </div>
      <Link href={'/'} className={'p-10 bg-red-500 rounded-xl h-60 relative'}>
        <Image
          src={image}
          alt={'image'}
          className={'object-cover w-full h-full'}
        />
      </Link>
      <div className={'flex gap-6'}>
        {/*<LinkButton title={'Github'} link={''}  />*/}
        {/*<LinkButton title={'Github'} />*/}
      </div>
    </div>
  );
};

export default GalleryItem;
