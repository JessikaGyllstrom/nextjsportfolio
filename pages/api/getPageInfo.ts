import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { type } from 'os'
import { sanityClient } from '../../lib/sanity'
import { PageInfo } from '../../typings.d'

const query = groq`*[_type == 'pageinfo']`

type Data = {
    pageInfo: PageInfo[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const pageInfo: PageInfo[] = await sanityClient.fetch(query)
    console.log("getting pageinfo")
    res.status(200).json({ pageInfo })
}
