import { sanityClient } from '../lib/sanity';

export async function loadData(query) {
    // Call an external API endpoint to get data
    const data = await sanityClient.fetch(query)  
    
    console.log(data)
    return data
}
