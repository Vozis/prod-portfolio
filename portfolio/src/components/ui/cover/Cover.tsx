import Image from 'next/image';
import { FC } from 'react';

import MaterialIcon from '@/ui/MaterialIcon';
import Button from '@/ui/button/Button';
import Description from '@/ui/typography/Description';
import Heading from '@/ui/typography/Heading';
import { SubHeading } from '@/ui/typography/SubHeading';

import me from '@/assets/images/me.png';

import { useMediaQuery } from '@/hooks/useMediaQueries';

const Cover: FC = () => {
  const isMobile = useMediaQuery('(max-width:425px)');
  return (
    <div
      className={'flex flex-col justify-center text-left min-md:mr-20 h-full xl:gap-10 lg:gap-6 gap-4 px-layout max-md:px-5 max-sm:px-4'}
    >
      <div className={'flex flex-col gap-2 xl:gap-5'}>
        <Heading title={`Привет, меня зовут Илья!`} />
        <SubHeading title={'Full-stack JavaScript developer'} />
      </div>
      <hr/>
      <div className={'about flex flex-col gap-4'}>
        {/*<MaterialIcon name={'FaCoffee'} className={'text-3xl'} />*/}
        <SubHeading title={'В двух словах,'} />
        <Description>
          Занимаюсь разработкой web-приложений от макета до готового продукта. За плечами имею знания и опыт в
          <b> Backend</b> и <b> Frontend</b> разработке на Javascript с уверенным использованием современных фреймворков. Кроме того,
          занимаюсь разработкой <b> Telegram ботов</b>!
        </Description>
      </div>
    </div>
  );
};

export default Cover;

// <div
//   className={
//     'flex flex-col gap-10 cover-bg p-20 max-md:p-10 max-sm:p-5 rounded-3xl'
//   }
// >
//   <Image
//     src={me}
//     alt={'photo'}
//     className={'mx-auto bg-white rounded-full p-4 w-40'}
//   />
//   <div className={'flex flex-col items-center gap-10 max-md:gap-3 w-full'}>
//     <p className={'text-5xl max-md:text-2xl font-semibold'}>
//       Привет, меня зовут Илья Сизов
//     </p>
//     <p className={'text-3xl max-md:text-lg font-bold w-full'}>
//       Я <span className={'text-red-700'}>Full-Stack разработчик </span>
//       на JavaScript(TypeScript). Использую современный стек технологий и
//       постоянно развиваюсь. Ниже представлено портфолио работ для понимания
//       знаний.
//     </p>
//     <div>
//       <Button size={'small'}>Контакты</Button>
//     </div>
//   </div>
// </div>
