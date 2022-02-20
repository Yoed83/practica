import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../Button/Button";

export default function Box5() {
  const control = useAnimation();

  return (
    <div className="box-container space-x-4 space-y-6">
      <Button
        onClick={() => {
          control.start({
            x: "40rem",
            transition: { duration: 2 },
          });
        }}
      >
        Move Rigth
      </Button>
      <Button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Move Left
      </Button>
      <Button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: { duration: 1 },
          });
        }}
      >
        Circle
      </Button>
      <Button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 1 },
          });
        }}
      >
        Square
      </Button>
      <Button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </Button>
      <motion.div className="box ml-0" animate={control}></motion.div>
    </div>
  );
}
