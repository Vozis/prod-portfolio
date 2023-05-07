import cn from 'clsx';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

import MaterialIcon from '@/ui/MaterialIcon';
import { IButton, ILinkButton } from '@/ui/button/button.interface';

import { TypeMaterialIconName } from '@/shared/types/icon.types';

import { useMediaQuery } from '@/hooks/useMediaQueries';

const LinkButton: FC<ILinkButton> = ({
  link,
  size,
  className,
  children,
  ...rest
}) => {
  const isMobile = useMediaQuery('(max-width:425px)');

  return (
    <Link
      href={link.url}
      className={cn(
        className,
        'bg-none border-transparent inline-flex justify-center items-center gap-2 px-2 my-2 text-black md:border-b max-lg:text-2xl max-sm:text-lg max-md:text-xl transition-all duration-200',
        'hover:border-black hover:border-b',
      )}
    >
      <MaterialIcon name={link.icon || 'FaLink'} />
      {!isMobile && <span>{link.name}</span>}
      {children}
    </Link>
  );
};

export default LinkButton;
