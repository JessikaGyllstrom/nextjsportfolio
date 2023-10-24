import React from 'react'
import { Webbdev } from '../../typings.d';
import Layouts from '../../components/Layouts';
import Projects from '../../components/Projects';
import Fieldset from '../../components/Fieldset';
import ReactPlayer from 'react-player';
import { getWebbdev } from '../../lib/sanity.utils';
import { getPageInfo } from '../../lib/sanity.utils';

export default async function Webbdev() {
  const webbdev = await getWebbdev();
  const pageInfo = await getPageInfo();


console.log(webbdev)

  return (
    <div className="mx-auto w-screen mt-8">
      <h2 className="p-4 text-center dark:text-white">Projects </h2>
      <div className='flex flex-col items-center'>
        <Projects webbdev={webbdev} />
          <Fieldset sectionTitle={"Layouts"} />
        <Layouts webbdev={ webbdev }/>
      </div>
    </div>
  );
} 
    
