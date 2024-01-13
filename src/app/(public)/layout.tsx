import MainHeader from "@/components/MainHeader";
import Provider from "@/contexts/Session/Provider";
import MainTopBar from "@/components/MainTopBar";

import CategoriesNav from "@/components/CategoriesNav";
import SearchBar from "@/components/SearchBar";

import "../../../styles/globals.css";
import MainNavigation from "@/components/MainNavigation";

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
          <MainHeader></MainHeader>
          <MainTopBar>
            {/* <SearchBar /> */}
            <CategoriesNav />
          </MainTopBar>
          <main className="main-container p-6 overflow-y-auto">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
