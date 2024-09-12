import { fullblog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 10;


async function getData(slug: string) {
    const query = `
        *[_type == "blog" && slug.current == '${slug}']{
            "currentSlug" : slug.current,
            title,
            content,
            titleImage
        }[0]`;
    const data = await client.fetch(query)
    return data;
}
async function BlogPage({ params }: { params: { slug: string } }) {
    const data: fullblog = await getData(params.slug)
    console.log(data)
    console.log(urlFor(data.titleImage).url())
    return (
        <div className="mt-8">
            <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                    {data.title}
                </span>
            </h1>
            <div className="flex justify-center">
                <Image
                    src={urlFor(data.titleImage).url()}
                    width={1600}
                    height={1600}
                    alt="Title Image"
                    priority
                    className="w-full rounded-sm mt-8 border"
                />
            </div>
            <div className="mt-16 prose-blue prose-lg">
                <PortableText value={data.content} />
            </div>
        </div>
    )
}

export default BlogPage