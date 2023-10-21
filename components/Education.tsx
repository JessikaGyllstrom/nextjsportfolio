import { urlFor } from '../lib/sanity';
import { loadData } from '../lib/loadData';
import Image from './Image';
import Box from './box';
import { Education } from '../pages/api/typings.d';
import { XaxisAnimate } from './Xanimate';
import { AnimatePresence } from "framer-motion";
import { useAnimation, motion } from "framer-motion";

import {  useRef, useState } from "react";

import { BsFillCloudDownloadFill, BsGithub } from 'react-icons/bs';

type Props = {
    education: Education[];
}

export default function Educations({ education }: Props) {
    
  return (
    <div id="education">
      {education.map((skill, idx) =>
        <div key={idx} className="flex flex-col border p-3 my-2 border-gray-700 rounded-sm bg-gray-800 bg-opacity-20">
            <h5 className='text-xs font-bold'> {skill.title}</h5>
            <h5 className='text-xs'> {skill.description}</h5>
        </div>
      )}
    </div>
  )
}