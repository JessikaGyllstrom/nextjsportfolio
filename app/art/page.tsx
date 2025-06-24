import React from "react";
import { AnimateComponent } from "../../components/AnimateComponent";
import { urlFor } from "../../lib/sanity";
import { getArt } from "../../lib/sanity.utils";
import { getAiArt } from "../../lib/sanity.utils";
import AnimateR from "../../components/AnimateL";
import Fieldset from "../../components/Fieldset";

export default async function Art() {
  const art = await getArt();
  const aiart = await getAiArt();

  return (
    <AnimateComponent>
      <div className="mx-auto flex justify-center w-screen md:mb-24">
        <div className="flex flex-col mt-8">
          <Fieldset sectionTitle={"Digital Paintings"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {art.map((art, id) => (
              <div
                key={id}
                className="flex justify-center text-6xl border-3 border-gray-300 rounded-sm p-2 bg-neutral-800 object-cover"
              >
                <AnimateR>
                  <img
                    key={id}
                    alt={art.title}
                    className="w-full h-full rounded-sm  hover:scale-105 transition duration-500 cursor-pointer object-cover"
                    src={urlFor(art.image.asset._ref).url()}
                  />
                </AnimateR>
              </div>
            ))}
          </div>
          <Fieldset sectionTitle={"Ai Art"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {aiart.map((aiart, id) => (
              <div
                key={id}
                className="flex justify-center text-6xl border-3 border-gray-300 rounded-sm p-2 bg-neutral-800 object-cover"
              >
                <AnimateR>
                  <img
                    key={id}
                    alt={aiart.title}
                    className="w-full h-full rounded-sm  hover:scale-105 transition duration-500 cursor-pointer object-cover"
                    src={urlFor(aiart.image.asset._ref).url()}
                  />
                </AnimateR>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimateComponent>
  );
}
