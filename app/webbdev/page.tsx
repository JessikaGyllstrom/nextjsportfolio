import React from 'react'
import { Webbdev } from '../../typings.d';
import Layouts from '../../components/Layouts';
import Projects from '../../components/Projects';
import Fieldset from '../../components/Fieldset';
import { getWebbdev } from '../../lib/sanity.utils';
import { getPageInfo } from '../../lib/sanity.utils';
import { AnimateComponent } from '../../components/AnimateComponent';
import Animation from '../../components/AnimateL';

export default async function Webbdev() {
  const webbdev = await getWebbdev();
  const pageInfo = await getPageInfo();


  console.log(webbdev)

  return (
    <div className="mx-auto flex justify-center w-screen h-full md:mb-24">
      <div className='flex flex-col mt-5'>
        <Fieldset sectionTitle={"Projects"} />
        <div className='w-screen'>
          <div className='flex flex-col items-center'>
            <Projects webbdev={webbdev} />
          </div>
          <Fieldset sectionTitle={"Layouts"} />
          <Layouts webbdev={webbdev} /> 
        </div>
      </div>
    </div>
  );
} 
    
