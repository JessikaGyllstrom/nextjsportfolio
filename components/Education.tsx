import { Education } from '../typings.d';
import { AnimateComponent } from './AnimateComponent';
import  Animation   from './AnimateL';

type Props = {
    education: Education[];
}

export default function Educations({ education }: Props) {
    
  return (
    <div id="education">
      <Animation>
      {education.map((skill, idx) =>
        <div key={idx} className="flex flex-col border p-3 my-2 border-gray-700 rounded-sm  bg-gray-800 bg-opacity-20 dark:text-white">
            <h5 className='text-xs font-bold'> {skill.title}</h5>
            <h5 className='text-xs'> {skill.description}</h5>
        </div>
        )}
        </Animation>
    </div>
  )
}