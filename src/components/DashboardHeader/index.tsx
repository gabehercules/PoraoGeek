"use client";

import Link from "next/link";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import MainNavigation from "../MainNavigation";
import UserWidget from "../UserProfile/UserWidget";

{
  /* mock de usuário logado */
}
const user = true;

export default function DashboardHeader() {
  return (
    <div className="flex gap-8 items-center justify-between w-full border-b bg-dark-secondary border-dark-border p-4 header-dashboard">
      <div className="w-[120px]">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex flex-1 gap-8 items-center">
        <SearchBar />
        <MainNavigation />

        {!user ? (
          <div className="flex flex-1 gap-4 items-center justify-end">
            <Link href="/entrar" className="">
              <span>Entrar</span>
            </Link>
            <Link
              href="/cadastrar"
              className="bg-[#000] px-3 py-1 border border-zinc-700 rounded"
            >
              <span>Cadastrar</span>
            </Link>
          </div>
        ) : (
          <UserWidget />
        )}
      </div>
    </div>
  );
}
