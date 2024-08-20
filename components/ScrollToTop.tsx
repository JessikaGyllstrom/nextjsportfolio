"use client"; // This is a client component 👈🏽
import { Fragment, useEffect, useState } from "react"
import { FaCircleArrowUp } from "react-icons/fa6";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion"

export default function ScrollToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 200) {
              setShow(true);
          } else {
              setShow(false);
          }
      });
  });

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",        
      });
  }

  return (
    <Fragment>
      {
        (show) ? (
          <div className="duration-75 transition ease-in-out delay-1000 fixed bottom-0 right-0 mb-6 mr-6 z-10">
             <motion.button 
                animate={{ y: [20, 0]}}
                transition={{ ease: 'easeInOut', duration: 2 }}
                onClick={scrollToTop}
                className="rounded-full"
              >       
               <FaCircleArrowUp size={24} className="icon text-purple-600/80 hover:text-purple-600"/>
            </motion.button>
          </div>
        ) : (<Fragment/>)
      }
    </Fragment>
  )
}