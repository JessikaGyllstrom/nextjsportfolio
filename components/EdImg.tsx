import React from 'react'
import { PageInfo } from '../pages/typings.d'
import { urlFor } from '../lib/sanity'
import { motion } from 'framer-motion'

type Props = {
  pageInfo: PageInfo[];
}

function EdImg({ pageInfo }) {
  return (
      <div className='flex p-2'>         
        {pageInfo.map((info) =>
        <motion.img 
            src={urlFor(`${info.educationImage.asset._ref}`).url()} 
            animate={{ y: [0, 40, 0] }}
            transition={{ ease: 'linear', duration: 10, repeat: Infinity }} 
            className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5c2c7a] from-20%  via-[#75408a] via-20%  to-transparent to-70%"
        />      
        )}
        </div>
    )
}
export default EdImg