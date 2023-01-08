import { urlFor, sanityClient } from '../lib/sanity';

export async function loadData(query) {
    // Call an external API endpoint to get posts
    const data = await sanityClient.fetch(query)  
    return data
}
