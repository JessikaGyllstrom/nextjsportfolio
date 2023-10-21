import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { getUrlFromId } from '../lib/sanity';

export default function Projects({ webbdev }) {

  const projects = webbdev.filter(project => project.title === 'Project');

  console.log(projects)

  return (
    <div className='flex lg:my-6'>
          <div className="flex flex-col justify-center p-4 py-2">

        {projects.map((project, id) =>
          <div key={id} className="flex w-full justify-center items-center">
            <div className='flex card w-[75%] my-8'>

              <div>
            <ReactPlayer
                  // url={getUrlFromId(project.video.asset._ref)}
                  url="https://cdn.sanity.io/files/n28frzwy/production/f7e8a9c5a2bf9cb91f59d38bcf0c2adc157556fc.mp4"
                  controls
                  muted={true}
                  playing={false}
                />  
            </div>

          <div className='flex flex-col justify-center m-5'>
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

