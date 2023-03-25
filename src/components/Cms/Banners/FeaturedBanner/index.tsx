import React from "react";

export default function FeaturedBanner() {
  return (
    <div className="flex gap-3 w-[650px]">
      <div className="flex flex-col items-start">
        <h3 className="text-md font-bold text-white mb-1">
          Complete seu perfil para ganhar Shards e XP
        </h3>
        <p className="text-dark-text leading-tight">
          Completando seu perfil você pode ganhar até 500 Shards e 1000 XP!
        </p>
        <div className="flex items-start gap-2">
          <a
            href="#"
            className="flex mt-2 text-sm text-dark-text bg-dark-bg py-1 px-3 border rounded-[4px]
                transition border-dark-border hover:border-brand-green hover:text-white"
          >
            Ir para configurações
          </a>
          <a
            href="#"
            className="flex mt-2 text-sm text-dark-text bg-dark-bg py-1 px-3 border rounded-[4px]
                transition border-transparent hover:bg-darker-bg"
          >
            Talvez depois
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
}
