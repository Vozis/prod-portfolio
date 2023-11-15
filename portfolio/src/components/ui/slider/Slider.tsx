import React, { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Navigation, Virtual } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import { useMediaQuery } from 'usehooks-ts';

import ArrowButton from '@/ui/gallery/gallery-list/ArrowButton';
import SliderItem from '@/ui/slider/SliderItem';
import { ISlider } from '@/ui/slider/slider.interface';
import { useSlider } from '@/ui/slider/useSlider';

import { IProjectItem, IProjectItems } from '@/shared/types/projects.interface';

import styles from './Slider.module.scss';
import cn from 'clsx';

const Slider: FC<{ items: IProjectItem[] }> = ({ items }) => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const ref = useRef<SwiperRef>(null);

  const [windowsHeight, setWindowsHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowHeight = () => {
      setWindowsHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowHeight);

    return () => {
      window.removeEventListener('resize', handleWindowHeight);
    };
  }, []);

  return (
    <>
      <Swiper
        ref={ref}
        className={cn(styles.slider)}
        centeredSlides
        // centeredSlidesBounds
        initialSlide={1}
        spaceBetween={isMobile ? 20 : 50}
        slidesPerView={isMobile ? 1.3 : 1}
        direction={isMobile ? 'horizontal' : 'vertical'}
        modules={[Virtual]}
        virtual
        style={{
          height: !isMobile ? `calc(${windowsHeight}px - 250px)` : 'auto',
        }}
      >
        {items.map(item => (
          <SwiperSlide
            key={item.id}
            // className={cn({['mr-layout max-md:mr-5 max-sm:mr-4']: item.id === items.length})}
            virtualIndex={item.id}
          >
            <SliderItem slide={item} />
          </SwiperSlide>
        ))}
        {!isMobile && (
          <div className={styles.navigation}>
            <ArrowButton variant={'prev'} />
            <ArrowButton variant={'next'} />
          </div>
        )}
      </Swiper>
    </>
  );
};

export default Slider;

// <CSSTransition
//   in={slideIn}
//   classNames={'slide-animation'}
//   timeout={300}
//   unmountOnExit
//   nodeRef={nodeRef}
// >
//   <SliderItem slide={items[index]} ref={nodeRef} />
// </CSSTransition>
// <div className={'absolute bottom-1/3 right-0 flex flex-col gap-3'}>
//   <ArrowButton
//     variant={'left'}
//     clickHandler={() => handleArrowClick('prev')}
//   />
//   <ArrowButton
//     variant={'right'}
//     clickHandler={() => handleArrowClick('next')}
//   />
// </div>
// {slides.length ? (
//   slides.map(slide => <SliderItem slide={slide} />)
// ) : (
//   <div> Ничего не найдено</div>
// )}

// const { handleArrowClick, isNext, isPrev, index, slideIn, nodeRef } =
//   useSlider(items.length);
