import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { type } from 'os'
import { sanityClient } from '../../lib/sanity'
import { Skill } from '../../typings.d'

const query = groq`*[_type == 'skill']`

type Data = {
    skills: Skill[]
}
export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
    )
    {
    const skills: Skill[] = await sanityClient.fetch(query)
    console.log("getting skills")
    res.status(200).json({ skills })
}
