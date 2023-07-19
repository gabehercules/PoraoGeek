import "../../../styles/globals.css";
import Layout from "../../components/Layout";

export const metadata = {
  title: "Porão Geek",
  description: "Onde Mundos Se Conectam!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
