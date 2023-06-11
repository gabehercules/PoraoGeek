import FeaturedBanner from "../components/Cms/Banners/FeaturedBanner";
import Notifications from "../components/Cms/Notifications";
import Layout from "../components/Layout";
import ShardIcon from "../components/ShardIcon";

// adiconado uma gambiarra via copilot© para a tipagem de posts pq eu já num manjo de javascript quanto menos de typescript
export default function Dashboard() {
  return (
    <>
      <Layout>
        <div className="flex gap-5 h-full">
          <div className="max-w-[70%] bg-darker-bg">
            <FeaturedBanner />
            <Notifications />
            <div>
              <ul className="flex flex-wrap gap-4">posts</ul>
            </div>
          </div>
          <div className="bg-brand-green flex-1">side panel</div>
        </div>
      </Layout>
    </>
  );
}
