"use client"; // This is a client component 👈🏽
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../lib/sanity";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiSolidCloudDownload } from "react-icons/bi";
import { PageInfo } from "../typings.d";
import { useState } from "react";
import Modal from "./Modal";
import AnimateL from "./AnimateL";
import Robot from "./Robot";

type Props = {
  pageInfo: PageInfo[];
};

export default function Hero({ pageInfo }: Props) {
  const [modalState, setModalState] = useState(false);

  const [text] = useTypewriter({
    words: ["Frontend Developer", "Programmer iPhone & Android"],
    loop: true,
    delaySpeed: 2500,
    typeSpeed: 90,
  });

  return (
    <AnimateL>
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-[95%] md:w-[80%] xl:w-[60%] flex mx-8 p-3 dark:bg-slate-800/40 lg:h-[70%] md:flex-row justify-center items-center rounded-xl">
          <div className="w-[90%] md:w-[80%] rounded-md px-6">
            <div className="flex flex-col pt-4 w-[90%] lg:w-[95%] md:p-1 md:pt-6">
              <div className="justify-center flex-initial ">
                <h3 className="text-xs shadow-neutral-950 shadow-lg text-white pl-2 p-2 mb-2 rounded-r-md  bg-gradient-to-r from-purple-900  to-purple-700  w-[80%] md:w-[60%] md:text-small lg:text-lg">
                  Welcome to my portfolio
                </h3>
              </div>

              <div className="lg:py-2 rounded-md">
                <h3 className="text-sm font-normal pt-3 pb-2 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient md:text-md md:mb-3 md:w-[80%] lg:text-2xl">
                  {"I'M JESSIKA GYLLSTRÖM"}
                </h3>
                <p className="text-[14px] min-h-[50px] dark:text-white md:text-xs lg:text-lg">
                  - {text}
                </p>
                {/* social icons */}
                {pageInfo.map((info, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="social flex flex-row justify-center items-center pt-1 mt-3 mb-2  dark:text-white">
                      <a href={info.githubLink}>
                        <BsGithub
                          size={20}
                          className="icon mx-2 transition duration-300 ease-in-out"
                        >
                          <p>{info.githubLink}</p>
                        </BsGithub>
                      </a>
                      <a href={info.linkedinLink}>
                        <BsLinkedin
                          size={20}
                          className="icon mx-2 transition duration-300 ease-in-out"
                        ></BsLinkedin>
                      </a>
                      <div
                        className="cursor-pointer transition duration-300 ease-in-out"
                        onClick={() => setModalState(true)}
                      >
                        <GrMail size={24} className="icon mx-2" />
                      </div>
                      <div>
                        {modalState && <Modal setModalState={setModalState} />}
                      </div>
                    </div>
                    {/* <div className="flex flex-col items-center my-2 transition duration-300 ease-in-out dark:text-white">
                      <p>Download CV:</p>
                      <a href={info.cvLink}>
                        <BiSolidCloudDownload
                          size={28}
                          className="icon mx-2 mt-2 "
                        ></BiSolidCloudDownload>
                      </a>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[50%] px-2">
            <div className="flex justify-center bg-purple-700 dark:bg-slate-800/30 rounded-full w-32 h-32 lg:w-64 lg:h-64">
              {pageInfo.map((info, index) => (
                // <motion.img
                //   key={index}
                //   src={urlFor(`${info.heroImage.asset._ref}`).url()}
                //   animate={{ y: [0, 40, 0] }}
                //   transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
                // />
                <Robot key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimateL>
  );
}
