import React from 'react'
import{ Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor, sanityClient } from '../lib/sanity'
import { motion } from "framer-motion"
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'


import { Icon } from "react-3d-icons";
import { github } from "react-3d-icons";


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
            <div className='flex justify-center items-center h-vh'>
                <div className='flex flex-col p-5 w-[80%] sm:w-[80%] md:w-[70%%] md:h-80 lg:w-[70%] lg:px-7 md:flex-row justify-center items-center bg-gray-800 bg-opacity-10 mt-10 rounded-lg md:p-5 shadow-purple-800 shadow-[0_0_60px_0] hover:scale-[1.01] transition ease-in-out delay-250'>
                    <div className='flex flex-col w-[98%] min-h-[35%] pt-4 md:w-[100%] justify-around md:p-2 md:pt-8'>
                        <div className='justify-center flex-initial'>
                            <h3 className='bg-purple-800/40 pl-2 p-2 mb-2 rounded-r-md w-[80%] md:w-[80%]  text-xs md:text-sm'>Welcome to my portfolio</h3>
                        </div>
                        <h2 className='font-bold pt-3 text-xs md:text-sm lg:text-md'>IM JESSIKA GYLLSTRÖM</h2>
                        <h5 className='text-xs md:text-sm min-h-[50px]'>- {text}</h5>
                        <div className='flex flex-col'>
                            <div className='social flex flex-row justify-center pt-1 mt-3'>
                                <a><BsGithub size={25} className='icon mx-2'></BsGithub></a>

  <Icon file={github} color={'#FFF'} lightColor={'#FFF'} scale={6} spin={true} depth={10} className={''} />

                                <a><BsLinkedin size={25} className='icon mx-2'></BsLinkedin></a>
                                <a><BsInstagram size={25} className='icon mx-2'></BsInstagram></a>
                                <a ><AiOutlineMail size={25}></AiOutlineMail></a>
                            </div>
                        </div> 
                    </div>
                <div>       
            </div>
            <div>
                <div className='flex justify-center w-40 lg:w-60'>
                    <motion.img className=''src={urlFor('image-d02153e43d283044b0158e611473bc0f1f605238-2500x2500-png').width(400).url() } 
                    animate={{ y: [0, 25, 0] }}
                    transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    </div>
)
}       
export default Hero