"use client"; // This is a client component 👈🏽
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';

export default function Footer({ links }) {
  
  const [modalState, setModalState] = useState(false)

  return (
    <div className="border-t min-h-full  dark:border-gray-800/80 dark:bg-slate-900 dark:text-white">
      <div className="flex items-center justify-center mt-2">
        <div className='flex flex-col items-center w-full'>  
          <div className='w-full flex justify-center'>
            <div className='bg-slate-900 rounded-md p-1 hover:bg-purple-800 transition duration-300 ease-in-out'>
              <Link href="/">
                <img src="https://cdn.sanity.io/images/n28frzwy/production/6da30a96738dcd41323d25fb791b2ab5c09e8d43-100x100.png"
                  width={50}
                  alt={"logo"}
                />
              </Link>
            </div>
          </div>
          <div className='social flex flex-row justify-center pt-1 mt-3'>
            <a href={links.github}><BsGithub size={20} className='icon mx-2 cursor-pointer transition duration-300 ease-in-out'></BsGithub></a> 
            <a href={links.linkedIn}><BsLinkedin size={20} className='icon mx-2 cursor-pointer transition duration-300 ease-in-out'></BsLinkedin></a> 
            <div className="cursor-pointer transition duration-300 ease-in-out" onClick={() => setModalState(true)} >
              <GrMail size={24} className='icon mx-2' />
            </div>
            <div>
              {modalState && <Modal setModalState={setModalState} />}
            </div>
          </div>
          <div className='flex w-full dark:bg-neutral-900/30 justify-center py-1 mt-2 border-t dark:border-gray-800/80'>
            <p className='dark:text-gray-500 text-[0.6rem]'>&copy; 2024 Jessika Gyllström </p>
          </div>
        </div>
      </div>  
    </div>
  )
}
