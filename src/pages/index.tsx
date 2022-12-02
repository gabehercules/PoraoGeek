import Head from 'next/head'
// import Image from 'next/image'
import Logo from "../components/Logo"


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Porão Geek</title>
        <meta name="description" content="Porão Geek - Onde mundos se conectam" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <div className="w-[200px] m-auto mb-6">
          <Logo />
        </div>
        <p className="text-center text-white text-lg mb-2">Uma experiência única está por vir</p>
        <h3 className="text-3xl font-bold text-white text-center">2023</h3>
      </div>
    </div>
    </div>
  )
}
