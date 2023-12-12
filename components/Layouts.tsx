import React from 'react'
import { urlFor } from '../lib/sanity'
import AnimationL from './AnimateL';

export default function Layouts({ webbdev }) {
  
const layouts = webbdev.filter(layout => layout.title === 'Layouts');

  return (
    <div className='flex justify-center my-6 w-screen md:mb-24'>  
      <div className="w-[90%] grid grid-cols-1 gap-3 md:w-[40%]">
        {layouts.map((project, id) =>
          <div key={id} className='flex justify-center object-cover'>
            <AnimationL>
              <img 
                src={urlFor(`${project.image.asset._ref}`).url()} 
                alt={project.title}
                className="object-cover"
              />
            </AnimationL>
          </div>
        )}
      </div>
    </div>
  )
}