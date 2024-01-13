"use client";

import { FormEvent, useState } from "react";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const email = e.currentTarget.email.value;

    // console.log(email);

    try {
      const res = await fetch("/api/user/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // console.log(res);
      setLoading(false);
      setMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[250px] flex flex-col gap-3">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu e-mail cadastrado"
        className="text-sm bg-dark-secondary rounded-md border border-dark-border placeholder:text-sm placeholder:text-dark-text"
      />
      {loading ? (
        <button
          disabled
          className="p-2 rounded-md bg-red-500/20 text-red-600 text-sm text-center disabled:bg-red-500/10"
        >
          Carregando
        </button>
      ) : (
        <button className="p-2 rounded-md bg-red-500/20 text-red-600 text-sm text-center">
          solicitar redefinição de senha
        </button>
      )}
      {message ? (
        <p className="flex items-center justify-between text-sm">
          Confira sua caixa de entrada{" "}
          <button onClick={() => setMessage(false)}>Fechar</button>
        </p>
      ) : null}
    </form>
  );
}
