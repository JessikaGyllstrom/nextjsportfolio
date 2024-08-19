import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanity'
import { AiArt } from '../../typings.d'

const query = groq`*[_type == 'aiart'] {
  image {
    asset {
        _ref
    }
  }
}`

type Data = {
    aiart: AiArt[]
}
export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
    )
    {
    const aiart: AiArt[] = await sanityClient.fetch(query)
    console.log("getting aiart")
    res.status(200).json({ aiart })
}
