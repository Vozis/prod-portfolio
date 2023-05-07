import cn from 'clsx';
import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
  return (
    <Skeleton
      {...rest}
      baseColor={'#8E8E8E'}
      highlightColor={'#B5B5B5'}
      className={cn(className)}
    />
  );
};

export default SkeletonLoader;
