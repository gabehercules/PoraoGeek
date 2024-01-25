"use client";

import { FormEvent, useState } from "react";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"Erro" | "Info" | "">("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const email = e.currentTarget.email.value;

    // console.log(email);

    try {
      const response = await fetch("/api/user/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { error } = await response.json();

      if (error && error.message === "email is a required field") {
        console.log("CAIU NO IF ERROR NO FRONT: ", error);
        setLoading(false);
        setStatus("Erro");
        setMessage("Email é um campo obrigatório");

        return;
      }

      // console.log(res);
      setLoading(false);
      setStatus("Info");
      setMessage("Acabamos de enviar um email para você");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[250px] flex flex-col gap-3">
      <input
        required
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
          Solicitar redefinição de senha
        </button>
      )}
      {status && (
        <p className="flex items-center justify-between text-sm">
          {message}
          <button
            onClick={() => setStatus("")}
            className="text-sm p-1 rounded bg-red-500/20 text-red-500"
          >
            Fechar
          </button>
        </p>
      )}
    </form>
  );
}
