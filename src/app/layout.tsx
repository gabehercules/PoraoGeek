import "../../styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
