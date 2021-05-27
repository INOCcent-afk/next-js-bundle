import React from "react";
import Button from "../components/Button";

import { decrement, increment } from "../redux/Counter.slice";
import { useAppDispatch } from "../redux/hook";
import { motion, useAnimation } from "framer-motion";

import { PageAnimate } from "../animations/PageTransition";
import { useInView } from "react-intersection-observer";

const scrollVariant = {
  hidden: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    x: 250,
    transition: {
      duration: 1,
    },
  },
};

export default function Home() {
  const dispatch = useAppDispatch();
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("can see pussy");
    }
    if (!inView) {
      controls.start("hidden");
      console.log("cant see shit");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        variants={PageAnimate}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="spacer"></div>
        <motion.h1
          variants={scrollVariant}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          HOMEPAGE
        </motion.h1>
        <Button event={() => dispatch(increment())}>INCREMENT</Button>
        <Button event={() => dispatch(decrement())}>DECREMENT</Button>
      </motion.div>
    </>
  );
}
