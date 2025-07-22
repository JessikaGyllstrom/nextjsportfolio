import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { type } from "os";
import { sanityClient } from "../../lib/sanity";
import { Illustrations } from "../../typings.d";

const query = groq`  *[_type == "illustrations" && defined(image.asset)]{
    image {
      asset {
        _ref
      }
    }
  }
`;

type Data = {
  illustrations: Illustrations[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const illustrations: Illustrations[] = await sanityClient.fetch(query);
  console.log("getting illustrations");
  res.status(200).json({ illustrations });
}
