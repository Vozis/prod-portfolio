import { FaFigma } from '@react-icons/all-files/fa/FaFigma';
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
import { FaLink } from '@react-icons/all-files/fa/FaLink';
import { FaSafari } from '@react-icons/all-files/fa/FaSafari';
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram';
import cn from 'clsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { FC } from 'react';

import { ILinkButton } from '@/ui/button/button.interface';

const Icon = dynamic(() => import('@/ui/icon'));

const LinkButton: FC<ILinkButton> = ({
  link,
  size,
  className,
  children,
  ...rest
}) => {
  // const isMobile = useMediaQuery('(max-width:425px)');

  const getIcon = (icon?: string) => {
    switch (icon) {
      case 'FaTelegram':
        return <FaTelegram />;
      case 'FaGithubAlt':
        return <FaGithubAlt />;
      case 'FaFigma':
        return <FaFigma />;
      case 'FaSafari':
        return <FaSafari />;
      default:
        return <FaLink />;
    }
  };

  return (
    <Link
      href={link.url}
      target={'_blank'}
      className={cn(
        className,
        'bg-none border-transparent inline-flex justify-center items-center gap-2 px-2 my-2 md:border-b max-lg:text-xl max-sm:text-lg max-md:text-xl transition-all duration-200',
        'hover:border-black hover:border-b',
      )}
    >
      {getIcon(link.icon)}
      {/*{link.icon ? <Icon iconFamily={'fa'} icon={link.icon} /> : <FaLink />}*/}
      {/*<MaterialIcon name={link.icon || 'FaLink'} />*/}
      {/*{!isMobile && }*/}
      <span>{link.name}</span>
      {children}
    </Link>
  );
};

export default LinkButton;
