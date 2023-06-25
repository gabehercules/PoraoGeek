"use client";

import { Cog, Heart, Trophy, User } from "@styled-icons/boxicons-regular";
import Link from "next/link";

const userNavLinks = [
  {
    name: "Seu perfil",
    route: "/me",
    icon: <User width={16} />,
  },
  {
    name: "Salvos",
    route: "/me/salvos",
    icon: <Heart width={16} />,
  },
  {
    name: "Conquistas",
    route: "/me/conquistas",
    icon: <Trophy width={16} />,
  },
  {
    name: "Configurações",
    route: "/me/configuracoes",
    icon: <Cog width={16} />,
  },
];

export default function UserProfileNavbar() {
  return (
    <div className="flex-1 border-b border-dark-border bg-[#181818]">
      <ul className="flex list-none">
        {userNavLinks.map((link) => (
          <li key={link.name} className="flex items-center flex-1">
            <Link
              href={link.route}
              className="flex flex-1 items-center justify-center hover:bg-darker-bg py-2"
            >
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
