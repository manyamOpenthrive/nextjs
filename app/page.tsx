import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Card from "./components/Card";

export const revalidate = 10;
async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
      title,
          smallDescription,
          "currentSlug": slug.current,
          titleImage,
  }`;
  const data = await client.fetch(query)
  return data;
}
export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
      {data.map((post, index) => {
        const imageUrl = urlFor(post.titleImage)?.url() || "/fallback-image.jpg";
        return <Card key={index} imageurl={imageUrl} title={post.title} shortdesc={post.smallDescription} slug={post.currentSlug} />

      })}
    </div>
  );
}
