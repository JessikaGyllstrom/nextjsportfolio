import React from 'react'
import { loadData } from '../lib/loadData';
import { urlFor } from '../lib/sanity';
import { Art } from './api/typings.d';

// type Props = {
//   art: Art[];
// }
export default function Art({ art }) {
  
  return (
    <div className="mx-auto px-4 m-5">
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

export async function getStaticProps() {
  const art = await loadData(`*[_type == 'art']`)

  return { props: {  art }}
}
