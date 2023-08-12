import "../../../styles/globals.css";
import Layout from "../../components/Layout";
import Provider from "../../contexts/Session/Provider";

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
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
