import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanity'
import { Courses } from '../typings.d'

// const query = groq`*[_type == 'education']`

const query = groq`*[_type == 'courses' && popularity>= 0] | order(popularity){
  title, description, popularity
}`

type Data = {
    courses: Courses[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const courses: Courses[] = await sanityClient.fetch(query)
    console.log("getting courses")
    res.status(200).json({ courses })
}
