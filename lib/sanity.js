import { 
    createClient
} from 'next-sanity';

const config = {
    projectId: "5ivm84xc",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true
}

export const sanityClient = createClient(config)
