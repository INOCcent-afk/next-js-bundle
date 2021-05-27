import React, { FC } from "react";

import { motion } from "framer-motion";
import { PageAnimate } from "../animations/PageTransition";

const about: FC = () => {
  return (
    <>
      <motion.div
        variants={PageAnimate}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1>ABOUT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          voluptatibus officia tempore libero dolorum soluta doloribus, voluptas
          adipisci numquam ipsa dolores qui quam. Nam, velit! Dolorum eius,
          consequatur ut illum, quae dolore sunt tempora asperiores mollitia
          unde nam ipsa. Repellat fugiat iusto enim vel tempore at molestiae rem
          ipsa minus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          voluptatibus officia tempore libero dolorum soluta doloribus, voluptas
          adipisci numquam ipsa dolores qui quam. Nam, velit! Dolorum eius,
          consequatur ut illum, quae dolore sunt tempora asperiores mollitia
          unde nam ipsa. Repellat fugiat iusto enim vel tempore at molestiae rem
          ipsa minus.
        </p>
      </motion.div>
    </>
  );
};

export default about;
