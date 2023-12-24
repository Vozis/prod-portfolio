import { FC, PropsWithChildren } from 'react';

import styles from './InfoBlock.module.scss';

const InfoBlock: FC<PropsWithChildren<any>> = ({ children }) => {
  return <div className={styles.info}>{children}</div>;
};

export default InfoBlock;
