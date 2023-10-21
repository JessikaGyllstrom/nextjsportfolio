import React from 'react'
import Webbdev from '../pages/webbdev'
import { urlFor } from '../lib/sanity'

// type Props = {
//   webbdev: Webbdev[];
// }
export default function Layouts({ webbdev }) {
  
  const layouts = webbdev.filter(layout => layout.title === 'Layouts');
  console.log(layouts)

  return (
    <div className='flex justify-center mx-8 lg:my-6'>

        
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

          {layouts.map((project, id) =>
            <div key={id} className='flex justify-center'>
                <img 
                  src={urlFor(`${project.image.asset._ref}`).url()} 
                  alt={project.title}
                />
              </div>


  


          )}
          </div>
          </div>
  )
}

      // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      //   {art.map((art, id) =>
      //     <div key={id} className="flex justify-center text-6xl border-3 border-gray-300 rounded-sm p-2 bg-neutral-800">
      //       <img className="w-full rounded-sm  hover:scale-105 transition duration-500 cursor-pointer object-cover" src={urlFor(art.image.asset._ref).url()} />
      //     </div>
      //     )}
      // </div>