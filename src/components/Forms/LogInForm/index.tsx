"use client";

import { FormEvent, useState } from "react";
import Logo from "../../Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LogInForm() {
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSignIn = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await signIn("credentials", {
      redirect: false,
      email: email as string,
      password: password as string,
    });

    if (response?.error) {
      console.log("RES NOT OK", response);
      setError(true);
      // setTimeout(() => setError(false), 3000);
      return;
    }
    router.push("/");
  };

  // const handleDiscordSignIn = async () => {
  //   await signIn("discord", {
  //     callbackUrl: "/",
  //   });
  // };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <div className="w-[150px] mb-6">
          <Logo />
        </div>
        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Bem-vindo(a), novamente!
        </h1>
      </div>

      <div className="relative flex flex-col gap-4 flex-1">
        <button
          disabled
          className="flex flex-1 items-center justify-center gap-2 border p-3 border-transparent rounded-md font-semibold text-white bg-blue-600 disabled:opacity-25"
        >
          Entre com o Discord{" "}
        </button>
        <span className="absolute -top-2 left-2 font-normal text-[10px] py-[2px] px-[4px] border border-dark-border rounded bg-dark-secondary cursor-default">
          em breve
        </span>
      </div>
      <form
        onSubmit={handleSignIn}
        id="login-form"
        className="flex flex-col flex-1 gap-6"
      >
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
            type="text"
            name="email"
            id="email"
            className="
          bg-dark-contrast border-dark-border p-3 rounded-md text-white focus:ring-2
          focus:ring-brand-green/50 focus:border-brand-green hover:border-brand-green/50
          hover:transition"
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
          <Link
            href="/redefinir-senha"
            className="flex items-start text-sm text-dark-text underline mt-1"
          >
            Esqueci minha senha
          </Link>
        </div>

        <button
          type="submit"
          className="flex flex-1 justify-center p-3 mt-2 rounded-md bg-brand-green text-dark-secondary text-center"
        >
          Entrar
        </button>
        <div>
          <p className="text-sm text-white">
            Cadastro fechado, caso queira solicitar uma conta para teste, nos
            envie um email para{" "}
            <a
              href="mailto:contato@poraogeek.com.br?subject=Solicitação de conta para teste"
              className="text-brand-green"
            >
              contato@poraogeek.com.br
            </a>
          </p>
        </div>

        {error === true && (
          <div className="flex justify-between items-center p-3 rounded-md text-sm font-medium bg-red-500/10 text-red-500">
            <p>Usuário ou senha inválidos</p>
            <span>
              <button onClick={() => setError(false)}>Fechar</button>
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
