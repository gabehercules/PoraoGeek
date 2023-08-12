"use client";
import {
  GridAlt,
  BookContent,
  Joystick,
  Group,
  Sidebar,
} from "@styled-icons/boxicons-regular";
import Link from "next/link";
import Logo from "../Logo";
import FeedbackModal from "../FeedbackModal";
import UserWidget from "../UserProfile/UserWidget";

const navLinks = [
  {
    title: "Início",
    url: "/",
    icon: <GridAlt width={20} />,
  },
  {
    title: "Notícias",
    url: "/noticias",
    icon: <BookContent width={20} />,
  },
  {
    title: "Grupos",
    url: "/grupos",
    icon: <Group width={20} />,
  },
  {
    title: "Jogos",
    url: "/games",
    icon: <Joystick width={20} />,
  },
  {
    title: "Mercado",
    url: "/mercado",
    icon: <Sidebar width={20} />,
  },
];

export default function SidebarNav() {
  return (
    <>
      <div className="flex flex-col bg-dark-secondary border-r border-dark-border sidenav-dashboard">
        <div className="flex flex-col flex-1 bg-dark-contrast py-3 px-6">
          <div className="flex items-center gap-3 mb-6 pt-2 pb-6 border-b border-dark-border">
            <Link href="/" className="w-[120px]">
              <Logo />
            </Link>
          </div>

          <div>
            <UserWidget />
          </div>

          <ul className="flex flex-col flex-1 gap-2 list-none">
            <span className="mb-2 text-xs text-white/30">Navegue</span>
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

        <FeedbackModal />

        <div className="p-2 text-xs text-center text-zinc-400">
          <p>Closed Alpha - 0.1.0</p>
        </div>
      </div>
    </>
  );
}
