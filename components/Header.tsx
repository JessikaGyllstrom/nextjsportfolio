import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-2xl mx-auto p-1'>
        <div className='flex flex-row items-center'>

            <a><BsGithub></BsGithub></a>
            <a><BsLinkedin></BsLinkedin></a>
            <a><BsInstagram></BsInstagram></a>
        </div>

        <div className='flex flex-row items-center'>
            <a><AiOutlineMail></AiOutlineMail></a>
            <p>GET IN TOUCH</p>
        </div>

    </header>
  )
}

export default Header