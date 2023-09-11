import Image from 'next/image';
import React, { FC, forwardRef } from 'react';
import { slide } from 'react-burger-menu';

import LinkButton from '@/ui/button/LinkButton';
import { ISlide } from '@/ui/slider/slider.interface';
import Description from '@/ui/typography/Description';
import { SubHeading } from '@/ui/typography/SubHeading';

import { IProjectItem } from '@/shared/types/projects.interface';

import styles from './Slider.module.scss';
import parse from 'html-react-parser';

const SliderItem: FC<{ slide: IProjectItem }> = ({ slide }) => {
  return (
    <div className={styles.slideContent}>
      <div>
        <Image
          src={slide.imageUrl}
          alt={slide.title}
          width={700}
          height={300}
          className={'mb-10 max-md:mb-6 shadow-xl rounded-xl'}
        />
        <div className={'flex flex-col gap-3 max-w-[300px] md:ml-10'}>
          <SubHeading title={slide.title} />
          <Description>{parse(slide.shortDescription)}</Description>
        </div>
      </div>
      <div className={'flex gap-10 md:ml-10 max-md: justify-start'}>
        {slide?.links &&
          slide.links.map((link, index) => (
            <LinkButton key={index} title={link.name} link={link} />
          ))}
      </div>
    </div>
  );
};

export default SliderItem;

// const SliderItem: FC<{ slide: ISlide } & React.ReactNode> = ({ slide }) => {
//   return (
//     <div className={styles.slide} ref={ref}>
//       <div>
//         <Image src={slide.image} alt={slide.title} width={500} height={300} />
//         <div>
//           <p>{slide.title}</p>
//           <p>{slide.description}</p>
//         </div>
//       </div>
//       <div>
//         {slide?.links &&
//           slide.links.map((link, index) => (
//             <LinkButton key={index} title={link.name} url={link.url} />
//           ))}
//       </div>
//     </div>
//   );
// };
//
