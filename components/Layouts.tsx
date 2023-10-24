import React from 'react'
import { urlFor } from '../lib/sanity'
export default function Layouts({ webbdev }) {
  
const layouts = webbdev.filter(layout => layout.title === 'Layouts');

  return (
    <div className='flex justify-center mx-8 lg:my-6'>  
      <div className="mx-auto grid grid-cols-1 md:grid-cols-1 gap-3 md:w-[70%]">
        {layouts.map((project, id) =>
          <div key={id} className='flex justify-center object-cover'>
            <img 
              src={urlFor(`${project.image.asset._ref}`).url()} 
              alt={project.title}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  )
}