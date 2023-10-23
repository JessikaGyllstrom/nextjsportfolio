import React from 'react'
import { urlFor } from '../../lib/sanity';
import { getArt } from '../../lib/sanity.utils';


export default async function Art() {
  const art = await getArt();

  return (
    <div className="mx-auto">
      <h2 className="p-4 text-center">Gallery </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {art.map((art, id) =>
          <div key={id} className="flex justify-center text-6xl border-3 border-gray-300 rounded-sm p-2 bg-neutral-800">
            <img className="w-full rounded-sm  hover:scale-105 transition duration-500 cursor-pointer object-cover" src={urlFor(art.image.asset._ref).url()} />
          </div>
          )}
      </div>
    </div>
  )
}

