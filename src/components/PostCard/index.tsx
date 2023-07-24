// import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  id: number;
  title: string;
  featuredImage?: string;
  slug: string;
  date: any; // arrumar essa porra dps e TIPAR A DATA na função formatDate em functions.ts
}

export default function PostCard({
  id,
  title,
  featuredImage,
  slug,
  date,
}: PostCardProps) {
  // const { data } = await getPosts();

  // const posts = data;

  // console.log(data);

  return (
    <li
      key={id}
      className="overflow-hidden rounded-md border border-dark-border bg-dark-secondary"
    >
      <Link href={`/noticias/${slug}`} className="flex flex-col h-full">
        <Image
          src={`${featuredImage}`}
          width={400}
          height={300}
          alt={`Imagem de capa do artigo: ${title}`}
          className="w-full h-[220px] object-cover"
        />
        <div className="flex-1 p-4">
          <h1>{title}</h1>
        </div>
        <div className="flex items-center gap-2 p-4 border-t border-dark-border">
          <span className="flex items-center justify-center w-8 h-8 text-sm rounded-full bg-gray-400">
            PG
          </span>
          <span className="text-sm">{date}</span>
        </div>
      </Link>
    </li>
  );
}
