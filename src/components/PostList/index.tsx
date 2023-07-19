import PostCard from "../PostCard";

async function fetchRecentPosts() {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/posts?populate=*`,
    {
      cache: "no-cache",
    }
  );

  return response.json();
}

export default async function PostList() {
  const { data } = await fetchRecentPosts();

  const posts = data;

  console.log(posts);

  return (
    <ul className="grid grid-cols-3 gap-10">
      {posts.map((post: any) => (
        <PostCard
          title={post.attributes.post_title}
          featuredImage={post.attributes.featured_media.data.attributes.url}
          id={post.id}
          key={post.id}
          slug={post.attributes.post_slug}
        />
      ))}
    </ul>
  );
}
