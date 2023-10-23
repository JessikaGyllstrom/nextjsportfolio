import { 
    createClient
} from 'next-sanity';

import imageUrlBuilder from '@sanity/image-url'

const config = {
    dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET || "production", 
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-10-21",
    // token: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY,
    // useCdn: true, 
    useCdn: process.env.NODE_ENV === "production",
    // ignoreBrowserTokenWarning: true
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => imageUrlBuilder(config).image(source)

export const getUrlFromId = (ref: any) => {
  // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
  // We don't need the first part, unless we're using the same function for files and images
  const [_file, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`
}
