import { urlFor } from "../lib/sanity";
import AnimateR from "./AnimateR";

export default function Skills({ skills }) {
  return (
    <div
      id="skills"
      className="flex justify-center w-screen items-center md:my-12"
    >
      <AnimateR>
        <div className="flex justify-center w-screen">
          <div className="flex flex-col w-full md:flex-row items-center justify-center text-slate-800 dark:text-white">
            {skills.map((skill, id) => (
              <div
                key={id}
                className="h-full flex flex-col w-[70%] my-2 lg:w-1/5 mx-1 py2 lg:mx-4 border border-gray-700 rounded-md  dark:bg-gray-800 bg-opacity-20 hover:scale-[1.02] transition ease-in-out delay-850 "
              >
                <img
                  className="h-28 first:rounded-t-md mb-2 md:h-40"
                  src={urlFor(`${skill.skillsImage.asset._ref}`).url()}
                  alt={skill.title}
                />
                <div className="flex flex-col items-center p-3 md:items-start">
                  <h3 className="text-xs font-bold">{skill.title}</h3>
                  {skill.description.map((skill, idx) => (
                    <p key={idx}>{skill}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateR>
    </div>
  );
}
