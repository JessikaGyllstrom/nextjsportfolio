import React from 'react'
import { getUrlFromId } from '../lib/sanity';
import Player from './Player';
import AnimationR from './AnimateL';
import { AnimateComponent } from './AnimateComponent';

export default function Projects({ webbdev }) {

  const projects = webbdev.filter(project => project.title === 'Project');

  return (
  <AnimateComponent>
    <div className='w-screen justify-center flex mb-8'>
      <div className="w-screen flex flex-col items-center justify-center p-2 py-2  text-gray-950 dark:text-gray-100">
        {projects.map((project, id) =>
          <AnimationR key={id}>
            <div key={id} className="flex w-screen justify-center items-center">
              <div className='mb-5 border border-gray-700 dark:border-none dark:bg-slate-800/40 flex md:w-[65%] flex-col md:flex-row hover:scale-105 transition duration-500 cursor-pointer'>
                <div className="md:w-[70%]">
                  <Player
                    url={getUrlFromId(project.video.asset._ref)}
                  />
                </div>
                <div className='flex md:w-[30%] flex-col justify-center my-3 md:ml-3 px-2'>
                  <h5 className='mb-2 font-normal text-xs md:text-sm text-center'>{project.name}</h5>
                  {project.description.map((description, id) =>   
                    <p key={id} className='font-thin text-center'>- {description}</p>
                  )}
                </div>
              </div>
            </div>
          </AnimationR>
        )}
      </div>    
    </div>
  </AnimateComponent>
  )
}