import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity"; // Importing the Image type from Sanity

export const client = createClient({
  apiVersion: "2022-03-07",
  dataset: "production",
  projectId: "9gmkgxkq",
  useCdn: false,
  perspective: 'published',
  stega: {
    studioUrl: "http://localhost:3333/",
  },
});

const builder = imageUrlBuilder(client);

// Specify the type for the source parameter
export function urlFor(source: Image) {
  return builder.image(source);
}
