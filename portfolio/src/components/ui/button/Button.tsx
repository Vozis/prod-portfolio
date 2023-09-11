import cn from 'clsx';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

import { IButton } from '@/ui/button/button.interface';

const Button: FC<IButton> = ({ children, size, className, ...rest }) => {
  return (
    <Link
      href={'/'}
      className={cn(
        'flex items-center justify-center bg-black text-white px-6 py-2 rounded-full',
        className,
        {
          'text-sm': size === 'small',
          'text-md': size === 'medium',
          'text-lg': size === 'large',
        },
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
