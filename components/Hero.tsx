import React from 'react'
import{ Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor, sanityClient } from '../lib/sanity'
import { motion } from "framer-motion"
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'


type Props = {}

function Hero({}: Props) {
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
        <div className='min-h-screen'>
            <div className='flex flex-row justify-items-center max-w-4xl mx-auto bg-neutral-800 mt-14 rounded-m shadow-purple-800 shadow-[0_0_60px_0]'>
                <div className='flex flex-nowrap flex-col justify-center pl-12'>
                    <div className='justify-center flex-initial'>
                        <h3 className='bg-purple-800 pl-2 p-2 mb-3 rounded-r-md max-w-[90%]'>Welcome to my portfolio</h3>
                    </div>
                    <h2 className='font-bold pt-5'>I'M JESSIKA GYLLSTRÖM</h2>
                    <h3>- {text}</h3>
                    <div className='flex flex-col min-h-[20%] justify-end'>
                    <div className='flex flex-row justify-center pt-5'>
                        <a><BsGithub></BsGithub></a>
                        <a><BsLinkedin></BsLinkedin></a>
                        <a><BsInstagram></BsInstagram></a>
                        <a><AiOutlineMail></AiOutlineMail></a>
                    </div>
                    </div>
       
                </div>
            <div >       
        </div>
     
            <div className='bg-purple-800 rounded-full filter blur-xl backdrop-grayscale backdrop-blur-2xl bg-opacity-30 p-12'>

                <motion.img src={urlFor('image-d02153e43d283044b0158e611473bc0f1f605238-2500x2500-png').width(500).url() } 
                    animate={{ y: [0, 30, 0] }}
                    transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
                />
            </div>
        </div>
        </div>
    )
}
export default Hero