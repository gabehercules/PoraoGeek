"use client";

import { useState } from "react";
import { LoaderAlt } from "@styled-icons/boxicons-regular";

export default function SidePanel() {
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      //   setSubscribed(true);

      console.log(loading);
    }, 3000);

    console.log("subscribed");

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(email),
    });

    console.log(formData.get("email"));
    console.log(formData);

    setLoading(false);
    setSubscribed(true);
  }

  return (
    <div className="sidepanel border-l border-dark-border">
      <div className="p-4">
        <h1 className="text-brand-green font-semibold mb-2">Newsletter</h1>
        <p className="border-b text-sm mb-2 pb-2 text-dark-text border-dark-border">
          Assine nossa newsltetter e receba no email as novidades em primeira
          mão sobre a plataforma
        </p>
        <form onSubmit={handleSubscribe}>
          <label htmlFor="email" className="text-sm mb-1">
            Seu email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="luke.skywalker@theforce.space"
            className="w-full p-2 text-sm rounded border bg-dark-primary border-dark-border focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent placeholder:text-dark-text"
          />
          <button
            type="submit"
            className="w-full text-sm p-2 mt-2 rounded bg-brand-green/20 text-brand-green hover:bg-brand-green/10 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors duration-200"
          >
            {!loading ? (
              "Cadastrar na Newsletter"
            ) : (
              <span>
                <LoaderAlt
                  width={16}
                  className="text-brand-green animate-spin"
                />
              </span>
            )}
          </button>
          {subscribed ? <p>Você foi cadastrado na newsletter!</p> : " "}
        </form>
      </div>
    </div>
  );
}
