import Link from "next/link";
import bannerExample from "./data";
import Image from "next/image";

async function getBanner() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/banners?filters[active][$eq]=true&populate=*`
  );

  // console.log("DATA 1", response);

  const { data } = await response.json();

  // console.log("DATA 2", data);

  return data[0];
}

export default async function FeaturedBanner() {
  const banner = await getBanner();

  // console.log("DATA 2", banner);

  return (
    <div className="flex h-[260px] bg-dark-secondary overflow-hidden rounded-md border border-dark-border">
      <div className="flex flex-col items-start flex-1 p-6 border-r border-dark-border">
        <Image
          src="/pg+apoiase.png"
          width={230}
          height={40}
          alt="PG + Apoia.se"
        />
        <h2 className="text-2xl font-medium my-3">
          {banner.attributes.banner_title}
        </h2>
        <p className="flex-1 text-zinc-300 text-lg font-light">
          {banner.attributes.banner_description}
        </p>
        <Link
          href={banner.attributes.banner_link}
          target="_blank"
          className="flex items-center justify-start gap-2 text-zinc-400 mt-6 leading-none group hover:text-brand-green transition-all duration-300"
        >
          {bannerExample.link.label}
        </Link>
      </div>

      {/* <div className="p-6 border-r border-dark-border">
        <h3 className="text-xl mb-3">Campanha de arrecadação</h3>
        <p className="text-zinc-400">
          Total arrecadado:{" "}
          <span className="text-brand-green/60">R$11.900,00</span>
        </p>
        <p className="text-zinc-400 mb-6">
          Meta: <span className="text-brand-green/60">R$35.000,00</span>
        </p>
        <div className="flex w-full h-2 rounded-full bg-zinc-500 overflow-hidden">
          <span className="w-[34%] bg-gradient-to-r from-brand-green/20 to-brand-green"></span>
        </div>
        <span className="flex text-xs">34% completo</span>
      </div> */}

      <div className="">
        <Image
          src={bannerExample.image.src}
          alt={bannerExample.image.alt}
          width={400}
          height={230}
          className="h-full aspect-video"
        />
      </div>
    </div>
  );
}

// To-Do:
// [ o ] Definir um visual padrão para o banner de forma que de para tornar ele 100% dinamico
// [ o ] Adicionar uma imagem dinamica vinda do strapi
// [ o ] Componentizar o banner em partes menores
