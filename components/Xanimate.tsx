import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { urlFor } from "../lib/sanity";
import Hero from "./Hero";



export function XaxisAnimate({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
    })
{
    const boxVariant = {
      visible: { opacity: 1, x: 0, transition: { duration: 3 } },
      hidden: { opacity: 0, x: -150}
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
        className="boxflex"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        
        >
                  {children}

    </motion.div>

  );
}