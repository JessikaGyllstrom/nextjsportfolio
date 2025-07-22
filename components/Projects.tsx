import React from "react";
import { getUrlFromId } from "../lib/sanity";
import Player from "./Player";
import AnimationR from "./AnimateL";
import { AnimateComponent } from "./AnimateComponent";

export default function Projects({ project }) {
  const projects = project.filter((project) => project.title === "Project");

  return (
    <AnimateComponent>
      <div className="w-screen justify-center flex mb-8">
        <div className="w-screen flex flex-col items-center justify-center p-2 py-2 dark:text-gray-50">
          {projects.map((project, id) => (
            <AnimationR key={id}>
              <div
                key={id}
                className="flex w-screen justify-center items-center"
              >
                <div className="mb-5 border border-gray-600/80 dark:bg-slate-800/40 flex md:w-[65%] flex-col hover:scale-105 transition duration-500 cursor-pointer">
                  {/* Video Section */}
                  <div className="w-full">
                    <Player url={getUrlFromId(project.video.asset._ref)} />
                  </div>
                  {/* Text Section */}
                  <div className="flex w-full flex-col justify-center my-4 px-46 py-4 ">
                    <h5 className="mb-2 font-normal text-xs md:text-sm text-center">
                      {project.name}
                    </h5>
                    {project.description.map((description, id) => (
                      <p key={id} className="font-thin text-center">
                        - {description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </AnimationR>
          ))}
        </div>
      </div>
    </AnimateComponent>
  );
}
