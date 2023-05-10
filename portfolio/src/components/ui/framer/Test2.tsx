import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

const cards = [1, 2, 3, 4];
export const LayoutCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  console.log(selectedId);
  return (
    <div className="layout-cards">
      {cards.map((card, i) => (
        <motion.div
          onClick={() => {
            {
              if (selectedId) setSelectedId(null);
              else setSelectedId(card);
            }
          }}
          className={selectedId === card ? 'opened-card' : 'card'}
          key={i}
          layout
        >
          <motion.h2 layout={'position'}>Framer motion 🚀</motion.h2>
          <AnimatePresence>
            {selectedId && (
              <motion.div layout className={'overflow-y-auto p-layout'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                error fugit nisi quod sint, ullam ut. Aliquam animi consectetur
                cum debitis distinctio eaque enim eos harum illo ipsum
                laudantium minima nostrum omnis quo repellendus, vitae
                voluptate? Alias amet culpa cumque distinctio dolorem dolores id
                non pariatur totam ullam? Delectus explicabo facilis inventore
                modi optio? Animi atque dolores fugit perspiciatis repellat
                temporibus velit? Aperiam autem fugit illum iusto minima nam
                nostrum omnis perspiciatis voluptate voluptatem! A ab ad aperiam
                aut culpa debitis ipsa labore minima mollitia nihil, officia
                omnis perferendis repellat. Ad, aliquam, amet architecto atque
                autem cumque cupiditate distinctio dolore doloremque dolores
                earum eum fuga fugiat fugit in incidunt ipsam minus nam nisi
                obcaecati odit omnis pariatur perferendis perspiciatis porro
                provident quidem recusandae, rem reprehenderit saepe sed sint
                sunt voluptatem. Ad adipisci autem consequatur corporis delectus
                dolore dolorem ducimus ea eligendi enim facere inventore ipsam
                iusto libero nam neque nihil non officiis perferendis possimus,
                provident quasi recusandae reiciendis rem saepe sapiente sequi
                sunt ut voluptatibus voluptatum! Adipisci atque commodi
                consectetur culpa delectus dignissimos eius eligendi enim eum
                explicabo hic laudantium natus necessitatibus nihil, non odio
                placeat quaerat repellendus, rerum, sed ut veniam voluptate
                voluptates. Aspernatur at atque beatae consequatur consequuntur,
                eligendi est facere hic illo impedit, in maxime nostrum odit
                praesentium quas quia similique. Assumenda aut autem deleniti
                dolore doloremque ea esse eveniet expedita impedit iure minus,
                nisi quo quos recusandae repellat rerum vel voluptas
                voluptatibus. Adipisci alias, architecto assumenda commodi
                corporis cupiditate dolorum ducimus eum eveniet explicabo fugiat
                fugit harum iste itaque minus odit quae quasi quo quos rem
                sapiente sequi temporibus veritatis voluptas voluptatem. Animi
                aspernatur atque aut beatae dignissimos distinctio dolore earum
                enim eum excepturi exercitationem facilis fugiat id, impedit in
                ipsam itaque molestiae nobis nostrum numquam, odio odit optio
                rem saepe similique tenetur vero vitae! Accusamus alias cumque,
                delectus eveniet fugit harum in itaque laudantium molestiae quia
                quidem sed vel voluptatum! Consectetur fugiat obcaecati quod
                veritatis. Cum cupiditate, doloremque facilis inventore labore
                magni molestiae nam necessitatibus nihil nobis nostrum numquam
                porro quidem quis saepe sed sequi sit, soluta! Ad alias animi
                aperiam architecto aspernatur aut commodi corporis dignissimos
                dolore doloribus eaque error ex excepturi explicabo ipsam iusto,
                laborum laudantium maiores maxime modi neque nesciunt nihil nisi
                numquam obcaecati omnis pariatur perferendis quae quaerat quidem
                quisquam ratione similique totam velit veniam vero voluptatibus.
                Cum est expedita in molestias numquam sapiente, soluta. Ab
                doloremque esse fuga labore magni, necessitatibus nostrum
                numquam odio placeat quasi quisquam repellendus rerum. Ad amet
                aperiam architecto atque dolor dolorum enim error est ex
                excepturi, fugiat fugit iste labore magni maxime molestiae
                nesciunt officia pariatur quae quisquam quos ut velit voluptas.
                Amet aperiam architecto atque, autem consequatur delectus
                dolorem doloribus dolorum ducimus est ex in ipsum mollitia
                officia placeat possimus provident quasi quibusdam quidem quis
                quo reiciendis repellendus rerum? Dolore, doloribus et excepturi
                repellendus sapiente tenetur! Consequatur doloremque doloribus
                enim et expedita minima nesciunt nisi nostrum, odit omnis
                praesentium quo, reprehenderit sint sit, tempora! A ad
                architecto blanditiis deleniti dignissimos dolore esse et illo
                impedit iure iusto laboriosam mollitia neque, odio, perferendis
                possimus quam quia quod reiciendis sit tenetur veniam
                voluptatibus! Eos nulla numquam quas repellendus vitae. Amet
                cumque dignissimos, distinctio doloribus dolorum ducimus
                eligendi fuga fugiat iste nihil officia, perferendis porro quod
                totam ullam unde voluptate. Accusantium, amet consequuntur et
                exercitationem incidunt magni molestiae necessitatibus nemo
                neque perspiciatis praesentium quasi sunt voluptatem!
                Dignissimos eligendi est exercitationem fuga nemo, quaerat quo
                sunt ullam. Amet aperiam architecto at doloribus eos et eum
                excepturi facere incidunt libero maxime minima natus,
                perferendis perspiciatis recusandae repellat tempore velit
                voluptatibus! Aspernatur hic ipsa voluptates? Ab asperiores
                consectetur corporis dolor error ex, facilis iste magni nesciunt
                officiis, quam quia, quo veniam. Animi culpa dolorem ex fuga
                illo impedit ipsam iste natus nemo odio possimus praesentium sit
                soluta sunt veniam voluptas, voluptatibus! Ab aliquam aperiam
                consectetur consequuntur culpa, cumque dolor dolorum earum
                fugiat hic iusto molestiae placeat, quaerat qui repellat rerum
                sit? A accusamus aliquam architecto consectetur cumque dolor
                ducimus error ex exercitationem fuga fugiat fugit, ipsum maxime
                nesciunt nihil nostrum officia provident quis reiciendis sequi
                soluta temporibus veritatis? Accusamus accusantium aliquam amet,
                beatae consequatur debitis delectus dolores dolorum impedit
                ipsam libero non saepe similique, ullam voluptatem! Animi
                aperiam deleniti distinctio earum harum, magnam omnis possimus
                quo, quos sunt veritatis vero, voluptates. Commodi cum eaque
                minima natus nostrum numquam repellat! Adipisci alias atque
                deleniti eaque earum facilis illo modi molestias odio omnis quos
                rem, sunt tempora vero voluptatum. Architecto corporis culpa
                dicta dolores doloribus earum error mollitia nemo neque non
                optio repellat sapiente, sit tempora veritatis. Alias cumque
                dolore eum iste labore libero, obcaecati quas quod similique
                tempora? Accusamus, accusantium, ad amet aut consequatur cumque
                dolorem doloremque dolorum, error exercitationem harum in
                inventore iusto molestias nemo nihil non odit optio quasi
                repudiandae rerum tempora unde voluptatum. Ea enim expedita
                fugiat illo molestiae necessitatibus nulla officia omnis
                perferendis sapiente suscipit veritatis, vitae! Ab cupiditate et
                explicabo ipsam porro quos ratione, sed? Accusamus ea laboriosam
                mollitia nulla, saepe sapiente sint tempora? Accusamus at
                dolorem dolorum ducimus eius ex incidunt molestiae molestias
                numquam praesentium. Aperiam aut consequuntur expedita explicabo
                impedit magnam quas sapiente sint. Accusamus amet asperiores
                deserunt, eos eveniet facilis itaque quas quidem. Aliquam
                assumenda deserunt dolorem harum illum incidunt ipsum iste
                laborum, libero maxime nam necessitatibus nesciunt non nulla
                numquam obcaecati odio optio perferendis placeat praesentium
                quam qui quod ratione unde veniam voluptas voluptatum. Cumque ea
                eaque eius, eligendi facilis fugit iste nemo quae ratione
                repudiandae sint suscipit ullam unde vitae voluptas! Animi
                asperiores consectetur, dignissimos excepturi molestiae nam
                neque quibusdam similique suscipit. Accusantium adipisci aliquam
                blanditiis consequuntur distinctio ducimus ea error et facilis
                fuga illum laborum pariatur, repellendus rerum sint, sunt
                voluptatem! Accusantium aperiam assumenda commodi consequatur
                cum deserunt dolorem eius eos exercitationem, fugiat illo
                nostrum officia optio voluptates voluptatum. At, consequuntur
                dicta dolore eos eum possimus rem sit. Aliquid cum facilis iste
                quas quod ratione reiciendis repudiandae. Hic iste nihil nobis
                rerum. Aut consectetur cumque, deserunt ea eaque, est eum fuga
                illo impedit maxime minima numquam odit rem sequi voluptates!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      <motion.div
        className="dim-layer"
        onClick={() => setSelectedId(null)}
        animate={{ opacity: selectedId ? 0.3 : 0 }}
      />
    </div>
  );
};
