import { 
    createClient
} from 'next-sanity';

import imageUrlBuilder from '@sanity/image-url'

const config = {
    projectId: "5ivm84xc",
    dataset: "production",
    apiVersion: "2021-10-21",
    token: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY,
    useCdn: true, 
    ignoreBrowserTokenWarning: true
}

export const sanityClient = createClient(config)

export const urlFor = (source) => imageUrlBuilder(config).image(source)
