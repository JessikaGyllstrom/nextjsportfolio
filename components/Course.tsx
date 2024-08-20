"use client"; // This is a client component 👈🏽
import { motion } from "framer-motion"
import { useState } from "react"
import { Courses } from "../typings.d"
import { IconContext } from "react-icons";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import {  Variants } from "framer-motion";

type Props = {
  courses: Courses[];
}

export function Course({ courses }) {
  
  const [isOpen, setIsOpen] = useState(false)
  const btnTitle = "Courses"

  const variants: Variants = {
    
    visible: { opacity: 1, transition: { ease: "easeInOut", delay: 1, duration: 3 }},
    hidden: { opacity: 0 }, 
  };

  return (
    <div className="flex flex-col h-full items-center mb-5  dark:text-white">
      <motion.button className="w-[20%] flex flex-col items-center rounded-sm"
        onClick={() => setIsOpen(isOpen => !isOpen)}>{btnTitle}
        <IconContext.Provider value={{ className: "arrow" }}>
          <motion.div whileHover={{ y: 6, transition: { duration: 2, ease: "easeInOut", repeat: Infinity }}}>
            <TbArrowBigDownLinesFilled className=".arrow text-purple-600/80 hover:text-purple-600" />  
          </motion.div>
        </IconContext.Provider>
      </motion.button>
      <motion.div
        variants={variants}
         className={`w-full flex flex-col border p-3 border-gray-700 rounded-sm dark:bg-gray-800 bg-opacity-20 ${isOpen ? "flex" : "hidden"}`}
        >
        {courses.map((course, idx) =>
          <p key={idx}>- { course.title }</p>
        )}
      </motion.div>
    </div>
  )
}