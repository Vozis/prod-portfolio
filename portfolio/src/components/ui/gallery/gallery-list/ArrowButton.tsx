import React, { FC, forwardRef, useState } from 'react';
import { useSwiper, useSwiperSlide } from 'swiper/react';

import MaterialIcon from '@/ui/MaterialIcon';
import cn from 'clsx';

interface IArrowButton extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'prev' | 'next';
  clickHandler?: () => void;
}

// const ArrowButton = forwardRef<IArrowButton>(({}, ref) => {});

const ArrowButton: FC<IArrowButton> = ({
  className,
  variant,
  clickHandler,
}) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide()
  const isPrev = variant === 'prev';
  const [isTrue, setIsTrue] = useState(false);

  const handeClick = () => {
    if (isPrev) swiper.slidePrev();
    else swiper.slideNext();
  };

  return (
    <button
      onClick={handeClick}
      className={cn('flex justify-center items-center text-red-500 text-3xl', {['text-gray-500']: isTrue})}
    >
      <MaterialIcon name={isPrev ? 'FaArrowUp' : 'FaArrowDown'} />
    </button>
  );
};

export default ArrowButton;
