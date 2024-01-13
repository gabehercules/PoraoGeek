"use client";

import { useState } from "react";

export default function Page() {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const pixCode = "donate@poraogeek.com.br";

    navigator.clipboard
      .writeText(pixCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((error) => console.error("Erro ao copiar a chave PIX: ", error));
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col gap-8 w-[768px] pt-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Ajude o Porão Geek a continar entregando conteúdo de qualidade e
            mover essa comunidade que nos inspira!
          </h1>
          <p className="text-zinc-400">
            O Porão se compromete sempre, a proporcionar um nível de conteúdo de
            alta qualidade, visando mater nossa comunidade sempre engajada e
            entretida, além de proporcionar experiências únicas e valorozas.
            Essa é a missão do Porão Geek, e precisamos da sua ajuda para
            continuar!
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">
            Como você pode apoiar o Porão:
          </h2>
          <p className="text-zinc-400">
            O Porão está aberto a qualquer tipo de apoio, seja ele monetário,
            direto ou indireto (através de compras usando nossos links) ou
            simplemente dando seu feedback sobre nossa plataforma, conteúdos,
            recursos, funcionalidades e o que mais quiser comentar.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Formas de ajudar:</h2>

          <div>
            <h3 className="text mb-2">Doação via pix</h3>
            <p className="text-zinc-400">
              Basta copiar nossa chave pix, e efetuar a doação pelo app do seu
              banco. A Doação é completamente anônima e não será exposta em
              nunhum lugar. Caso queira, você pode nos enviar o comprovante de
              doação no mesmo email da chave pix, e nós te enviaremos um
              agradecimento especial!
            </p>
            <div className="flex w-fit rounded-md border border-zinc-800 overflow-hidden mt-4">
              <p className="flex items-center justify-center text-sm py-2 px-3 pointer-events-none bg-dark-contrast">
                Chave pix
              </p>
              <span className="flex gap-1 items-center p-1 text-zinc-500 bg-zinc-900">
                donate@poraogeek.com.br
                <button
                  onClick={handleCopyToClipboard}
                  className="w-6 h-6 flex items-center justify-center p-[2px] rounded hover:bg-dark-contrast hover:text-brand-green duration-300 transition-colors"
                >
                  {copied ? (
                    <>
                      👌
                      <span className="text-xs absolute p-1 bg-dark-contrast rounded translate-x-12">
                        Copiado!
                      </span>
                    </>
                  ) : (
                    "👀"
                  )}
                </button>
              </span>
            </div>
          </div>

          <div>
            <h3 className="text mt-6 mb-2">Doação via Patreon: Em breve</h3>
          </div>

          <div>
            <h3 className="text mt-6 mb-2">
              Apoio contínuo no Apoia.se: Em breve
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
