import React from 'react'
import { AnimateComponent } from '../../components/AnimateComponent';
import { urlFor } from '../../lib/sanity';
import { getAbout, getArt } from '../../lib/sanity.utils';
import AnimateR from '../../components/AnimateL';
import AnimateTxt from '../../components/AnimateTxt';
import { PortableText } from '@portabletext/react';
import Fieldset from '../../components/Fieldset';
import Hobbies from '../../components/Hobbies';

export default async function About() {
  const about = await getAbout();

  

  console.log(about)
  return (
      <div className="mx-auto flex justify-center w-screen h-full md:mb-24">
        <div className='flex flex-col'>
        <Fieldset sectionTitle={"About"} />
        <div className='w-full flex justify-center'>

      <div className='w-[80%] dark:bg-slate-800/40'>
      {about.map((data, id) =>
        <div key={id} className="flex items-center">
  
          <div className='flex flex-col text-gray-50 p-8'>
            <p>
              <PortableText value={data.bio}  />

            </p>

            </div>

              <div className='w-[80%] h-full object-cover'>
                                      <img key={id} className="rounded-sm  hover:scale-105 transition duration-500 cursor-pointer " src={urlFor(data.profileImg.asset._ref).url()} />

          </div>

        </div>
            )}  
    <Hobbies />
          </div>
        
    </div>
      </div>
      </div>
  )
}

