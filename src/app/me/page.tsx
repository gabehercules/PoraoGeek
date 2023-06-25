"use client";

import Image from "next/image";
import Layout from "../../components/Layout";
// import { DiscordAlt } from "@styled-icons/boxicons-logos";
// import { Copy } from "@styled-icons/boxicons-regular";
import UserProfileNavbar from "../../components/UserProfileNavbar";

export default function Perfil() {
  return (
    <Layout>
      <div className="flex w-full p-10">
        <div className="flex-1">
          {/* seção perfil */}
          <div className="">
            {/* banner de capa */}
            <div className="flex w-full h-[245px] rounded-md overflow-hidden border border-dark-border">
              <div className="flex gap-4 items-start bg-darker-bg p-6">
                {/* foto de perfil */}
                <span className="relative w-[80px] h-[80px]">
                  <Image
                    src="https://avatars.githubusercontent.com/u/35200922?v=4"
                    alt="Profile fic"
                    width={90}
                    height={90}
                    className="w-full relative rounded-lg"
                  />
                </span>
                <div className="flex flex-col">
                  {/* info like name, username and other things */}
                  <span className="text-xl font-bold leading-none">
                    Gabriel Hercules
                  </span>
                  <span>@gabehercules</span>
                  <button className="flex gap-2 items-center bg-darker-bg p-1 border border-dark-border rounded text-sm">
                    {/* <DiscordAlt width={16} /> */}
                    <span>Herculio#4337</span>
                    {/* <Copy width={16} /> */}
                  </button>
                </div>
              </div>
            </div>
            {/* user profile content */}
            <div className="border border-dark-border rounded mt-4 overflow-hidden">
              <div className="h-10"></div>
            </div>
          </div>

          {/* seção de conteúdo */}
        </div>
      </div>
    </Layout>
  );
}
