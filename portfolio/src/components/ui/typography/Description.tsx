import cn from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

interface IDescription extends React.HTMLAttributes<HTMLParagraphElement> {}

const Description: FC<PropsWithChildren<IDescription>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(className, 'text-base max-md:text-sm max-w-2xl')}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Description;
