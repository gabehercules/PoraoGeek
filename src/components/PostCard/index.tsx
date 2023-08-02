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
    <li key={id} className="overflow-hidden ">
      <Link href={`/noticias/${slug}`} className="flex flex-col h-full gap-4">
        <Image
          src={`${featuredImage}`}
          width={400}
          height={200}
          alt={`Imagem de capa do artigo: ${title}`}
          className="w-full h-[150px] object-cover rounded-lg"
        />
        <div className="flex-1">
          <h1>{title}</h1>
        </div>
        <div className="flex items-center gap-2 pt-4 border-t border-dark-border">
          <span className="flex items-center justify-center w-6 h-6 text-xs rounded-full bg-gray-400">
            PG
          </span>
          <div className="flex gap-2 items-center">
            <span className="text-xs">
              <span className="text-dark-text">por</span> Porão Geek
            </span>
            <span className="text-xs">•</span>
            <span className="text-xs">
              <span className="text-dark-text">em</span> {date}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
