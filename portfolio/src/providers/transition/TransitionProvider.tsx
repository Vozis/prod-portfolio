import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren } from 'react';

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};

const TransitionProvider: FC<
  PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
> = ({ children, className }) => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence initial={false} mode={'wait'}>
      <motion.main
        className={className}
        key={asPath}
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default TransitionProvider;
