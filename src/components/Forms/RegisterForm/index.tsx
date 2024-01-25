"use client";

import { FormEvent, useState } from "react";
import Logo from "../../Logo";
import Link from "next/link";
import { BiX } from "react-icons/bi";

export default function RegisterForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (!email || !password || !confirmPassword) {
      setLoading(false);
      setError(true);
      setMessage("Preencha todos os campos!");
      return;
    }

    if (password !== confirmPassword) {
      setLoading(false);
      setError(true);
      setMessage("As senhas não são iguais!");
      return;
    }

    try {
      // O endpoint de cadastro no STRAPI precisa do campo username
      // Vou setar um username baseado no email, para não dar erro no /register
      //
      // TODO: Quebrar o cadastro em duas etapas, primeiro o usuário cria a conta
      // com email e senha, e depois ele preenche um segundo FORM com demais dados
      // necessários. Ex. Na segunda etapa ele preenche o username, nome, sobrenome...
      // Abre possibilidades ate para uma checagem de username, setar opções...
      // Na verdade acho que viraria um onboarding... Avaliar...

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      });

      if (!response.ok) {
        setLoading(false);
        setError(false);
        setMessage("Erro ao realizar o cadastro!");
        return;
      }

      setLoading(false);

      console.log("ACESSOU O ENDPOINT DE CADASTRO DO STRAPI");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col flex-1 gap-6">
      {/* Headline */}
      <div className="flex flex-col items-center">
        <div className="w-[150px] mb-6">
          <Logo />
        </div>
        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Cadastre-se no Porão Geek
        </h1>
      </div>

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
          className="bg-dark-contrast border-dark-border p-3 rounded-md text-white focus:ring-2
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
          className="bg-dark-contrast border-dark-border p-3 rounded-md text-white focus:ring-2
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
          className="bg-dark-contrast border-dark-border p-3 rounded-md text-white focus:ring-2
                  focus:ring-brand-green/50 focus:border-brand-green
                    hover:border-brand-green/50 hover:transition"
        />
      </div>

      <button
        type="submit"
        className="flex flex-1 justify-center p-3 mt-2 rounded-md bg-brand-green text-dark-secondary text-center"
      >
        {loading ? "Carregando..." : "Cadastrar"}
      </button>

      <div>
        <p className="text-sm text-white">
          Já possí conta?{" "}
          <Link href="/entrar" className="text-brand-green">
            Faça o login
          </Link>
        </p>
      </div>
      {error && (
        <p className="flex items-center justify-center gap-6 p-3 rounded text-sm bg-red-500/20 text-red-500 text-center">
          {message}{" "}
          <button
            onClick={() => setError(false)}
            className="p-2 rounded bg-red-500/10"
          >
            <BiX />
          </button>
        </p>
      )}
    </form>
  );
}
