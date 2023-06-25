import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Familjen_Grotesk } from "next/font/google";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${familjenGrotesk.className} h-screen`}>
      <Component {...pageProps} />
    </main>
  );
}
