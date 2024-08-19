import React from 'react'
import Layouts from '../../components/Layouts';
import Projects from '../../components/Projects';
import Fieldset from '../../components/Fieldset';
import { getWebbdev } from '../../lib/sanity.utils';
import { getPageInfo } from '../../lib/sanity.utils';

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
    
