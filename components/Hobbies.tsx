"use client"; // This is a client component 👈🏽

import { LiaMotorcycleSolid } from "react-icons/lia";
import { MdTravelExplore } from "react-icons/md";
import { urlFor } from "../lib/sanity";
import { getHobbies } from "../lib/sanity.utils";
import  Fieldset  from "./Fieldset";

import { Hobbies } from "../typings.d";
// type Props = {
//   hobbies: Hobbies[];
// }
export default function Hobbies ({ hobbies }) {

  console.log(hobbies)


  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Fieldset sectionTitle={"Hobbies"} />
      <div className="flex w-[80%] flex-col justify-center items-center  dark:bg-slate-800/40">
        <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-6">
          {hobbies.map((hobby, id) =>
            <div className="h-32 w-32">
              <img key={id} className="w-[100%] h-[100%]" src={urlFor(hobby.hobbieImg.asset._ref).url()} />
              <p className="text-gray-50 text-center p-1">{hobby.title}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
