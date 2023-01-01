import React from 'react'
import { urlFor, sanityClient } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
const builder = imageUrlBuilder(sanityClient)

export async function getStaticProps() {
  const gallery = await sanityClient.fetch(`*[_type == 'artgallery']{
    image, 
    "imageUrl": image.asset->url
      
    }`
  )

  return { props: {  gallery }}
}
function Art( { gallery } ) {
 
  return (
<div className="w-full px-5 py-2 mx-auto lg:pt-24 lg:px-32 bg-neutral-800/30">
<div className="rounded sm:columns-2 md:columns-3 xl:columns-4 gap-2 w-11/12 box-border">

            {gallery.map((post, id) => {
                return <div key={id} >        
                    {post.image.map((p, index) => {
                        return (<div key={index}>
  <div>
                                <img key={index} src={urlFor(p).url()} alt="painting"  className='rounded-lg'/>


   </div>
</div>
                            )})}
                </div>
            })}
          </div>
          </div>
 )
}

export default Art;