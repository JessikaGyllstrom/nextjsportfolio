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
    <AnimateComponent>
      <div className="w-screen mt-8 flex justify-center">
        <div className='flex flex-col'>
          <Fieldset sectionTitle={"Projects"} />
          <div className='flex flex-col items-center'>
            <Projects webbdev={webbdev} />
          </div>
          <div>
            <Fieldset sectionTitle={"Layouts"} />
            <Layouts webbdev={webbdev} /> 
          </div>
        </div>
      </div>
    </AnimateComponent>
  );
} 
    
