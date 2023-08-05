"use client";

import Link from "next/link";
import MainNavigation from "../MainNavigation";
// import UserWidget from "../UserProfile/UserWidget";

// mock de usuário logado
// const user = true;

export default function DashboardHeader() {
  return (
    <div className="flex gap-8 items-center justify-between w-full py-2 border-b bg-dark-contrast border-dark-border header-dashboard">
      <div className="flex flex-1 gap-8 items-center">
        <MainNavigation />

        {/* {!user ? (
          <div className="flex flex-1 gap-4 items-center justify-end">
            <Link href="/entrar" className="">
              <span>Entrar</span>
            </Link>
            <Link
              href="/cadastrar"
              className="bg-[#000] px-3 border border-zinc-700 rounded"
            >
              <span>Cadastrar</span>
            </Link>
          </div>
        ) : (
          <UserWidget />
        )} */}
      </div>
    </div>
  );
}
