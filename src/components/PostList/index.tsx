import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/fetch-posts";
import { formatDate } from "@/utils/functions";
import PaginationControl from "../PaginationControl";

interface PostListProps {
  category?: string;
  currentPage: number;
  hasPagination?: boolean;
}

export default async function PostList({
  hasPagination,
  category,
  currentPage = 1,
}: PostListProps) {
  const featuredMedia = "&populate[0]=featured_media";

  const { data: postsList, meta } = await getPosts(
    category,
    featuredMedia,
    currentPage, // busca a página atual do query params na rota
    8 // limite de posts por página
  );

  if (!meta) return null;

  const page = meta.pagination.page;
  const pageSize = meta.pagination.pageSize;
  const pageCount = meta.pagination.pageCount;
  const total = meta.pagination.total;

  // se o postsList retornado for vazio, a requisição foi bem sucedida mas não havia dados para exibir
  // retorna uma mensagem de nada encontrado
  if (postsList.length === 0) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center p-4 rounded-lg bg-dark-contrast text-white">
        Nenhum post encontrado
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-col gap-4">
        {postsList.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            slug={post.attributes.post_slug}
            title={post.attributes.post_title}
            date={formatDate(post.attributes.createdAt)}
            featuredImage={post.attributes.featured_media.data.attributes.url}
          />
        ))}
      </ul>
      {hasPagination && (
        <PaginationControl pagination={{ page, pageCount, pageSize, total }} />
      )}
    </>
  );
}
