"use client"; // This is a client component 👈🏽

import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { urlFor } from "../lib/sanity";
import Hero from "./Hero";


// interface Props {
//   emoji: object;
//   // hueA: number;
//   // hueB: number;
// }




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
  // hueA: number;
  // hueB: number;
}


  // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

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

      // className="card-container"
      initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.8 }}
      exit="hidden"
            animate={control}    
variants={cardVariants}

    >
      {/* <div className="splash" style={{ background }} /> */}
      {/* <div /> */}

      {/* <motion.div className="card" variants={cardVariants}> */}
              {/* <motion.div  variants={cardVariants}> */}

        {children}
      {/* </motion.div> */}
    </motion.div>
  );
}
