import Link from "next/link";

async function getCategoriesList() {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/categories`);

    return res.json();
  } catch (error) {
    console.error("Erro ao buscar lista de categorias", error);
  }
}

export default async function CategoriesNav() {
  const { data: categories } = await getCategoriesList();

  console.log("RESPOSTA", categories);

  return (
    <div className="">
      <ul className="flex gap-4 justify-center">
        {categories.map((category: any) => (
          <li>
            <Link href={`/noticias/c/${category.attributes.slug}`}>
              {category.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
