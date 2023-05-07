import Head from 'next/head';
import { useRouter } from 'next/router';
import process from 'process';
import { FC, PropsWithChildren } from 'react';

import { siteName, titleMerge } from '@/config/seo.comfig';

import { ISeo } from '@/utils/meta/meta.interface';
import { onlyText } from '@/utils/text/clearText';

import logoImage from '../../../public/logo.svg';

const Meta: FC<PropsWithChildren<ISeo>> = ({
  image,
  title,
  description,
  children,
}) => {
  const { asPath } = useRouter();

  const currentUrl = `${process.env.APP_URL}${asPath}`;

  return (
    <>
      <Head>
        <title itemProp={'headline'}>{titleMerge(title)}</title>
        {description ? (
          <>
            <meta
              itemProp={'description'}
              name={'description'}
              content={onlyText(description, 152)}
            />
            <link rel={'canonical'} href={currentUrl} />
            <meta property={'og:locale'} content={'en'} />
            <meta property={'og:title'} content={titleMerge(title)} />
            <meta property={'og:url'} content={currentUrl} />
            <meta property={'og:image'} content={image || logoImage} />
            <meta property={'og:site_name'} content={siteName} />
          </>
        ) : (
          <meta name={'robots'} content={'noindex, nofollow'} />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
