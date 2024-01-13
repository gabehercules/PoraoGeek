"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SearchBar() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(router);
    const search = e.currentTarget.search.value;

    return router.push(`/busca/${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-full relative flex items-center">
        <label
          htmlFor="search"
          className="w-8 h-4 absolute flex items-center justify-center"
        >
          {/* Icone de pesquisa */}
        </label>
        <input
          type="search"
          id="search"
          name="search"
          placeholder={"Pesquise qualquer post"}
          className="w-[320px] h-full flex border-x border-y-[#00000000] bg-dark-contrast text-light-text text-sm border-dark-border py-1 px-8 placeholder:text-dark-text placeholder:text-sm placeholder:leading-tight"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </form>
  );
}

// TODO
// [] - adaptar o componente para exibir no MOBILE somente o ícone de search como um button;
//      no onClick exibir um modal com o input de pesquisa
