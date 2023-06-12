import FeaturedBanner from "../components/Cms/Banners/FeaturedBanner";
import Layout from "../components/Layout";
import PostListHome from "../components/Cms/PostListHome";
import ShardIcon from "../components/ShardIcon";

// adiconado uma gambiarra via copilot© para a tipagem de posts pq eu já num manjo de javascript quanto menos de typescript
export default function Dashboard() {
  return (
    <>
      <Layout>
        <div className="flex w-[90%] max-w-[1190px] h-full overflow-y-scroll bg-darker-bg bg-red-200 gap-5 overflow-hidden">
          <div className="flex flex-col flex-1 gap-6">
            <FeaturedBanner />
            <div>
              <PostListHome />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
