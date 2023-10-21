import React from 'react'
import { loadData} from '../lib/loadData'
import { Webbdev } from './api/typings.d';
import Layouts from '../components/Layouts';
import Projects from '../components/Projects';
import Fieldset from '../components/Fieldset';
import ReactPlayer from 'react-player';
type Props = {
  webbdev: Webbdev[];
}
export default function Webbdev ({ webbdev }: Props) {

console.log(webbdev)

  return (
    <div className="flex justify-center min-h-[90vh]">

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
    
export async function getStaticProps() {
  const webbdev = await loadData(`*[_type == 'webbdev']`)
  return { props: { webbdev } }
}