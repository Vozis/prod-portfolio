import cn from 'clsx';
import Link from 'next/link';
import { FC, HTMLProps } from 'react';

interface IBadge {
  title: string;
  classname: HTMLProps<HTMLElement>['className'];
  link: string;
}

const Badge: FC<IBadge> = ({ title, classname, link }) => {
  return (
    <Link
      className={cn(
        classname,
        'px-6 py-1 rounded-full text-center inline-block text-lg font-regular',
      )}
      href={link}
    >
      {title}
    </Link>
  );
};

export default Badge;
