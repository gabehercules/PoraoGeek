import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import "../../../../../styles/post-styles.css";

interface PostProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

const fetchPosts = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?filters[post_slug][$eq]=${slug}&populate=*`,
    { cache: "no-cache" }
  );

  const { data } = await response.json();

  // console.log("LOG 1 NO FETCH", data);

  return data[0];
};

export default async function Post({ params }: { params: { slug: string } }) {
  const posts = await fetchPosts(params.slug); // usar o server side quando tiver uma alternativa melhor para o tempo de carregamento

  // console.log("LOG 2 NO COMPONENT", posts);
  const { id, attributes: post } = posts;

  // console.log(id, post);

  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<Loading />}>
        <div className="flex items-center gap-3 w-[768px] mt-10 mb-6">
          {/* ideia: voltar para a home ou para a página anterior ou ter um breadcrumb */}
          <Link href="/noticias">[icone bunito de uma casinha] Blog</Link>
          <span>👉</span>
          <p className="text-white/50">{post.post_title}</p>
        </div>
        <div className="w-[768px]">
          <h1 className="text-4xl mb-3 leading-normal font-extrabold text-brand-green">
            {post.post_title}
          </h1>
          <h4 className="text-lg mb-8">{post.post_description}</h4>
          <Image
            src={`${post.featured_media.data.attributes.url}`}
            width={1000}
            height={600}
            className="w-full mb-10"
            alt={post.post_tilte}
          />
          <div
            dangerouslySetInnerHTML={{ __html: `${post.post_content}` }}
            className="post-content"
          />
        </div>
        <div className="flex items-center justify-center w-full py-12 border-t border-dark-border bg-dark-secondary">
          <div className="w-full max-w-[768px]">varias coisas aqui</div>
        </div>
      </Suspense>
    </div>
  );
}
