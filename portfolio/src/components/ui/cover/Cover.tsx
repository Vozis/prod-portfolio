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
      className={'flex flex-col justify-between text-left min-md:mr-20 h-full'}
    >
      <div className={'flex flex-col gap-10'}>
        <Heading title={'Привет, меня зовут Илья!'} />
        <SubHeading title={'Full-stack JavaScript developer'} />
      </div>
      <div className={'about flex flex-col gap-3'}>
        <MaterialIcon name={'FaCoffee'} className={'text-3xl'} />
        <SubHeading title={'About me'} />
        <Description>
          Pariatur laborum incididunt tempor elit do laborum cupidatat cillum
          minim sit labore in in velit adipisicing. Ullamco incididunt quis
          laborum elit sunt ipsum sit dolor Lorem esse. Voluptate reprehenderit
          nostrud dolor ut elit aliquip aliquip Lorem duis voluptate. Aute
          officia in aliqua fugiat cillum aute consectetur sunt. Occaecat sit
          anim nisi quis esse minim officia. Magna occaecat pariatur anim irure
          aliqua commodo excepteur. Ipsum nostrud eu pariatur dolore id in duis
          ipsum anim eu fugiat eiusmod. Duis nostrud amet culpa.
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
