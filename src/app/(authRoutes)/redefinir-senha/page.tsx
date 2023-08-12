"use client";
import { useSearchParams } from "next/navigation";

import ForgotPassword from "../../../components/Forms/ForgotPassword";
import ResetPassword from "../../../components/Forms/ResetPassword";

export default function Page() {
  const searchParams = useSearchParams();

  const privateCode = searchParams.get("code");

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-lg font-medium mb-4">Redefina sua senha</h1>
      {!privateCode ? <ForgotPassword /> : <ResetPassword />}
    </div>
  );
}
