import Head from "next/head";
import Header from "../components/Header";


export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Porão Geek</title>
        <meta
          name="description"
          content="Porão Geek - Onde mundos se conectam"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="flex flex-col gap-6 max-w-[650px] text-white m-auto py-6">
        <p className="text-lg text-zinc-300">
          Se você está aqui é porque você gosta do mesmo que nós!
        </p>
        <p className="text-lg text-zinc-300">
          Nosso objetivo no Porão Geek é unir todos os geeks, nerds, otakus e
          amantes da cultura pop em geral em um único lugar, onde as pessoas
          podem consumir o conteúdo que mais gostam, enquanto se divertem.
        </p>
        <p className="text-lg text-zinc-300">
          O Newgate é apenas um codinome para um dos meios aos quais o Porão
          Geek vai atingir esse objetivo. A ideia é criar um ambiente onde o
          amantes de RPG de mesa possam se reunir e jogar seus jogos favoritos,
          seja online ou presencialmente.
        </p>
        <p className="text-lg text-zinc-300">
          Por enquanto ainda é cedo para falar muito sobre o projeto, fiquem
          ligados que em breve teremos mais novidades!
        </p>
      </div>
    </>
  );
}
