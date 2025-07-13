import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";
import { Storyboard, Design } from "../../typings.d";

const query = groq`*[_type == 'storyboard']`;

type Data = {
  storyboards: Storyboard[];
  designs: Design[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { designs, storyboards } = await sanityClient.fetch(query);
  res.status(200).json({ storyboards, designs });
}
