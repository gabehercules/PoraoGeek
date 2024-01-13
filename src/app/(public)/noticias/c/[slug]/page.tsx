import PostList from "@/components/PostList";

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1"; // starta na página 1

  // console.log("LOG DA CATEGORY", data);
  // console.log('Conteúdo do objeto "posts":', posts);

  return (
    <div className="w-full">
      <PostList
        currentPage={Number(page)}
        category={params.slug}
        hasPagination
      />
    </div>
  );
}
