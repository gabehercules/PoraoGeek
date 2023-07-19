import Link from "next/link";
import Logo from "../Logo";
import { Instagram, Twitter } from "@styled-icons/boxicons-logos";

function Header() {
  return (
    <div className="flex items-center gap-16 px-10 py-4 border-b border-zinc-800">
      <div className="w-[120px]">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <ul className="flex items-center flex-1 gap-10 h-full">
        <li className="flex items-center h-full relative">
          <Link
            href="/sobre"
            className="text-white font-extralight
                      after:transition hover:after:w-full after:block
                      after:h-[1px] after:bg-slate-100 after:absolute after:bottom-[-16px]"
          >
            Sobre o Newgate
          </Link>
        </li>

        <li className="flex items-center h-full relative">
          <Link
            href="https://poraogeek.com.br"
            target={"_blank"}
            className="text-white font-extralight
                      after:transition hover:after:w-full after:block
                      after:h-[1px] after:bg-slate-100 after:absolute after:bottom-[-16px]"
          >
            Blog
          </Link>
        </li>

        <li className="flex items-center h-full relative">
          <Link
            href=""
            className="flex gap-2 items-center text-white font-extralight opacity-20 pointer-events-none
                      hover:after:w-full after:block
                      after:h-[1px] after:bg-slate-100 after:absolute after:bottom-[-16px]"
          >
            Roadmap
            <span className="text-[10px] text-white p-0.5 rounded bg-black border border-slate-500">
              EM BREVE
            </span>
          </Link>
        </li>
      </ul>

      <div className="flex justify-end flex-1">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/entrar"
              className="flex items-center gap-2 text-sm
                  text-[#dcdcdc] transition duration-200"
            >
              Entrar
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/oporaogeek"
              target={"_blank"}
              className="flex items-center gap-2 text-sm
                  text-[#dcdcdc] transition duration-200"
            >
              <span>
                <Twitter size={18} />
              </span>
              Twitter
            </Link>
          </li>

          <li>
            <Link
              href="https://instagram.com/oporaogeek"
              target={"_blank"}
              className="flex items-center gap-2 text-sm
                  text-[#dcdcdc] transition duration-200"
            >
              <span>
                <Instagram size={18} />
              </span>
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
