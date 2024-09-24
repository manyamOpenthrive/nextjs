import { BlogSection } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { fullblog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";

export const revalidate = 30;

async function getData(slug: string) {
    const query = `
        *[_type == "blog" && slug.current == '${slug}']{
            "currentSlug": slug.current,
            title,
            content,
            titleImage,
            publishedAt,
            "author": author->{name, image}
        }[0]`;
    const data = await client.fetch(query);
    return data;
}

async function BlogPage({ params }: { params: { slug: string } }) {
    const post: fullblog = await getData(params.slug);

    if (!post) return <div>Loading...</div>;

    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="w-full">
            <div className="relative w-full overflow-hidden">
                <Image
                    src={urlFor(post.titleImage).url()}
                    width={1200}
                    height={700}
                    alt="Title Image"
                    priority
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 z-10 p-4 md:p-8 text-white pb-16 md:pb-32">
                    <p className="text-sm md:text-lg">Website</p>
                    <h1 className="text-2xl md:text-3xl lg:text-8xl font-bold">{post.title}</h1>
                    <div className="flex items-center mt-2 text-sm md:text-lg">
                        {post.author && post.author.image && (
                            <Image
                                src={urlFor(post.author.image).url()}
                                width={40}
                                height={40}
                                alt={post.author.name}
                                className="rounded-full mr-3"
                            />
                        )}
                        <p>{post.author?.name} • {formattedDate}</p>
                    </div>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16">
                <aside className="lg:col-span-1 mb-8 lg:mb-0">
                    <div className="top-24">
                        <h2 className="text-lg font-bold mb-2">Table Of Contents</h2>
                        <ul className="space-y-2">
                            {post.content
                                .filter((item): item is BlogSection => item._type === 'section')
                                .map((section, index) => (
                                    <li key={index}>
                                        <a href={`#section-${index}`} className="text-black hover:text-blue-600">
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </aside>

                <section className="lg:col-span-4 mb-5">
                    <div className="prose max-w-none prose-lg">
                        {post.content.map((item, index) => {
                            if (item._type === 'section') {
                                return (
                                    <div key={index} id={`section-${index}`} className="mb-10">
                                        {item.image && (
                                            <Image
                                                src={urlFor(item.image).url()}
                                                width={800}
                                                height={400}
                                                alt={item.title}
                                                className="w-full h-auto object-cover mb-4"
                                            />
                                        )}
                                        <h2 className="text-2xl font-bold">{item.title}</h2>
                                        <PortableText value={item.content} />
                                    </div>
                                );
                            } else {
                                return <PortableText key={index} value={item} />;
                            }
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default BlogPage;
