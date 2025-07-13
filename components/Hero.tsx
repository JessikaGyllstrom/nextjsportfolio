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
        <div className=" w-full xl:w-[60%] flex flex-col mx-4 p-3 dark:bg-slate-800/40 lg:h-[70%] md:flex-row justify-center items-center rounded-xl">
          <div className="w-full flex justify-center md:w-[80%] rounded-md p-1 md:px-4">
            <div className="flex flex-col pt-4 w-full lg:w-[95%] md:p-1 md:pt-6">
              <div className="w-full justify-center flex-initial ">
                <h1 className="text-sm shadow-neutral-950 shadow-lg text-white p-2 mb-2 rounded-r-md  bg-gradient-to-r from-purple-900  to-purple-700  w-[80%] md:w-[60%] lg:text-lg">
                  Welcome to my portfolio
                </h1>
              </div>

              <div className="flex flex-col w-full lg:py-2 rounded-md">
                <h2
                  className="text-2xl
                 font-extrabold pt-3 pb-2 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient md:text-md md:mb-3 md:w-[80%] lg:text-2xl"
                >
                  {"I'M JESSIKA GYLLSTRÖM"}
                </h2>
                <p className="text-sm min-h-12 dark:text-white md:text-xs lg:text-lg">
                  - {text}
                </p>
                {/* social icons */}
                {pageInfo.map((info, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="social flex flex-row justify-center items-center pt-1 mt-3 mb-2  dark:text-white">
                      <a
                        href={info.githubLink}
                        aria-label="Visit my GitHub profile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub
                          size={20}
                          className="icon mx-2 transition duration-300 ease-in-out"
                        >
                          <p>{info.githubLink}</p>
                        </BsGithub>
                      </a>
                      <a
                        href={info.linkedinLink}
                        aria-label="Visit my LinkedIn profile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin
                          size={20}
                          className="icon mx-2 transition duration-300 ease-in-out"
                        ></BsLinkedin>
                      </a>
                      <div
                        className="cursor-pointer transition duration-300 ease-in-out"
                        onClick={() => setModalState(true)}
                      >
                        <GrMail
                          size={24}
                          className="icon mx-2"
                          aria-label="Contact me"
                          target="_blank"
                        />
                      </div>
                      <div>
                        {modalState && <Modal setModalState={setModalState} />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full lg:w-[50%] p-2">
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
