"use client"; // This is a client component 👈🏽
import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AnimateL({
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

  const textVariant: Variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2} },
    
    hidden: { opacity: 0, scale: 0.01 }
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
    <motion.header
      ref={ref}
      initial="hidden"
      exit="hidden"
      animate={control}    
      variants={textVariant}
    >
      {children}
    </motion.header>  
  );
}
