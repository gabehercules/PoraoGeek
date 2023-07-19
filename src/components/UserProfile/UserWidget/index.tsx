"use client";

import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDown,
  LinkExternal,
  MessageDots,
} from "@styled-icons/boxicons-regular";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function UserWidget() {
  return (
    <div className="flex-1 self-end">
      <Popover className="flex relative transition justify-end">
        <Popover.Button
          className="flex items-center gap-2 p-2 rounded-md border border-transparent transition
              hover:bg-dark-primary hover:border hover:border-dark-border
                focus:ring-0 focus:outline-none active:bg-dark-primary
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
          <Popover.Panel className="flex flex-col gap-2 w-[240px] absolute top-full z-10 bg-dark-secondary border border-dark-border rounded-md mt-1 transition overflow-hidden shadow-lg shadow-black/50">
            <div className="flex gap-1 flex-col text-white">
              <Link href="/me/" className="py-2 px-4 hover:bg-dark-primary">
                Meu Perfil
              </Link>
              <Link
                href="/me/configuracoes"
                className="py-2 px-4 hover:bg-dark-primary"
              >
                Configurações
              </Link>
              <Link
                href="#"
                className="py-2 px-4 bg-red-500/10 text-red-500 hover:bg-red-500/20"
              >
                Sair
              </Link>
            </div>
            <div className="flex border-t border-dark-border">
              <button className="flex flex-1 items-center gap-2 px-4 py-3 text-white text-sm hover:bg-dark-primary/75">
                <MessageDots width={16} />
                <span className="self-start flex-1 leading-none">
                  Enviar Feedback
                </span>
                <LinkExternal width={14} className=" text-dark-text" />
                {/* fazer o icone de link externo ficar verde (ou branco) no hover do botão */}
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
