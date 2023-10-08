import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { type } from 'os'
import { sanityClient } from '../../lib/sanity'
import { Skill } from '../typings.d'
import { Education } from '../typings.d'

// const query = groq`*[_type == 'education']`

const query = groq`*[_type == 'education' && popularity>= 0] | order(popularity){
  title, description, popularity
}`

type Data = {
    education: Education[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const education: Education[] = await sanityClient.fetch(query)
    console.log("getting education")
    res.status(200).json({ education })
}
