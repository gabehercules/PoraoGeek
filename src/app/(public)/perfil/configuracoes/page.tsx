// import { getServerSession } from "next-auth";
// import { authOptions } from "../../../api/auth/[...nextauth]/route";
// import { getUserData } from "../../../../utils/getUserData";

import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1 className="mt-10">• Configurações</h1>
      <div className="mt-4 px-4 py-2 text-sm bg-dark-contrast border-l border-l-brand-green">
        <p>
          Em breve você poderá setar preferências de comunicação, conectar apps
          (como Discord ou Twitch) e muito mais
        </p>
      </div>
      <div>
        <p className="mt-4 mb-2">• Opções - redefinir senha</p>
        <Link
          href="/redefinir-senha"
          className="inline-flex px-2 py-1 rounded-md text-sm bg-red-500/10 text-red-600"
        >
          Redefinir senha
        </Link>
      </div>
    </div>
  );
}
