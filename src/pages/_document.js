import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="pt-BR"
    >
      <Head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </ Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}