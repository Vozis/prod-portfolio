import cn from 'clsx';
import { FC } from 'react';

interface IHeading {
  title: string;
  className?: string;
}

const Heading: FC<IHeading> = ({ title, className }) => {
  return (
    <h1
      className={cn(
        'text-5xl max-lg:text-3xl max-md:text-2xl font-semibold',
        className,
      )}
    >
      {title}
    </h1>
  );
};

export default Heading;
