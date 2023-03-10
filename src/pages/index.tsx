import Head from "next/head";
import Header from "../components/Header";
// import NewsletterForm from "../components/NewsletterFrom";

export default function Home() {
  return (
    <>
      <Head>
        <title>Porão Geek</title>
        <meta
          name="description"
          content="Porão Geek - Onde mundos se conectam"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="bg-[url('/hero-bg.jpg')] bg-center w-screen flex flex-1 justify-center pt-10">
          <div className="max-w-[800px]">
            <h1 className="text-center font-f text-white text-7xl font-extrabold mb-10 leading-tight">
              Explore o mundo que você quiser!
            </h1>
            <p className="text-lg font-light text-[#969696] text-center mb-8">
              Explore conteúdos sobre seus games, series e filmes favoritos,
              fique ligado nas notícias, jogue e interaja no Porão. Onde mundos
              se conectam.
            </p>
            <div className="flex flex-col items-center justify-center">
              <button
                className="py-2 px-4 border text-zinc-400 border-zinc-600 transition hover:text-white hover:border-[#00FF85] rounded"
                data-tally-open="wa92Gb"
                data-tally-hide-title="1"
                data-tally-layout="modal"
                data-tally-align-left="1"
                data-tally-overlay="1"
              >
                Inscreva-se na newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
