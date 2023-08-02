"use client";

import { DiscordAlt, Google } from "@styled-icons/boxicons-logos";
import Logo from "../../Logo";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <form
      action="/api/auth"
      method="GET"
      encType="multipart/form-data"
      id="register-form"
      className="flex flex-col flex-1 gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="w-[150px] mb-6">
          <Logo />
        </div>
        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Cadastre-se no Porão Geek
        </h1>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <button className="flex flex-1 items-center justify-center gap-2 border p-3 border-dark-border rounded-md text-white">
          <span>
            <DiscordAlt width={24} />
          </span>
          Entre com o Discord
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 border p-3 border-dark-border rounded-md text-white">
          <span>
            <Google width={24} />
          </span>
          Entre com o Google
        </button>
      </div>

      <p
        className="flex items-center justify-center gap-2 w-full text-sm text-dark-text text-center
                before:flex before:flex-1 before:h-[1px] before:bg-dark-border before:align-middle
                after:flex after:flex-1 after:h-[1px] after:bg-dark-border after:align-middle"
      >
        ou cadastre-se com seu e-mail
      </p>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm text-dark-text mb-1 leading-none"
        >
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-dark-primary border-dark-border p-3 rounded-md text-white focus:ring-2
                  focus:ring-brand-green/50 focus:border-brand-green
                    hover:border-brand-green/50 hover:transition"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="text-sm text-dark-text mb-1 leading-none"
        >
          Senha
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-dark-primary border-dark-border p-3 rounded-md text-white focus:ring-2
                  focus:ring-brand-green/50 focus:border-brand-green
                    hover:border-brand-green/50 hover:transition"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="confirm-password"
          className="text-sm text-dark-text mb-1 leading-none"
        >
          Confirme a Senha
        </label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          className="bg-dark-primary border-dark-border p-3 rounded-md text-white focus:ring-2
                  focus:ring-brand-green/50 focus:border-brand-green
                    hover:border-brand-green/50 hover:transition"
        />
      </div>

      <button
        type="submit"
        className="flex flex-1 justify-center p-3 mt-2 rounded-md bg-brand-green text-dark-secondary text-center"
      >
        Cadastrar
      </button>
      <div>
        <p className="text-sm text-white">
          Já possí conta?{" "}
          <Link href="/entrar" className="text-brand-green">
            Faça o login
          </Link>
        </p>
      </div>
    </form>
  );
}
