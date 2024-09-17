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
    const data = await client.fetch(query);
    return data;
}

async function BlogPage({ params }: { params: { slug: string } }) {
    const data: fullblog = await getData(params.slug);

    return (
        <div className="w-full">
            {/* Full-width Title Image */}
            <div className="relative w-full overflow-hidden">
                <Image
                    src={urlFor(data.titleImage).url()}
                    width={1200}
                    height={700}
                    alt="Title Image"
                    priority
                    className="w-full h-auto object-cover"
                />
                {/* Text Overlay - Positioned at bottom left */}
                <div className="absolute bottom-0 z-10 p-4 md:p-8 text-white pb-16 md:pb-32">
                    <p className="text-sm md:text-lg">Website</p>
                    <h1 className="text-2xl md:text-3xl lg:text-8xl font-bold">
                        {data.title}
                    </h1>
                    <p className="text-sm md:text-lg mt-2">Author • Oct 25, 2024</p>
                </div>
            </div>

            {/* Responsive Layout for Table of Content and Blog Content */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16">
                {/* Table of Contents - Sidebar on large screens */}
                <aside className="lg:col-span-1 mb-8 lg:mb-0">
                    <div className="top-24">
                        <h2 className="text-lg font-bold mb-2">Table Of Content</h2>
                        <ul className="space-y-2">
                            <li>Sales meetings pinpoint which to contact</li>
                            <li>Sales meetings which to</li>
                            <li>Meetings which to contact</li>
                            <li>Sales meetings which to</li>
                            <li>Meetings which to contact</li>
                        </ul>
                    </div>
                </aside>

                {/* Main Blog Content */}
                <section className="lg:col-span-4">
                    <div className="prose max-w-none prose-lg">
                        <PortableText value={data.content} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default BlogPage;
