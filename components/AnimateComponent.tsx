"use client"; // This is a client component 👈🏽

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function AnimateComponent({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const boxVariant = {
    visible: { opacity: 1, transition: { duration: 3 } },
    hidden: { opacity: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      className="box px-2 flex justify-center items-center"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
}
