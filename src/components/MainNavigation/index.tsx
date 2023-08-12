import Link from "next/link";
import data from "./data";

export default function MainNavigation() {
  return (
    <div className="flex items-center gap-4">
      <ul className="flex gap-3 px-10">
        {data.map((item, i) => (
          <li key={i}>
            <Link href={item.path} className="text-sm text-zinc-400">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <Link href="/entrar" className="text-sm">
          Entrar
        </Link>
        {/* <Link href="/api/auth/signin" className="text-sm">
          Cadastrar
        </Link> */}
      </div>
    </div>
  );
}
