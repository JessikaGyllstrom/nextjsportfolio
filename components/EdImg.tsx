"use client"; // This is a client component 👈🏽
import React from 'react'
import { PageInfo } from '../typings.d'
import { urlFor } from '../lib/sanity'
import { motion } from 'framer-motion'
import AnimateL from './AnimateL';

type Props = {
  pageInfo: PageInfo[];
}

function EdImg({ pageInfo }) {
  return (
    <div className='flex'>    
      <AnimateL>
        {pageInfo.map((info, idx) =>
          <img 
            key={idx}
            src={urlFor(`${info.educationImage.asset._ref}`).url()} 
            className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5c2c7a] from-20%  via-[#75408a] via-20%  to-transparent to-70%"
          />      
          )}
      </AnimateL>
    </div>
  )
}
export default EdImg