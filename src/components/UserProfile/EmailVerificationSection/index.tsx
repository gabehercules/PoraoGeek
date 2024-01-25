"use client";

export default function EmailVerificationSection({ email }: { email: string }) {
  const handleSendEmailConfirmation = async () => {
    await fetch("/api/send/email/confirmation-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
  };
  return (
    <div>
      <h1>Enviar email de confirmação</h1>
      <button
        onClick={handleSendEmailConfirmation}
        className="flex w-min text-sm p-2 rounded bg-brand-green/20 text-brand-green whitespace-nowrap mb-5"
      >
        Confrimar email
      </button>
    </div>
  );
}
