import type { Image } from "sanity"; // If not available directly, you might need to define or import the correct type.
import type { PortableTextBlock } from "@portabletext/types"; // Import for rich text content type.

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: Image; // Assuming titleImage is a Sanity image object.
}

export interface card {
  imageurl: Image; // Assuming imageurl is a Sanity image object.
  title: string;
  shortdesc: string;
  slug: string;
}

export interface fullblog {
  currentSlug: string;
  title: string;
  content: PortableTextBlock[]; // Assuming content is an array of Portable Text Blocks.
  titleImage: Image; // Assuming titleImage is a Sanity image object.
}
