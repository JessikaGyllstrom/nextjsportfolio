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
          <div className="flex flex-col w-[50%] lg:flex-row items-center justify-center text-slate-800 dark:text-white">
            {skills.map((skill, id) => (
              <div
                key={skill}
                className="h-full w-full md:w-1/5 flex flex-col mx-3 m-3 border border-gray-700 rounded-md  dark:bg-gray-800 bg-opacity-20 hover:scale-[1.02] transition ease-in-out delay-850 md:my-0"
              >
                <img
                  className="h-28 first:rounded-t-md mb-2 md:h-40"
                  src={urlFor(`${skill.skillsImage.asset._ref}`).url()}
                  alt={skill.skillsImage.asset._id}
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
