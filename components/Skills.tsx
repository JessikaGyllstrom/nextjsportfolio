import { urlFor } from '../lib/sanity';
// import { Skill } from '../pages/api/typings.d';
import { XaxisAnimate } from './Xanimate';

// type Props = {
//   skills: Skill[];
// }

export default function Skills({ skills }) {

  return (
    <div id="skills" className="flex justify-center w-screen">
      <XaxisAnimate>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center text-slate-800 dark:text-white">
          {skills.map((skill, id) => 
              <div key={id} className='h-full p-3 md:w-1/2 flex flex-col m-3 border border-gray-700 rounded-sm  bg-gray-800 bg-opacity-20 hover:scale-[1.02] transition ease-in-out delay-850'>
                <img className="h-28 first:rounded-t-sm mb-2" src={urlFor(`${skill.skillsImage.asset._ref}`).url()} alt={skill.skillsImage.asset._id} />
                  <div className='flex flex-col items-center  md:items-start'>
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
 