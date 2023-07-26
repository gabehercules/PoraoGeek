import FeaturedPosts from "../../../components/FeaturedPosts";
import PostListNews from "../../../components/PostListNews";

export default function Page() {
  return (
    <div className="flex bg-dark-primary gap-5">
      <div className="flex flex-col flex-1 gap-6 p-10">
        <h2>Destaques</h2>
        <FeaturedPosts />

        <h1 className="">Novidades</h1>
        <div className="flex flex-col gap-2">
          <PostListNews />
        </div>
      </div>
    </div>
  );
}
