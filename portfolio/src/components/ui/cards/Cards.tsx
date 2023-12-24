import { Variants, motion } from 'framer-motion';
import parse from 'html-react-parser';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLockedBody } from 'usehooks-ts';

import LinkButton from '@/ui/button/LinkButton';
import { useCards } from '@/ui/cards/UseCards';

import { onlyText } from '@/utils/text/clearText';

import styles from './Cards.module.scss';

const Cards: FC = () => {
  const { ref, inView } = useInView();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(!isModalOpen);
  };

  useLockedBody(isModalOpen, 'root');

  const { projects, isLoading } = useCards();

  const rectangle: Variants = {
    initial: {
      opacity: 0,
      background: 'black',
    },
    card: {
      opacity: 1,
      background: '#E03774',
    },
    modal: {
      opacity: 1,
      background: '#880B41',
    },
  };

  return (
    <motion.div
      className={styles.cards}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {projects?.items.map(item => (
        <React.Fragment key={item.id}>
          <motion.div
            key={item.id}
            whileHover={{
              scale: 1.02,
              transition: { type: 'just', duration: 0.3 },
            }}
            style={{
              borderRadius: '30px',
            }}
            transition={{
              layout: { duration: 0.7, type: 'spring' },
            }}
            variants={rectangle}
            animate={selectedId === item.id && isModalOpen ? 'modal' : 'card'}
            layoutId={item.id.toString()}
            onClick={() => handleModalOpen(item.id)}
            className={
              selectedId === item.id && isModalOpen ? styles.modal : styles.card
            }
          >
            <motion.div
              style={{
                borderRadius:
                  selectedId === item.id && isModalOpen ? '0px' : '30px',
              }}
              layout={'position'}
              className={styles.imageContainer}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className={'image-like-bg'}
              />
              {/*<MdCancel className={'text-5xl text-black absolute'}/>*/}
              <motion.div className={styles.linkActions}>
                {item.links.map((item, index) => (
                  <LinkButton key={index} link={item} className={''} />
                ))}
              </motion.div>
            </motion.div>
            <motion.div layout={'position'} className={styles.content}>
              <motion.h2 layout={'position'} className={styles.header}>
                {item.title}
              </motion.h2>
              <motion.h3 layout={'position'} className={styles.category}>
                {selectedId === item.id && isModalOpen
                  ? parse(item.category)
                  : onlyText(item.category, 30)}
              </motion.h3>
              <motion.div layout={'position'} className={styles.description}>
                {selectedId === item.id && isModalOpen
                  ? parse(item.description)
                  : onlyText(item.description, 100)}
              </motion.div>
            </motion.div>
          </motion.div>
        </React.Fragment>
      ))}
      <motion.div
        className={styles.cover}
        onClick={() => {
          setSelectedId(null);
          setIsModalOpen(false);
        }}
        animate={{
          opacity: isModalOpen ? 0.3 : 0,
          display: isModalOpen ? 'block' : 'none',
        }}
      />
    </motion.div>
  );
};

export default Cards;

{
  /*<AnimatePresence>*/
}
{
  /*  {selectedId === item.id && (*/
}
{
  /*    <motion.div*/
}
{
  /*      transition={{*/
}
{
  /*        duration: 0.7,*/
}
{
  /*        type: 'spring',*/
}
{
  /*      }}*/
}
{
  /*      layoutId={selectedId.toString()}*/
}
{
  /*      className={styles.modal}*/
}
{
  /*      style={{*/
}
{
  /*        borderRadius: '30px',*/
}
{
  /*      }}*/
}
{
  /*    >*/
}
{
  /*      <motion.h2>{item.title}</motion.h2>*/
}
{
  /*      <motion.p>{item.description}</motion.p>*/
}
{
  /*      <motion.button onClick={() => setSelectedId(null)}>*/
}
{
  /*        Закрыть*/
}
{
  /*      </motion.button>*/
}
{
  /*    </motion.div>*/
}
{
  /*  )}*/
}
{
  /*</AnimatePresence>*/
}
