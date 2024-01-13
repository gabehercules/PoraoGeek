import PostList from "../../components/PostList";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1"; // starta na página 1

  return (
    <>
      <PostList currentPage={Number(page)} hasPagination />
    </>
  );
}
