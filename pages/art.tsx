import React from 'react'
import { urlFor, sanityClient } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

const artQuery = `*[_type == "art"] {
  name, 
  title,
  slug,
  mainImage 
}`

export default function Art( {art} ) {


  return (
    <div><h1>art</h1>
           { art.map((painting) => (
        <img src={urlFor(painting.mainImage).url()}></img>
    
    
      ))}

    </div>
 
  )
}

export async function getStaticProps() {
  const art = await sanityClient.fetch(artQuery)
  return { props: { art }}
}