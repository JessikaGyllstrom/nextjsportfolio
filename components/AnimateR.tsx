"use client"; // This is a client component 👈🏽

import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState} from "react";
import { urlFor } from "../lib/sanity";
import Hero from "./Hero";


// interface Props {
//   emoji: object;
//   // hueA: number;
//   // hueB: number;
// }




export default function AnimateR({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
    })
{
  const boxVariant = {
    visible: { opacity: 1, transition: { duration: 3 }},
    hidden: { opacity: 0 }
};


  const control = useAnimation();
  const [ref, inView] = useInView();

  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
interface Props {
  emoji: string;
  // hueA: number;
  // hueB: number;
}

  const cardVariantsR: Variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
    hidden: { opacity: 0, x: 100 }
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      exit="hidden"
      animate={control}    
      variants = {cardVariantsR}
    >

      {children}
    </motion.div>        
  );
}
