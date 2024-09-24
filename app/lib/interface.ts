import type { Image } from "sanity"; // If not available directly, you might need to define or import the correct type.
import type { PortableTextBlock } from "@portabletext/types"; // Import for rich text content type.

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: Image; 
}

export interface card {
  imageurl: string; 
  title: string;
  shortdesc: string;
  slug: string;
}

export interface Author {
  name: string;
  image: Image;
}

export interface BlogSection {
  _type: 'section';
  title: string;
  image?: Image; // Optional image for the section
  content: PortableTextBlock[]; // Rich text content
}

export type BlogContent = BlogSection | PortableTextBlock;

export interface fullblog {
  currentSlug: string;
  title: string;
  content: BlogContent[]; // Use the new BlogContent type
  titleImage: Image;
  publishedAt: Date;
  author: { name: string; image: Image | null };
}