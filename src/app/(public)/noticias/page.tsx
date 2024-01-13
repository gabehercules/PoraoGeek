import PaginationControl from "@/components/PaginationControl";
import FeaturedPosts from "../../../components/FeaturedPosts";
import PostList from "@/components/PostList";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1"; // starta na página 1
  // const perPage = searchParams["perPage"] ?? 8;

  return (
    <div className="flex gap-5">
      <div className="flex flex-col flex-1 gap-6">
        {/* <FeaturedPosts /> */}

        <h1 className="">Novidades</h1>
        <div className="flex flex-col gap-2">
          <PostList currentPage={Number(page)} hasPagination />
        </div>
      </div>
    </div>
  );
}
