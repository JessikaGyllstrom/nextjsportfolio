import React from 'react'
import { AnimateComponent } from '../../components/AnimateComponent';
import { urlFor } from '../../lib/sanity';
import { getAbout, getArt, getHobbies } from '../../lib/sanity.utils';
import AnimateR from '../../components/AnimateL';
import AnimateTxt from '../../components/AnimateTxt';
import { PortableText } from '@portabletext/react';
import Fieldset from '../../components/Fieldset';
import Slider from '../../components/Slider';

export default async function About() {
  const about = await getAbout();
  const hobbies = await getHobbies();
  console.log(about)
  return (
    <div className="mx-auto flex justify-center w-screen h-full md:mb-24">
      <div className='flex flex-col h-full mt-5'>
        <Fieldset sectionTitle={"About"}/>
        <div className='w-full flex justify-center'>
          <div className='w-[96%] md:w-[80%] lg:w-[95%] dark:bg-slate-800/40'>
            <AnimateR>
              {about.map((data, id) =>
                <div key={id} className="flex flex-col items-center md:flex-row">
                  <div className='flex flex-col text-gray-50 p-4 md:p-8 lg:text-xl'>
                    <PortableText value={data.bio} />
                  </div>
                  <div className='w-[80%] h-full object-cover'>
                    <img key={id} className="rounded-sm  hover:scale-105 transition duration-500 cursor-pointer " src={urlFor(data.profileImg.asset._ref).url()} />
                  </div>
                </div>
              )}  
            </AnimateR>
          </div>
        </div>
        <div className='mt-6 mb-6'>
          <Fieldset sectionTitle={"Hobbies"}/>
          <Slider data={...hobbies}/>
        </div>
      </div>
    </div>
  )
}

