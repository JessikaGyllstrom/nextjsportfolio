import { urlFor } from '../lib/sanity';
// import { Skill } from '../pages/api/typings.d';
import { XaxisAnimate } from './Xanimate';

// type Props = {
//   skills: Skill[];
// }

export default function Skills({ skills }) {

  return (
    <div id="skills" className="flex justify-center w-screen items-center md:my-12">
      <XaxisAnimate>
        <div className="flex justify-center w-screen">
          <div className="flex flex-col w-[70%] lg:flex-row items-center justify-center text-slate-800 dark:text-white">
          {skills.map((skill, id) => 
              <div key={id} className='h-full w-full md:w-1/4 flex flex-col mx-3 m-3 border border-gray-700 rounded-sm  bg-gray-800 bg-opacity-20 hover:scale-[1.02] transition ease-in-out delay-850 md:m-0'>
                <img className="h-28 first:rounded-t-sm mb-2 md:h-40" src={urlFor(`${skill.skillsImage.asset._ref}`).url()} alt={skill.skillsImage.asset._id} />
                  <div className='flex flex-col items-center p-3 md:items-start'>
                    <h3 className='text-xs font-bold'>{skill.title}</h3>
                    {skill.description.map((skill, id) => 
                      <p key={id}>{skill}</p>
                    )}
                </div>                  
              </div>
            )} 
          </div>
        </div>
      </XaxisAnimate>
    </div>
  )
}
 