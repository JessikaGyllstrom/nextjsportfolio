"use client"; // This is a client component 👈🏽
import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState} from "react";

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

  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
interface Props {
  emoji: string;

}

  const cardVariantsL: Variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 2 }},
    hidden: { opacity: 0, x: -200 }
  };

  const [toggle, setToggle] = useState(false);



  useEffect(() => {
    if (inView) {
      control.start("visible");
      console.log("visible" + toggle)
      setToggle(false)
    }
    else {
      control.start("hidden");
      console.log("hidden" + "toggle" + toggle)
      setToggle(true);
    }
  }, [control, inView, toggle]);

  return (    
    <motion.div
      ref={ref}
      initial="hidden"
      exit="hidden"
      animate={control}    
      variants = {cardVariantsL}
    >
      {children}
    </motion.div>  
  );
}
