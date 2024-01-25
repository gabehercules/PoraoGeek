import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import { authOptions } from "@/lib/auth";
import EmailVerificationSection from "../EmailVerificationSection";

export default async function UserProfileHeader() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <Link
          href={"/entrar"}
          className="inline p-2 text-sm bg-brand-green/10 text-brand-green rounded"
        >
          Faça o login
        </Link>
      </div>
    );
  }

  console.log("SESSION", session);

  // const user = await userData.json();

  return (
    <Suspense
      fallback={
        <div className="w-full h-[245px] bg-white/10 animate-pulse duration-300 rounded-md" />
      }
    >
      <div className="">
        {/* banner de capa */}
        <div className="flex w-full p-3 gap-3 rounded overflow-hidden border border-dark-border">
          {/* foto de perfil */}
          <span className="relative w-[80px] h-[80px]">
            <Image
              src={session.user.image}
              alt="Profile pic"
              width={90}
              height={90}
              className="w-full relative rounded-lg"
            />
          </span>

          <div className="flex flex-col">
            {/* info like name, username and other things */}
            <span className="text-xl font-bold leading-none">
              {session.user.name}
            </span>
            <span>{session.user.email}</span>
          </div>
        </div>
        {/* user profile content */}
        <div className="border rounded mt-4 overflow-hidden bg-brand-green/10 border-brand-green/20">
          <div className="p-3">
            <h2 className="text-sm leading-tight font-semibold">
              Em breve, mais opções de configuração, além de muitas novidades!
              Fique ligado!
            </h2>
          </div>
        </div>
        {/* user profile options */}
        <h2 className="text-sm leading-tight font-semibold mb-3 mt-5">
          Opções
        </h2>
        <Link
          href={"/redefinir-senha"}
          className="flex w-min text-sm p-2 rounded bg-brand-green/20 text-brand-green whitespace-nowrap mb-5"
        >
          Redefinir senha
        </Link>

        <EmailVerificationSection email={session.user.email} />

        <button className="flex w-min text-sm p-2 rounded bg-red-500/10 text-red-500 whitespace-nowrap">
          Deletar conta
        </button>
      </div>
    </Suspense>
  );
}
