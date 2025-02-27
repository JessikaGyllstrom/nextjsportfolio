import React from "react";
import { AnimateComponent } from "../../components/AnimateComponent";
import { urlFor } from "../../lib/sanity";
import { getAbout, getArt, getHobbies } from "../../lib/sanity.utils";
import AnimateR from "../../components/AnimateL";
import AnimateTxt from "../../components/AnimateTxt";
import { PortableText } from "@portabletext/react";
import Fieldset from "../../components/Fieldset";
import Slider from "../../components/Slider";

export default async function About() {
  const about = await getAbout();
  const hobbies = await getHobbies();
  return (
    <div className="flex justify-center w-screen h-full text-gray-900  dark:text-gray-50">
      <div className="flex flex-col h-full mt-5">
        <Fieldset sectionTitle={"About"} />
        <div className="w-full flex justify-center">
          <div className="w-[96%] md:w-[85%] dark:bg-slate-800/40">
            <AnimateR>
              {about.map((data, id) => (
                <div
                  key={id}
                  className="flex flex-col w-full items-center md:flex-row md:p-4"
                >
                  <div className="flex md:w-[70%] flex-col line-clamp-6font-thin p-4 mt-6 mb-6 md:mt-0 md:mb-0">
                    <PortableText value={data.bio} />
                  </div>
                  <div className="w-[80%] md:w-[30%] mb-5 h-full object-cover md:mb-0">
                    <img
                      alt="profile image"
                      className="rounded-sm  hover:scale-105 transition duration-500 cursor-pointer"
                      src={urlFor(data.profileImg.asset._ref).url()}
                    />
                  </div>
                </div>
              ))}
            </AnimateR>
          </div>
        </div>
        <div className="mt-6 mb-6">
          <Fieldset sectionTitle={"Hobbies"} />
          <Slider data={hobbies} />
        </div>
      </div>
    </div>
  );
}
