"use client";

import Link from "next/link";

const userNavLinks = [
  {
    name: "Seu perfil",
    route: "/me",
  },
  {
    name: "Salvos",
    route: "/me/salvos",
  },
  {
    name: "Conquistas",
    route: "/me/conquistas",
  },
  {
    name: "Configurações",
    route: "/me/configuracoes",
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
              className="flex flex-1 items-center justify-center hover:bg-dark-contrast py-2"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
