import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Quantico } from '@next/font/google'

const quantico = Quantico({
  weight: ['400', '700'], 
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quantico.className}>
      <Component {...pageProps} />
    </main>
  )
}
