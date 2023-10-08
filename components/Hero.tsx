import React from 'react'
import{ Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor, sanityClient } from '../lib/sanity'
import { motion } from "framer-motion"
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { RiDownloadCloud2Line } from 'react-icons/ri'

import { PageInfo } from '../pages/typings.d'
import Link from 'next/link'
type Props = {
  pageInfo: PageInfo[];
}
export default function Hero({ pageInfo }: Props) {
    const  [text, count] = useTypewriter({ 
        words: [
        "Webbdeveloper", 
        "Programmer iPhone & Android", 
        "Digital Artist"
        ],
        loop: true, 
        delaySpeed: 2500,
        typeSpeed: 80
    })
    return (
        <div className='flex justify-center content-center'>
            <div className='flex p-5 w-[80%] md:w-[70%] lg:w-[70%] lg:px-7 md:flex-row justify-center items-center mt-10 rounded-lg md:p-5'>
                <div>
                    <div className='flex flex-col min-h-[35%] ml-4 pt-4 md:w-[100%] md:p-2 md:pt-8'>
                        
                        <div className='justify-center flex-initial'>
                            <h3 className='shadow-neutral-950 shadow-lg bg-gradient-to-r from-purple-800 to-pink-600   pl-2 p-2 mb-2 rounded-r-md w-[80%] md:w-[80%]'>Welcome to my portfolio</h3>
                        </div>

                        <h2 className='font-bold pt-3 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400  text-transparent bg-clip-text bg-300% '>I'M JESSIKA GYLLSTRÖM</h2>
                        <h5 className='text-xs md:text-sm min-h-[50px]'>- {text}</h5>
                        {/* social icons */}
                        {pageInfo.map((info) =>
                            <div className='flex flex-col items-center w-[80%]'>
                                <div className='social flex flex-row justify-center pt-1 mt-3 mb-2'>
                                    <a href={info.githubLink}><BsGithub size={20} className='icon mx-2'><p>{info.githubLink}</p></BsGithub></a>
                                    <a href={info.linkedinLink}><BsLinkedin size={20} className='icon mx-2'></BsLinkedin></a>
                                    <a><AiOutlineMail size={20} className='icon mx-2'></AiOutlineMail></a>
                                </div>
                                <div className='flex flex-col items-center mt-2'>
                                    <p>Download CV:</p><a href={info.linkedinLink}><RiDownloadCloud2Line size={22} className='icon mx-2 mt-2'></RiDownloadCloud2Line></a>

                                </div>

                            </div>
                        )}
                    </div>
                </div>
            <div>
            <div className='flex justify-center'>
                {pageInfo.map((info) =>
                    <motion.img 
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
