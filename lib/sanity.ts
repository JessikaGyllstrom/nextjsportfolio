import { 
    createClient
} from 'next-sanity';

import imageUrlBuilder from '@sanity/image-url'

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET || "production", 
    apiVersion: "2021-10-21",
    // token: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY,
    //useCdn: true, 
    useCdn: process.env.NODE_ENV === "production",
    ignoreBrowserTokenWarning: true
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => imageUrlBuilder(config).image(source)
