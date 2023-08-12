import PostCard from "../PostCard";
import { formatDate } from "../../utils/functions";

async function fetchRecentPosts() {
  let page = 1;
  const perPage = 8; // posso usar para controlar o tamanho da resposta

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?sort[0]=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${perPage}&populate=*`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return [];
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.log("Error fetching posts", error);
    return <p>Erro ao buscar os posts</p>;
  }
}

export default async function PostList() {
  const posts = await fetchRecentPosts();

  // async function handleLoadMore() {
  //   let page = 1;
  //   return await fetchRecentPosts(page++);
  // }

  // console.log("LOG DOS POSTS AQUI", posts);

  return (
    <div>
      {posts?.length === 0 ? (
        <div>
          {/* estilizar dps algo bunitinho */}
          <p>Nenhum post encontrado</p>
        </div>
      ) : (
        <ul className="grid grid-cols-4 gap-10">
          {posts?.map((post: any) => (
            <PostCard
              title={post.attributes.post_title}
              featuredImage={post.attributes.featured_media.data.attributes.url}
              id={post.id}
              key={post.id}
              slug={post.attributes.post_slug}
              date={formatDate(post.attributes.createdAt)}
            />
          ))}
        </ul>
      )}
      <div className="mt-6 p-2 rounded bg-brand-green/5">
        <p className="text-sm">
          <span className="text-brand-green font-semibold">Dica:</span> Ainda
          não implementaram uma paginação/carregamento, caso queira encontrar
          algo específico use o campo de busca
        </p>
      </div>
    </div>
  );
}
