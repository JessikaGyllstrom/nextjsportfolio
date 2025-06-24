import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-10-21",
  // token: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY,
  // useCdn: true,
  useCdn: process.env.NODE_ENV === "production",
  // ignoreBrowserTokenWarning: true
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => imageUrlBuilder(config).image(source);

export function getUrlFromId(ref: string | undefined): string {
  if (!ref) {
    console.error("Invalid ref passed to getUrlFromId:", ref);
    return ""; // Return an empty string or a fallback URL
  }

  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
}
