import { FC } from 'react';
import { EffectFade, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';

import GalleryItem from '@/ui/gallery/gallery-list/gallery-item/GalleryItem';

import { useMediaQuery } from '@/hooks/useMediaQueries';

const GalleryList: FC = () => {
  const isMobile = useMediaQuery('(max-width:425px)');

  // const sliderSettings = {
  //   440: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  //   680: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  // };

  return (
    <>
      <Swiper
        direction={'vertical'}
        height={200}
        spaceBetween={30}
        slidesPerView={1}
        effect={'cards'}
        modules={[EffectFade, Keyboard]}
        // navigation={{
        //   prevEl: prevRef.current,
        //   nextEl: nextRef.current,
        // }}
        // onInit={() => setInit(true)}
        // modules={[Navigation]}
      >
        <SwiperSlide>
          <GalleryItem />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem />
        </SwiperSlide>
        {/*{!isMobile && (*/}
        {/*  <div className={'flex gap-6 justify-end mt-6'}>*/}
        {/*    <ArrowButton variant={'prev'} />*/}
        {/*    <ArrowButton variant={'next'} />*/}
        {/*  </div>*/}
        {/*)}*/}
      </Swiper>
    </>
  );
};

export default GalleryList;

// const prevRef = useRef(null);
// const nextRef = useRef(null);
// const [_, setInit] = useState(false);
