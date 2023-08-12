"use client";

import { FormEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { X, Loader } from "@styled-icons/boxicons-regular";

export default function ResetPassword() {
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const privateCode = searchParams.get("code");

    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    console.log(password, confirmPassword);

    try {
      // if passwords dont match return a new error that trigger the catch block and set the passwordError state to true
      if (password !== confirmPassword) {
        // console.log("Senhas não conferem");
        setPasswordError(true);
        setLoading(false);
        return new Error("Senhas não conferem");
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

      // if the response status is not 200, return a new error
      if (res.status !== 200) {
        setLoading(false);
        console.log("Erro ao resetar senha: ", data.message);
        return new Error(data.message);
      }

      // console.log("Senha resetada com sucesso");
      router.push("/entrar");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[250px] flex flex-col gap-3">
      <div className="flex flex-col w-full">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Nova senha"
          className=" text-sm bg-dark-secondary rounded-md border border-dark-border placeholder:text-sm placeholder:text-dark-text"
        />
      </div>

      <div className="flex flex-col w-full">
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirme a nova senha"
          className="text-sm bg-dark-secondary rounded-md border border-dark-border placeholder:text-sm placeholder:text-dark-text"
        />
      </div>
      <button className="p-2 rounded-md bg-brand-green/20 text-brand-green text-sm text-center">
        {loading ? <Loader width={16} /> : "Redefinir senha"}
      </button>
      {passwordError && (
        <p className="flex justify-between text-sm p-2 rounded-md bg-red-500/20 text-red-600">
          Senhas não conferem
          <button onClick={() => setPasswordError(false)}>
            <X width={16} />
          </button>
        </p>
      )}
    </form>
  );
}
