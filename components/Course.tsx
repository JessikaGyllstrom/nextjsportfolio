"use client"; // This is a client component 👈🏽

import { animate, motion } from "framer-motion"
import { title } from "process"
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { Courses } from "../typings.d"
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

type Props = {
  courses: Courses[];
}

export function Course({ courses }) {
  
  const [isOpen, setIsOpen] = useState(false)
  const btnTitle = "Courses"

  return (
    <div className="flex flex-col h-full items-center mb-5  dark:text-white">
      <motion.button className="w-[30%] flex flex-col items-center rounded-sm"
        onClick={() => setIsOpen(isOpen => !isOpen)}>{btnTitle}
        <IconContext.Provider value={{ className: "arrow" }}>
          <motion.div whileHover={{ y: 7, transition: { duration: 2, ease: "easeInOut", repeat: Infinity }}}>
            <TbArrowBigDownLinesFilled className=".arrow text-purple-600/70" />  
          </motion.div>
        </IconContext.Provider>
      </motion.button>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={`w-full flex flex-col border p-3 border-gray-700 rounded-sm bg-gray-800 bg-opacity-20 ${isOpen ? "flex" : "hidden"}`}
        >
        {courses.map((course, idx) =>
          <p key={idx}>- { course.title }</p>
        )}
      </motion.div>
    </div>
  )
}