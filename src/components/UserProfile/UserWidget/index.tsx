"use client";

import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDown,
  LinkExternal,
  MessageDots,
} from "@styled-icons/boxicons-regular";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
// import { useSession } from "next-auth/react";

export default function UserWidget() {
  // const { data: session } = useSession();

  const session = null; // retirar depois

  // const user = session?.user;
  return (
    <div className="flex-1 self-end">
      {session ? (
        <Link
          href="/entrar"
          className="flex items-center gap-2 w-full p-2 mb-2 text-xs border border-dark-border rounded hover:bg-white/5 transition-colors duration-200"
        >
          <span className="w-6 h-6 bg-white/5 rounded-full"></span>
          Faça o login
        </Link>
      ) : (
        <Popover className="flex relative transition justify-end">
          <Popover.Button
            className="w-full flex items-center gap-2 p-2 rounded-md border border-transparent transition
              hover:bg-dark-contrast hover:border hover:border-dark-border
                focus:ring-0 focus:outline-none active:bg-dark-contrast
                focus-visible:border focus-visible:border-dark-border
              active:border-dark-border"
          >
            {/* <Image
              src="https://avatars.githubusercontent.com/u/35200922?v=4"
              alt="Avatar Pic"
              width={28}
              height={28}
              className="rounded-full"
            /> */}
            <span className="flex flex-1 justify-start text-white text-sm">
              {/* {user?.name} */}
              Meu Perfil
            </span>
            <ChevronDown width={18} className="flex text-white align-middle" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="-translate-y-4"
            enterTo="translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
          >
            <Popover.Panel className="flex flex-col gap-2 w-[200px] absolute top-full left-0 z-10 bg-dark-secondary border border-dark-border rounded-md mt-1 transition overflow-hidden shadow-lg shadow-black/50">
              <div className="flex gap-1 flex-col text-white">
                <Link
                  href="/perfil/"
                  className="text-sm py-2 px-4 hover:bg-dark-contrast"
                >
                  Meu Perfil
                </Link>
                <Link
                  href="/perfil/configuracoes"
                  className="text-sm py-2 px-4 hover:bg-dark-contrast"
                >
                  Configurações
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-sm py-2 px-4 bg-red-500/10 text-red-500 hover:bg-red-500/20"
                >
                  Sair
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      )}
    </div>
  );
}
