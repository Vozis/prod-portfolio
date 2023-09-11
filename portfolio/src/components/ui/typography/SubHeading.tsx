import cn from 'clsx';
import { FC } from 'react';

interface SubHeading {
  title: string;
  className?: string;
}

export const SubHeading: FC<SubHeading> = ({ className, title }) => {
  return (
    <div
      className={cn(
        'text-xl xl:text-4xl lg:text-2xl font-medium',
        className,
      )}
    >
      {title}
    </div>
  );
};
