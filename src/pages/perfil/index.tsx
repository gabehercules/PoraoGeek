import Image from "next/image";
import Layout from "../../components/Layout";
import { DiscordAlt } from "@styled-icons/boxicons-logos";
import { Copy } from "@styled-icons/boxicons-regular";
import UserProfileNavbar from "../../components/UserProfileNavbar";

export default function Perfil() {
  return (
    <Layout>
      <div className="flex h-full">
        <div className="w-[70%]">
          {/* seção perfil */}
          <div className="p-6">
            {/* banner de capa */}
            {/* <div className="w-full h-[230px] bg-dark-border"></div> */}
            <div className="flex gap-4 items-center">
              {/* foto de perfil */}
              <Image
                src="https://avatars.githubusercontent.com/u/35200922?v=4"
                alt="Profile fic"
                width={64}
                height={64}
                className="bg-dark-border rounded-full"
              />
              <div className="flex flex-col">
                {/* info like name, username and other things */}
                <span className="text-xl font-bold leading-none">
                  Gabriel Hercules
                </span>
                <span>@gabehercules</span>
                <button className="flex gap-2 items-center bg-darker-bg p-1 border border-dark-border rounded text-sm">
                  <DiscordAlt width={16} />
                  <span>Herculio#4337</span>
                  <Copy width={16} />
                </button>
              </div>
            </div>
            {/* user profile content */}
            <div className="border border-dark-border rounded mt-4 overflow-hidden">
              <UserProfileNavbar />
              <div className="h-10"></div>
            </div>
          </div>

          {/* seção de conteúdo */}
        </div>
        <div className="flex flex-1 bg-brand-green">ola</div>
      </div>
    </Layout>
  );
}
