import React from 'react'
import { loadData } from '../lib/loadData';
import { urlFor, sanityClient } from '../lib/sanity';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { getBlurDataURL } from '@uploadcare/nextjs-loader';
import { Art } from './typings.d';

type Props = {
  art: Art[];
}
export default function Art ({ art }: Props) {
console.log(art)
  
  return (
                <div className="mx-auto px-4 m-5">
 <h2 className="text-3xl p-4 rounded-sm text-white text-center">GALLERY  </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

        {art.map((art, id) =>
                    <div className="flex justify-center text-6xl border-3 border-gray-300 rounded-sm p-2 bg-neutral-800">

            <img className="w-full rounded-sm  hover:scale-105 transition duration-500 cursor-pointer object-cover" src={urlFor(art.image.asset._ref).url()} />
                  </div>

          )}

        
      </div>
  
      
    </div>
  )
}

const imgLoader = ({ src, width }) => {
  return `${src}?w=${width}` 
}
export async function getStaticProps() {
  const art = await loadData(`*[_type == 'art']`)
  console.log(art)

  return { props: {  art }}
}
//   return (
//     <div classname="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
//       <div classname="text-xl mb-5 font-semibold">Create a dynamic image gallery using Tailwind CSS in React - <a href="https://www.cluemediator.com" target="_blank" classname="text-blue-500 hover:underline" rel="noopener">Clue Mediator</a></div>
//       <div classname="-m-1 flex flex-wrap md:-m-2">
//         {images.map((image, index) => (
//           <div key="{index}" classname="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
//             <img classname="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src="{image}">
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//       {gallery.map((post, id) => {
//         return <div key={id} >
//           <div className="grid gap-y-4 sm:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:gap-x-8">
//             {post.image.map((p, index) => {
//                 return (
//                 <Image 
//                   loader={imgLoader}
//                   src={p.asset.url}
//                   key={index}
//                   className="border-[6px] object-center w-full h-full drop-shadow-2xl hover:scale-[1.009] ease-in transition-duration[150ms] " 
//                   alt="painting" 
//                   height={400}
//                   width={400}
//                 />
//                )})}
//               </div>
//           </div>
//         })}