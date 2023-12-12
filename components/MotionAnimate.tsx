"use client"; // This is a client component 👈🏽

import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



export function MotionAnimate({
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
}



  const cardVariants: Variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 2 }},
    hidden: { opacity: 0, x:-200 }
};
  useEffect(() => {
    if (inView) {
      control.start("visible");
      console.log("visible")
    } else {
      control.start("hidden");
      console.log("hidden")
    }
  }, [control, inView]);

  return (  
    <motion.div
      ref={ref}
      initial="hidden"
      exit="hidden"
      animate={control}    
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
}
