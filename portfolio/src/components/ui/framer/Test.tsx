import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';

import styles from './Test.module.scss';

const Test: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <motion.div
        transition={{
          layout: { duration: 0.5, type: 'spring' },
        }}
        style={{
          borderRadius: '30px',
        }}
        layout
        className={styles.card}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.h2 layout={'position'}>Framer motion 🚀</motion.h2>
        {isOpen && (
          <motion.div
            className={styles.expand}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              beatae dolore doloremque enim nesciunt perferendis, porro quidem
              repudiandae velit voluptate.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, temporibus.
            </p>
            <button>Hello</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Test;
