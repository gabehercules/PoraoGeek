import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../../../../utils/functions";

async function fetchPostsByCategory(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories?filters[slug][$eq]=${slug}&populate[posts][populate][0]=featured_media`,
      {
        cache: "no-store",
      }
    );

    // tentando tratar a resposta, se nao vier OK retorna um array vazio
    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    console.log("Error fetching posts", error);
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await fetchPostsByCategory(params.slug);

  const posts = data[0].attributes.posts.data;

  // console.log("LOG DA CATEGORY", data);
  // console.log('Conteúdo do objeto "posts":', posts);

  return (
    <div className="p-10">
      <ul className="grid grid-cols-4 gap-6">
        {posts?.map((post: any) => (
          <li key={post.id} className="overflow-hidden ">
            <Link
              href={`/noticias/${post.attributes.post_slug}`}
              className="flex flex-col h-full gap-4"
            >
              {/* <div className="w-full h-[150px] rounded-lg bg-white/10" /> */}
              <Image
                src={`${post.attributes.featured_media.data.attributes.url}`}
                width={400}
                height={200}
                alt={`Imagem de capa do artigo: ${post.attributes.post_title}`}
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="flex-1">
                <h1>{post.attributes.post_title}</h1>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-dark-border">
                <span className="flex items-center justify-center w-6 h-6 text-xs rounded-full bg-gray-400">
                  PG
                </span>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">
                    <span className="text-dark-text">por</span> Porão Geek
                  </span>
                  <span className="text-xs">•</span>
                  <span className="text-xs">
                    <span className="text-dark-text">em</span>{" "}
                    {formatDate(post.attributes.createdAt)}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
