import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MainNavigation() {
  const session = await getServerSession(authOptions);

  // console.log(session);

  return (
    <div className="w-full h-[92dvh] p-4 bg-black">
      {/* Exibe um botao para fazer o login caso o usuario nao esteja logado */}
      {!session ? (
        <Link
          href={"/entrar"}
          className="flex items-center justify-center p-2 font-semibold rounded-lg bg-brand-green text-dark-primary"
        >
          Entrar
        </Link>
      ) : (
        <Link
          href={"/api/auth/signout"}
          className="flex items-center justify-center p-2 font-semibold rounded-lg bg-brand-green text-dark-primary"
        >
          Sair
        </Link>
      )}

      <ul className="flex flex-col divide-y divide-dark-border">
        <li>
          <Link href={"/"} className="flex py-2">
            Dashboard
          </Link>
        </li>

        <li>
          <Link href={"/noticias"} className="flex py-2">
            Notícias
          </Link>
        </li>

        <li>
          <Link href={"/jogos"} className="flex py-2">
            Jogos
          </Link>
        </li>

        <li>
          <Link href={"/grupos"} className="flex py-2">
            Grupos
          </Link>
        </li>

        <li>
          <Link href={"/mercado"} className="flex py-2">
            Mercado
          </Link>
        </li>
      </ul>
    </div>
  );
}
