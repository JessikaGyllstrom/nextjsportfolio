"use client"; // This is a client component 👈🏽
import React from 'react'
import{ Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor, sanityClient } from '../lib/sanity'
import { motion } from "framer-motion"
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { BiSolidCloudDownload } from 'react-icons/bi'
import { PageInfo } from '../typings.d'
import Link from 'next/link'
import { useState } from "react";
import Modal from './Modal';

type Props = {
  pageInfo: PageInfo[];
}

export default function Hero({ pageInfo }: Props) {
  const [modalState, setModalState] = useState(false)

  const [text] = useTypewriter({ 
      words: [
      "Webbdeveloper", 
      "Programmer iPhone & Android", 
      "Digital Artist"
      ],
      loop: true, 
      delaySpeed: 2500,
      typeSpeed: 90
  })

  return (
    <div className='flex justify-center content-center min-h-screen'>
      <div className='flex bg-slate-800/40 p-3 pl-3 w-[95%] md:w-[70%] lg:w-[70%] lg:px-7 md:flex-row justify-center items-center mt-10 rounded-xl md:p-5'>
        <div className='rounded-md'>
          <div className='flex flex-col min-h-[35%] lg:ml-3 pt-4 lg:w-[100%] md:p-2 md:pt-8 lg:pl-5'>        
            <div className='justify-center flex-initial '>
              <h3 className='shadow-neutral-950 shadow-lg bg-gray-800 text-white pl-2 p-2 mb-2 rounded-r-md w-[80%] lg:w-[90%]'>
                  Welcome to my portfolio
              </h3>
            </div>
            <div className=' px-3 lg:py-2 rounded-md'>
              <h2  className='font-mono font-semibold pt-3 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient'>
                {" I'M JESSIKA GYLLSTRÖM"}
              </h2>
            <h5 className='text-xs md:text-sm min-h-[50px]'>- {text}</h5>
            {/* social icons */}
            {pageInfo.map((info, idx) =>
              <div key={idx} className='flex flex-col items-center w-[80%]'>
                <div className='social flex flex-row justify-center items-center pt-1 mt-3 mb-2  dark:text-white'>
                  <a href={info.githubLink}><BsGithub size={20} className='icon mx-2 transition duration-300 ease-in-out'><p>{info.githubLink}</p></BsGithub></a>
                  <a href={info.linkedinLink}><BsLinkedin size={20} className='icon mx-2 transition duration-300 ease-in-out'></BsLinkedin></a>
                  <div className="cursor-pointer transition duration-300 ease-in-out" onClick={() => setModalState(true)} >
                    <GrMail size={24} className='icon mx-2' />
                  </div>
                  <div>
                    {modalState && <Modal setModalState={setModalState} />}
                  </div>
                </div>
                <div className='flex flex-col items-center my-2 transition duration-300 ease-in-out dark:text-white'>
                  <p>Download CV:</p><a href={info.linkedinLink}><BiSolidCloudDownload size={28} className='icon mx-2 mt-2 '></BiSolidCloudDownload></a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center'>
          {pageInfo.map((info, index) =>
            <motion.img 
              key={index}
              src={urlFor(`${info.heroImage.asset._ref}`).width(800).url()} 
              animate={{ y: [0, 40, 0] }}
              transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
            />
          )}
        </div>
      </div>
    </div>
  </div>
  )
}       
