import Head from 'next/head'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Porão Geek</title>
        <meta name="description" content="Porão Geek - Onde mundos se conectam" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-[url('/hero-bg.jpg')] w-screen h-screen flex justify-center items-center">
      <div className="max-w-[800px]">
        <div className="w-[200px] m-auto mb-6">
          <Logo />
        </div>
        <h1 className="text-center text-white text-7xl font-extrabold mb-10 leading-snug">Explore o <span className="text-[#00FF85]">mundo</span> que você quiser.</h1>
        <p className="text-lg font-light text-[#969696] text-center mb-8">Explore conteúdos sobre seus games, series e filmes favoritos, fique ligado nas notícias, jogue e interaja no Porão. Onde mundos se conectam.</p>
        <h1 className="text-center text-white text-5xl font-extrabold mb-10 leading-snug">2023</h1>
      </div>
    </div>
    </div>
  )
}
