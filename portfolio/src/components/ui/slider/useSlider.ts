import { useRef, useState } from 'react';

export const useSlider = (length: number) => {
  const nodeRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  const isExistNext = currentIdx + 1 < length;
  const isExistPrev = currentIdx ? currentIdx - 1 < length : false;

  const handleArrowClick = (direction: 'next' | 'prev') => {
    let newIndex = direction === 'next' ? currentIdx + 1 : currentIdx - 1;

    if (newIndex === length) newIndex = 0;
    if (newIndex < 0) newIndex = length - 1;

    setSlideIn(false);

    setTimeout(() => {
      setCurrentIdx(newIndex);
      setSlideIn(true);
    }, 300);
  };

  return {
    nodeRef,
    slideIn,
    index: currentIdx,
    isNext: isExistNext,
    isPrev: isExistPrev,
    handleArrowClick,
  };
};
