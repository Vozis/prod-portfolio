import React, { FC, forwardRef } from 'react';
import { useSwiper } from 'swiper/react';

import MaterialIcon from '@/ui/MaterialIcon';

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
  const isPrev = variant === 'prev';

  const handeClick = () => {
    if (isPrev) swiper.slidePrev();
    else swiper.slideNext();
  };

  return (
    <button
      onClick={handeClick}
      className={'flex justify-center items-center text-red-700 text-3xl'}
    >
      <MaterialIcon name={isPrev ? 'FaArrowUp' : 'FaArrowDown'} />
    </button>
  );
};

export default ArrowButton;
