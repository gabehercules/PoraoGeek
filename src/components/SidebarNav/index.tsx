import { Popover, Transition } from "@headlessui/react";
import {
  LogOut,
  ChevronDown,
  MessageDots,
  LinkExternal,
} from "@styled-icons/boxicons-regular";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import ShardIcon from "../ShardIcon";

const navLinks = [
  {
    title: "Central",
    url: "/dashboard/",
  },
  {
    title: "Notícias",
    url: "/dashboard/noticias",
  },
  {
    title: "Grupos",
    url: "/dashboard/grupos",
  },
  {
    title: "Meus Jogos",
    url: "/dashboard/meus-jogos",
  },
  {
    title: "Explorar Jogos",
    url: "/games",
  },
  {
    title: "Mercado",
    url: "/dashboard/Mercado",
  },
];

export default function SidebarNav() {
  return (
    <>
      <div className="bg-dark-bg border-r border-dark-border sidenav-dashboard">
        <div className="p-3 border-b border-dark-border">
          <Popover className="relative transition">
            <Popover.Button
              className="flex w-full items-center gap-2 p-2 rounded-md border border-transparent transition
              hover:bg-darker-bg hover:border hover:border-dark-border
                focus:ring-0 focus:outline-none active:bg-darker-bg
                focus-visible:border focus-visible:border-dark-border
              active:border-dark-border"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/35200922?v=4"
                alt="Avatar Pic"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="flex flex-1 justify-start text-white text-sm">
                Gabriel Hercules
              </span>
              <ChevronDown
                width={18}
                className="flex text-white align-middle"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="flex flex-col gap-2 w-full absolute left-0 z-10 bg-dark-bg border border-dark-border rounded-md mt-2 transition overflow-hidden">
                <div>Alguma coisa</div>
                <div className="flex flex-col text-white">
                  <a href="#">Meu Perfil</a>
                  <a href="#">Notificações</a>
                  <a href="#">Configurações</a>
                </div>
                <div className="flex border-t border-dark-border">
                  <button className="flex flex-1 items-center gap-2 px-4 py-3 text-white text-sm leading-tight hover:bg-darker-bg/75">
                    <MessageDots width={16} />
                    <span className="flex flex-1">Enviar Feedback</span>
                    <LinkExternal
                      width={14}
                      className="self-end text-dark-text"
                    />
                    {/* fazer o icone de link externo ficar verde (ou branco) no hover do botão */}
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* componente de xp e shards a baixo */}
          <div className="flex gap-3 mt-2">
            <div className="flex flex-1 items-center gap-2 px-2 py-2 border border-dark-border rounded-md">
              <ShardIcon />
              <span className="text-white text-sm">1422</span>
            </div>
            <div className="flex flex-1 items-center gap-2 px-2 py-2 border border-dark-border rounded-md">
              <ShardIcon />
              <span className="text-white text-sm">1422</span>
            </div>
          </div>
          <div className="flex gap-2 p-2 items-center">
            <div className="flex items-center justify-center w-4 h-4 bg-darker-bg p-3 border-2 border-dark-border rounded-full">
              <span className="flex text-white text-xs font-bold">02</span>
            </div>
            <div className="flex-1 h-1 bg-[#282828] rounded-md overflow-hidden">
              <span className="flex w-2/6 h-full bg-brand-green"></span>
            </div>
          </div>
        </div>
        <div className="flex bg-darker-bg p-3">
          <ul className="flex flex-col flex-1 gap-3 list-none">
            {navLinks.map((link) => (
              <li key={link.toString()} className="flex text-white">
                <Link
                  href={link.url}
                  title={link.title}
                  className="flex flex-1 transition p-2 hover:bg-dark-bg"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
