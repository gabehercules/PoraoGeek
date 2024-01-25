"use client";

import { BiChevronDown, BiMenu } from "react-icons/bi";
import Logo from "../Logo";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

// interface MainHeaderProps {
//   isMenuOpen: boolean;
// }

export default function MainHeader({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col items-center justify-between border-b border-dark-border bg-dark-contrast">
      <div className="min-h-[8dvh] px-4 w-full flex items-center justify-between">
        {/* <button aria-valuetext="Alterar Menu">
          <BiMenu size={24} />
        </button> */}

        <Link href="/" className="w-[110px]">
          <Logo />
        </Link>

        <Link
          href={"/perfil"}
          className="flex items-center gap-1 border border-dark-border rounded-full"
        >
          <span
            className={
              status === "loading"
                ? "flex items-center justify-center animate-pulse bg-neutral-700 w-[32px] h-[32px] rounded-full"
                : "w-[32px] h-[32px] flex items-center justify-center text-xs font-medium rounded-full bg-neutral-500"
            }
          >
            {session && session.user.image != "no avatar" ? (
              <Image
                src={session.user.image ?? ""}
                alt={session.user.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <p>
                {session?.user.image === "no avatar" &&
                  session?.user.name.charAt(0)}
              </p>
            )}
          </span>
          <span className="flex items-center justify-center w-[32px] h-[32px]">
            <BiChevronDown />
          </span>
        </Link>
      </div>

      {/* O componente MainNavigation é resposável por renderizar os principais itens de navegação
      eg: dashboard, noticias, meu perfil, etc */}
      {/* {children} */}
    </div>
  );
}
