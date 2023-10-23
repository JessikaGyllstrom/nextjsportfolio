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
    <div className="mx-auto">

        <div className='flex flex-col items-center'>
                    <Fieldset sectionTitle={"Projects"} />
        <Projects webbdev={webbdev} />
                    <Fieldset sectionTitle={"Layouts"} />

        {/* <h2 className="p-4 lg:text-2xl">Layouts</h2> */}

        <Layouts webbdev={ webbdev }/>

          </div>

            
            
          </div>

      


      );
} 
    
