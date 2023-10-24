import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { getUrlFromId } from '../lib/sanity';
import Player from './Player';

export default function Projects({ webbdev }) {

  const projects = webbdev.filter(project => project.title === 'Project');

  console.log(projects)

 return (
    <div className='flex lg:my-6'>
      <div className="flex flex-col justify-center p-4 py-2">
        {projects.map((project, id) =>
          <div key={id} className="flex w-full justify-center items-center">
            <div className='flex card md:w-[55%] my-8 flex-col md:flex-row'>
              <div className="">
                <Player
                  url={getUrlFromId(project.video.asset._ref)}
                />
              </div>
              <div className='flex flex-col justify-center m-5 md:w-[60%]'>
                <h5 className='mb-2 font-medium font-mono'>{project.name}</h5>
                <p className='text-white'>- {project.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>    
    </div>
  )
}