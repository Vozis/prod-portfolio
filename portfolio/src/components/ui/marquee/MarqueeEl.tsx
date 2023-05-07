import Image from 'next/image';
import { FC } from 'react';
import Marquee from 'react-fast-marquee';

import { IMarquee } from '@/ui/marquee/marquee.data';

const MarqueeEl: FC<{ items: IMarquee[] }> = ({ items }) => {
  return (
    <Marquee autoFill loop={0} gradient>
      {items.length &&
        items.map(item => (
          <Image
            key={item.url}
            src={item.url}
            alt={item.name}
            width={50}
            height={50}
            style={{
              margin: '0 30px',
            }}
          />
        ))}
    </Marquee>
  );
};

export default MarqueeEl;
