import React from 'react'
import { AnimateComponent } from '../../components/AnimateComponent';
import { urlFor } from '../../lib/sanity';
import { getArt } from '../../lib/sanity.utils';
import AnimateR from '../../components/AnimateL';
import AnimateTxt from '../../components/AnimateTxt';
import Fieldset from '../../components/Fieldset';

export default async function Art() {
  const art = await getArt();

  return (
    <AnimateComponent>
      <div className="mx-auto flex justify-center w-screen md:mb-24">
        <div className='flex flex-col'>
          <Fieldset sectionTitle={"Gallery"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {art.map((art, id) =>
              <div key={id} className="flex justify-center text-6xl border-3 border-gray-300 rounded-sm p-2 bg-neutral-800 object-cover">
                <AnimateR>
                  <img key={id} className="w-full h-full rounded-sm  hover:scale-105 transition duration-500 cursor-pointer object-cover" src={urlFor(art.image.asset._ref).url()} />
                </AnimateR>
              </div>
            )}    
          </div>
        </div>
      </div>
    </AnimateComponent>
  )
}

