import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import posts from "../../components/Cms/PostListHome/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  ChevronLeft,
  CopyAlt,
  FontSize,
  ToggleLeft,
  DotsVerticalRounded,
} from "@styled-icons/boxicons-regular";
import { Popover } from "@headlessui/react";

interface Post {
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

const starfield: Post = posts[0];

export default function Post() {
  const [copied, setCopied] = useState(false);

  const router = useRouter();
  const { route } = router;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  console.log("A URL completa é: " + baseUrl + route);

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(baseUrl + route)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((error) => console.error("Erro ao copiar: ", error));
  };

  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-center">
        <div className="w-[991px] mt-10">
          {/* ideia: voltar para a home ou para a página anterior ou ter um breadcrumb */}
          <Link href="/">
            <ChevronLeft width={20} /> Voltar
          </Link>
        </div>
      </div>
      <main className="flex flex-col items-center">
        <section className="w-[991px] py-6">
          <h1 className="text-4xl font-bold mb-4">{starfield.title}</h1>
          <p className="text-zinc-400 text-xl mb-6">{starfield.description}</p>

          {/* div com o icone e nome da fonte e nome do autor */}
          <div className="flex gap-4 items-center">
            <span className="flex items-center justify-center w-10 h-10 bg-zinc-700 rounded-full">
              GH
            </span>
            <div className="flex flex-col leading-none">
              <span>Nome fonte</span>
              <span>Nome autor - 11/05/2023</span>
            </div>
          </div>

          {/* opções de compartilhamento e acessibilidade */}
          <Popover>
            <Popover.Button className="w-10 h-10 flex items-center justify-center p-2 border border-transparent rounded-md hover:bg-dark-bg hover:border-dark-border">
              <DotsVerticalRounded width={20} />
            </Popover.Button>
            <Popover.Panel className="absolute translate-y-2 flex flex-col p-2 bg-darker-bg border border-dark-border rounded">
              <div>
                <button
                  onClick={handleCopyToClipboard}
                  className="flex w-full gap-2 items-center p-3 rounded hover:bg-zinc-800"
                >
                  <CopyAlt width={20} />
                  {copied ? "Link copiado" : "Copiar link do post"}
                </button>
              </div>
              <div>
                <button className="flex w-full gap-2 items-center p-3 rounded hover:bg-zinc-800">
                  <FontSize width={20} />
                  Tamanho da fonte
                </button>
              </div>
              <div>
                <button className="flex w-full gap-2 items-center p-3 rounded hover:bg-zinc-800 cursor-not-allowed opacity-50">
                  <ToggleLeft width={20} />
                  Tema{" "}
                  <span className="text-xs p-1 bg-red-600 rounded">
                    Em breve
                  </span>
                </button>
              </div>
            </Popover.Panel>
          </Popover>

          <Image
            src={starfield.image.src}
            width={1200}
            height={300}
            alt={starfield.image.alt}
            className="w-full rounded-[10px] mt-10"
          />
          <p className="text-sm text-zinc-400">{starfield.image.alt}</p>

          <div
            className="post-content mt-10"
            dangerouslySetInnerHTML={{
              __html: `<p>Warzone receberá um novo nome. Foi anunciado pela <strong><a href=\"https://www.activision.com/\" target=\"_blank\" rel=\"noopener\">Activison</a> </strong>seus planos para <strong>Call of Duty: </strong><strong>Warzone </strong>após a chegada de <a href=\"https://www.callofduty.com/home\" target=\"_blank\" rel=\"noopener\"><strong>Warzone 2.0</strong></a> em 16 de novembro. Diferente do que muitos pensavam, o primeiro warzone não será encerrado, será mantido, porém, seus servidores serão desligados por alguns dias e irá renomear o primeiro título para <strong>Call of Duty: Warzone Caldera.</strong></p>\n<p>Os servidores de Warzone serão desligados dia 16 de novembro às 13h do horário de Brasília, seguindo o encerramento da temporada de<strong> Call of Duty: Vanguard.</strong> No mesmo dia, os servidores do Warzone 2.0 serão ligados a partir das 15h como parte da primeira temporada de Modern Warfare II. O  novo Warzone será gratuito assim como o primeiro.</p>\n<div id=\"attachment_6848\" style=\"width: 994px\" class=\"wp-caption aligncenter\"><img width=\"984\" height=\"554\" aria-describedby=\"caption-attachment-6848\" decoding=\"async\" loading=\"lazy\" class=\"wp-post-6845 wp-image-6848 size-full\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5ODQiIGhlaWdodD0iNTU0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiB2YWx1ZXM9InJnYmEoMTUzLDE1MywxNTMsMC41KTtyZ2JhKDE1MywxNTMsMTUzLDAuMSk7cmdiYSgxNTMsMTUzLDE1MywwLjUpIiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz48L3JlY3Q+PC9zdmc+\" alt=\"Warzone novo nome\" data-public-id=\"call-of-duty-warzone-20-nao-substitui-original-activision-blizzard_vzpkri.jpg\" data-format=\"jpg\" data-transformations=\"f_webp,q_auto\" data-version=\"1668105276\" data-responsive=\"1\" data-size=\"984 554\" data-delivery=\"upload\" onload=\";window.CLDBind?CLDBind(this):null;\" data-cloudinary=\"lazy\" /><p id=\"caption-attachment-6848\" class=\"wp-caption-text\">Warzone novo nome</p></div>\n<p>&nbsp;</p>\n<p>Confira também:</p>\n<ul>\n<li><a href=\"https://poraogeek.com.br/god-of-war-ragnarok-acaba-de-lancar-veja-reacoes/\">God of War acaba de lançar. Veja as reações</a></li>\n<li><a href=\"https://poraogeek.com.br/as-10-melhores-series-da-netflix-para-assistir-agora/\">As 10 melhores séries da Netflix para assistir agora</a></li>\n<li><a href=\"https://poraogeek.com.br/star-wars-andor-apresenta-a-melhor-antagonista-feminina-da-serie/\">Star Wars: Andor apresenta a melhor antagonista feminina da série</a></li>\n</ul>\n`,
            }}
          ></div>
        </section>
      </main>
    </div>
  );
}
