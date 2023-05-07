import { FC, PropsWithChildren } from 'react';

import InfoItem from '@/ui/Info-block/info-item/InfoItem';
import { SubHeading } from '@/ui/typography/SubHeading';

import styles from './InfoBlock.module.scss';

const InfoBlock: FC<PropsWithChildren<any>> = ({ children }) => {
  return <div className={styles.info}>{children}</div>;
};

export default InfoBlock;
