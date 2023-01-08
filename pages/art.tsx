import React from 'react'
import { loadData } from '../lib/loadData';
import { urlFor, sanityClient } from '../lib/sanity';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { getBlurDataURL } from '@uploadcare/nextjs-loader';


function Art( { gallery } ) { 
console.log(gallery)
  
  return (
    <div className="max-w-2xl mx-8 py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {gallery.map((post, id) => {
        return <div key={id} >
          <div className="grid gap-y-4 sm:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:gap-x-8">
            {post.image.map((p, index) => {
                return (
                <Image 
                  loader={imgLoader}
                  src={p.asset.url}
                  key={index}
                  className="border-[6px] object-center w-full h-full drop-shadow-2xl hover:scale-[1.009] ease-in transition-duration[150ms] " 
                  alt="painting" 
                  height={400}
                  width={400}
                />
               )})}
              </div>
          </div>
        })}
  </div>
  )
}
export default Art;

const imgLoader = ({ src, width }) => {
  return `${src}?w=${width}` 
}
export async function getStaticProps() {
  const gallery = await loadData(`*[_type == 'artgallery']{
    image [] {
      asset-> {
        ...,
        id,
        url,
        metadata
      }
    }
   }`
  )
  return { props: {  gallery }}
}