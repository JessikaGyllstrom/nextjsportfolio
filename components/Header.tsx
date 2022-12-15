import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { urlFor, sanityClient } from '../lib/sanity'

type Props = {}

function Header({}: Props) {
  return (
    <header className='top-0 flex items-start justify-between max-w-5xl mx-auto p-3'>
        <div className='flex flex-row items-center'>
          <a><img src={urlFor('image-cbece69870934dd72adc277bb66ceab37a217635-100x100-png').width(40).url() } ></img> </a>
        </div>
        <div className='flex flex-row items-center'>
            <a className='text-base font-light'>Art</a>
            <a className='text-base font-light'>Webbdev</a>
            <a className='text-base font-light'>Contact</a>
        </div>
    </header>
  )
}
export default Header