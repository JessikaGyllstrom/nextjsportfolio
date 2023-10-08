import { urlFor } from '../lib/sanity';
import { loadData } from '../lib/loadData';
import Image from './Image';
import Box from './box';
import { Skill } from '../pages/typings.d';
import { XaxisAnimate } from './Xanimate';
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  skills: Skill[];
}

export default function Skills({ skills }: Props) {

  return (
    <div id="h-screen skills bg-cyan-500">
      <fieldset className="border-t border-gray-700 mb-2">
            <legend className="mx-auto px-4 text-white text-lg italic">Skills</legend>
      </fieldset>
      <div className='h-screen flex justify-center'>
          <div className='flex justify-center items-center'>

            {skills.map((skill, id) => 

              <div key={id} className='w-1/4 h-[55%] flex flex-col m-3 border border-gray-700 rounded-sm bg-gray-800 bg-opacity-20 hover:scale-[1.02] transition ease-in-out delay-850'>

                <img className="h-1/2 rounded-t-sm" src={urlFor(`${skill.skillsImage.asset._ref}`).url()} />

                  <div className='flex flex-col content-center py-3 px-3'>
                                                              <XaxisAnimate>

                  <h3 className='text-xs font-bold' > {skill.title}</h3>
                                                  </XaxisAnimate>

                    {skill.description.map((skill, id) => 
                      <XaxisAnimate>
                        
                        <p key={id} className=''>{skill}</p>
                      </XaxisAnimate>
                    )}
                </div>                  
              </div>
            )} 
            </div>
          </div>
    </div>
  )
}
