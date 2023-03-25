import FeaturedBanner from "../../components/Cms/Banners/FeaturedBanner";
import Layout from "../../components/Layout";
import ShardIcon from "../../components/ShardIcon";

// adiconado uma gambiarra via copilot© para a tipagem de posts pq eu já num manjo de javascript quanto menos de typescript
export default function Dashboard({ posts }: { posts: any[] }) {
  return (
    <>
      <Layout>
        <div className="flex gap-5 h-full">
          <div className="max-w-[70%] bg-darker-bg">
            <FeaturedBanner />
            <div>
              <ul className="flex flex-wrap gap-4">
                {posts.map((post) => (
                  <li key={post.id} className="flex flex-1">
                    <a
                      href={post.link}
                      className="w-[300px] flex flex-1  flex-col border border-dark-border rounded-md overflow-hidden"
                    >
                      <div className="h-[120px] bg-dark-border flex items-center justify-center text-white/40 text-xl font-bold">
                        Thumb
                      </div>
                      <div className="p-2">
                        <h2 className="text-white">{post.title.rendered}</h2>
                        <span className="flex items-center gap-1 text-sm text-dark-text mt-2">
                          <ShardIcon />
                          +12
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-brand-green flex-1">side panel</div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://poraogeek.com.br/wp-json/wp/v2/posts?per_page=6"
  );
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}
