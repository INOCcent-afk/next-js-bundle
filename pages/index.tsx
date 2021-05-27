import React from "react";
import Button from "../components/Button";

import { decrement, increment } from "../redux/Counter.slice";
import { useAppDispatch } from "../redux/hook";
import { motion } from "framer-motion";
import { PageAnimate } from "../animations/PageTransition";

export default function Home() {
  const dispatch = useAppDispatch();

  return (
    <>
      <motion.div
        variants={PageAnimate}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1>HOMEPAGE</h1>
        <Button event={() => dispatch(increment())}>INCREMENT</Button>
        <Button event={() => dispatch(decrement())}>DECREMENT</Button>
      </motion.div>
    </>
  );
}
