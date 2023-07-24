// import FeaturedBanner from "../../components/Cms/Banners/FeaturedBanner";
import PostList from "../../components/PostList";

export default async function Page() {
  return (
    <div className="flex bg-dark-primary gap-5">
      <div className="flex flex-col flex-1 gap-6 p-10">
        {/* <FeaturedBanner /> */}
        <h1 className="">Posts recentes</h1>
        <div className="flex flex-col gap-2">
          <PostList />
        </div>
      </div>
    </div>
  );
}
