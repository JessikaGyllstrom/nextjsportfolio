import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { type } from "os";
import { sanityClient } from "../../lib/sanity";
import { Art } from "../../typings.d";

const query = groq`*[_type == 'art'] {
  image {
    asset {
        _ref
    }
  }
}`;

type Data = {
  art: Art[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const art: Art[] = await sanityClient.fetch(query);
  res.status(200).json({ art });
}
