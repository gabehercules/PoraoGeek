import { fetchCategoriesList } from "@/lib/fetch-categories";
import Link from "next/link";

export default async function CategoriesNav() {
  const categories = await fetchCategoriesList();

  // componentizar os links. Para trabalhar com o hook usePathname o componente precisa ser client side
  // porem preciso que este aqui continue server side para o fetch dos dados
  // obs: usar o usePathname para criar links que mudam de estilo quando a pagina atual é a mesma que o link aponta

  return (
    <div className="flex flex-1 items-center">
      <ul className="h-full flex items-center">
        {categories.map((category: any) => (
          <li key={category.id} className="h-full">
            <Link
              href={`/noticias/c/${category.attributes.slug}`}
              className="flex py-2 px-4 h-full text-sm border-b border-transparent hover:border-brand-green transition-colors duration-200 hover:bg-gradient-to-t hover:from-brand-green/20 hover:from-10% hover:to-[#FFFFFF00] hover:to-50%"
            >
              {category.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
