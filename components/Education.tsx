import { Education } from '../typings.d';

type Props = {
    education: Education[];
}

export default function Educations({ education }: Props) {
    
  return (
    <div id="education">
      {education.map((skill, idx) =>
        <div key={idx} className="flex flex-col border p-3 my-2 border-gray-700 rounded-sm bg-gray-800 bg-opacity-20 dark:text-white">
            <h5 className='text-xs font-bold'> {skill.title}</h5>
            <h5 className='text-xs'> {skill.description}</h5>
        </div>
      )}
    </div>
  )
}