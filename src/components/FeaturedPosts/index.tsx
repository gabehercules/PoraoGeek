import Image from "next/image";
import Link from "next/link";

async function getFeaturedPosts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?filters[featured_post][$eq]=true&sort[0]=createdAt:desc&pagination[pageSize]=3&populate=*`,
      {
        cache: "no-store",
      }
    );

    return res.json();
  } catch (error) {
    console.log("Error fetching posts", error);
    return <p>Erro ao buscar os posts</p>;
  }
}

export default async function FeaturedPosts() {
  const { data } = await getFeaturedPosts();

  const featuredPosts = data;

  return (
    <ul className="grid grid-cols-3 gap-4">
      {featuredPosts.map((post: any) => (
        <li
          className="flex flex-col gap-6 w-full bg-dark-secondary border border-dark-border rounded-md overflow-hidden"
          key={post.id}
        >
          <Link
            href={`/noticias/${post.attributes.post_slug}`}
            className="flex flex-col flex-1"
          >
            <div className="relative flex flex-1 flex-col gap-2">
              <Image
                width={450}
                height={200}
                src={post.attributes.featured_media.data.attributes.url}
                alt={post.attributes.post_title}
                className="w-full h-full max-h-64 object-cover"
              />
              <div className="absolute flex flex-col flex-1 gap-2 justify-end p-3 w-full h-full bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent hover:bg-gradient-to-t hover:from-black/80 hover:to-transparent transition-all duration-300">
                <h1 className="font-bold shadow-black drop-shadow-lg">
                  {post.attributes.post_title}
                </h1>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
