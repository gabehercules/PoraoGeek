import Link from "next/link";

async function getPostsByQuery(query: string) {
  // ideia: fazer o fetch buscar resultados onde a query não esteja somente no 'post_title'
  // mas também em tags, categorias, etc para obter resultados mais relevantes/numerosos
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/posts?filters[post_title][$contains]=${query}&pagination[page]=1&pagination[pageSize]=8&populate=*`
    );
    const { data } = await response.json();
    if (data.length > 0) {
      return data;
    }
  } catch (error) {
    console.error("Erro ao buscar lista de posts", error);
  }
}

export default async function page({ params }: { params: { query: string } }) {
  const posts = await getPostsByQuery(params.query);

  // não sei se vou precisar disso, avaliar se devo tirar
  const decodeQueryURI = (query: string) => {
    const decodedQuery = decodeURIComponent(query);
    return decodedQuery;
  };

  // lembrar de tirar o p-[50px]. os 50px de espaçamento devem ser incluindos em um componente
  // de 'layout' que limite o tamanho do container em calc(100% - 100px) -> 100px = 50px de padding em cada lado
  return (
    <div className="w-full p-[50px]">
      <h1 className="text-xl font-semibold">Busca</h1>
      {decodeQueryURI(params.query)}
      {!posts ? (
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-full h-[320px] text-dark-text bg-dark-secondary rounded-lg">
            imagem placeholder para query vazia (tipo aquelas ilustrações de
            "nada aqui")
          </div>
          <p>Nenhum post encontrado</p>
          <Link
            href={"/"}
            className="flex self-start p-2 rounded bg-brand-green text-dark-primary"
          >
            Voltar à Dashboard
          </Link>
          {/* // ideia: colocar um botão para voltar para a home
          // ideia: posts recomendados */}
        </div>
      ) : (
        <div>
          {posts.map((post: any) => (
            <div key={post.id}>
              <h1>{post.attributes.post_title}</h1>
              <p>{post.attributes.post_description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}