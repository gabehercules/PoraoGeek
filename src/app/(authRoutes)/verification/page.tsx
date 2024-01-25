"use client";
import { useSearchParams } from "next/navigation";

export default function Verification() {
  const searchParams = useSearchParams();

  const confirmationCode = searchParams.get("confirmation");
  return (
    <div>
      <h1>Verificação</h1>
      {confirmationCode && (
        <div>
          <h2>Confirmação de email</h2>
          <p>Seu email foi confirmado com sucesso!</p>
        </div>
      )}
    </div>
  );
}
