import { urlFor } from '../lib/sanity';
import { Skill } from '../pages/api/typings.d';
import Fieldset from './Fieldset';
import { XaxisAnimate } from './Xanimate';

type Props = {
  skills: Skill[];
}

export default function Skills({ skills }: Props) {

  return (
    <div id="skills" className="h-screen">
      <XaxisAnimate>
        <div className='h-screen flex justify-center'>
          <div className='flex justify-center items-center'>
            {skills.map((skill, id) => 
              <div key={id} className='w-1/3 h-[55%] flex flex-col m-3 border border-gray-700 rounded-sm bg-gray-800 bg-opacity-20 hover:scale-[1.02] transition ease-in-out delay-850'>
                <img className="h-1/2 rounded-t-sm" src={urlFor(`${skill.skillsImage.asset._ref}`).url()} alt={skill.skillsImage.asset._id} />
                  <div className='flex flex-col content-center py-3 px-3'>
                    <h3 className='text-xs font-bold'>{skill.title}</h3>
                    {skill.description.map((skill, id) => 
                      <p key={id} className=''>{skill}</p>
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
 