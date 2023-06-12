import Link from "next/link";
import bannerExample from "./data";
import Image from "next/image";

console.log(bannerExample);

export default function FeaturedBanner() {
  return (
    <div className="flex flex-col relative h-[160px] overflow-hidden rounded-md">
      <Image
        src={bannerExample.image.src}
        alt={bannerExample.image.alt}
        width={400}
        height={230}
        className="absolute z-0 w-full h-full object-cover top-0 left-0"
      />
      <div className="z-10 h-full bg-gradient-to-r from-zinc-900 to-zinc-100/10 p-6">
        <h2 className="text-xl font-medium mb-3">{bannerExample.title}</h2>
        <p>{bannerExample.description}</p>
        <Link href={bannerExample.link.url} className="flex mt-6">
          {bannerExample.link.label}
        </Link>
      </div>
    </div>
  );
}
