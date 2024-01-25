"use client";

import { FormEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPassword() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const privateCode = searchParams.get("code");

    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    try {
      // if passwords dont match return a new error that trigger the catch block and set the passwordError state to true
      if (password !== confirmPassword) {
        setLoading(false);

        setError(true);

        setMessage("Senhas não conferem");

        return new Error("Senhas não conferem");
      }

      if (password === "" || confirmPassword === "") {
        setLoading(false);

        setError(true);

        setMessage("Preencha os campos");

        return new Error("Preencha os campos");
      }

      // if passwords match, send a request to the api to reset the password
      const res = await fetch("api/user/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: privateCode,
          password: password,
          passwordConfirmation: confirmPassword,
        }),
      });

      // await for the strapi response fowarded by the api handler and set the response to the 'data' variable
      const data = await res.json();

      const { error } = data;

      if (error && error.message === "Incorrect code provided") {
        setLoading(false);
        setError(true);
        setMessage("Código inválido. Reenvie o email de confirmação");
        return new Error("Código inválido.");
      }

      // if the response status is not 200, return a new error
      if (res.status !== 200) {
        setLoading(false);
        setError(true);
        setMessage("Erro ao resetar senha");
        console.log("Erro ao resetar senha: ", data.message);
        return new Error(data.message);
      }

      router.push("/entrar");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[250px] flex flex-col gap-3">
      <div className="flex flex-col w-full">
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Nova senha"
          className=" text-sm bg-dark-secondary rounded-md border border-dark-border placeholder:text-sm placeholder:text-dark-text"
        />
      </div>

      <div className="flex flex-col w-full">
        <input
          required
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirme a nova senha"
          className="text-sm bg-dark-secondary rounded-md border border-dark-border placeholder:text-sm placeholder:text-dark-text"
        />
      </div>
      <button className="p-2 rounded-md bg-brand-green/20 text-brand-green text-sm text-center">
        {loading ? "Carregando..." : "Redefinir senha"}
      </button>
      {error && (
        <p className="flex justify-between text-sm p-2 rounded-md bg-red-500/20 text-red-600">
          {message}
          <button onClick={() => setError(false)}>Fechar</button>
        </p>
      )}
    </form>
  );
}
