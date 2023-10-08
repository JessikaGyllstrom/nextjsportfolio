import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { urlFor } from "../lib/sanity";
import Hero from "./Hero";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 3 } },
  hidden: { opacity: 0, scale: 0 }
};

const Box = () => {

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
    </motion.div>
  );
};
export default Box;