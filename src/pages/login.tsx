import React from "react";
import { DiscordAlt, Google } from "@styled-icons/boxicons-logos/";
import Logo from "../components/Logo";

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="w-[52vw] bg-[url('/hero-login.webp')]">Image</div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-[400px] flex shadow-md">
          <form
            action="/dashboard"
            method="POST"
            id="login-form"
            className="flex flex-col flex-1 gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="w-[150px] mb-6">
                <Logo />
              </div>
              <h1 className="text-3xl text-white font-bold text-center mb-6">
                Bem-vindo(a), novamente!
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
              ou entre com e-mail e senha
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
                className="bg-darker-bg border-dark-border p-3 rounded-md text-white focus:ring-2
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
                className="bg-darker-bg border-dark-border p-3 rounded-md text-white focus:ring-2
                  focus:ring-brand-green/50 focus:border-brand-green
                    hover:border-brand-green/50 hover:transition"
              />
              <a
                href="#"
                className="flex items-start text-sm text-dark-text underline mt-1"
              >
                Esqueci minha senha
              </a>
            </div>

            <button
              type="submit"
              className="flex flex-1 justify-center p-3 mt-2 rounded-md bg-brand-green text-dark-bg text-center"
            >
              Entrar
            </button>
            <div>
              <p className="text-sm text-white">
                Não tem uma conta?{" "}
                <a href="#" className="text-brand-green">
                  Cadastre-se
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
