"use client";
import { Fragment, useState } from "react";
import {
  MessageDots,
  GridAlt,
  BookContent,
  Joystick,
  Group,
  Sidebar,
} from "@styled-icons/boxicons-regular";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import FeedbackForm from "../Forms/FeedbackForm";

const navLinks = [
  {
    title: "Início",
    url: "/",
    icon: <GridAlt width={24} />,
  },
  {
    title: "Notícias",
    url: "/noticias",
    icon: <BookContent width={24} />,
  },
  {
    title: "Grupos",
    url: "/grupos",
    icon: <Group width={24} />,
  },
  {
    title: "Jogos",
    url: "/games",
    icon: <Joystick width={24} />,
  },
  {
    title: "Mercado",
    url: "/mercado",
    icon: <Sidebar width={24} />,
  },
];

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex flex-col bg-dark-secondary border-r border-dark-border sidenav-dashboard">
        <div className="flex flex-1 bg-dark-primary p-3">
          <ul className="flex flex-col flex-1 gap-3 list-none">
            {navLinks.map((link, i) => (
              <li key={i} className="flex text-white">
                <Link
                  href={link.url}
                  title={link.title}
                  className="flex flex-1 gap-3 transition p-2 hover:bg-dark-secondary"
                >
                  {link.icon}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-2 border-t border-dark-border">
          <button
            onClick={handleToggleModal}
            className="w-full flex justify-center gap-2 text-zinc-400 p-2 rounded hover:bg-dark-primary/75 hover:text-white transition-colors "
          >
            <MessageDots width={20} />
            Feedback
          </button>

          <Transition appear show={isOpen}>
            <Dialog as="div" onClose={handleToggleModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/50" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-dark-border rounded-md bg-dark-primary p-6 text-left align-middle shadow-xl transition-all">
                      <FeedbackForm />

                      <div className="mt-4">
                        <button
                          type="button"
                          className="w-full rounded-md bg-dark-secondary py-2 font-medium text-zinc-500 hover:bg-red-500/10 hover:text-red-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={handleToggleModal}
                        >
                          Cancelar
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>

        <div className="p-2 text-sm text-center text-zinc-400">
          <p>Beta - 0.1.0</p>
        </div>
      </div>
    </>
  );
}
