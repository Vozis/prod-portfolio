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
        'text-4xl max-lg:text-2xl max-md:text-xl font-medium',
        className,
      )}
    >
      {title}
    </div>
  );
};
