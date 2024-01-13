import { Post, PostsMeta } from "@/types/strapi-models";
import { getApiURL } from "@/utils/get-api-url";

// INFO: helper que retorna os posts da API
// pode receber um queryParams para filtrar os posts, popular campos, limitar a resposta, etc
// consultar as docs do strapi para detalhes sobre o que pode ser passado
// no query params: https://docs.strapi.io/

// DOCS: esta função busca os posts da API e retorna um array de posts
// CATEGORY - OPCIONAL: espera receber uma string para filtrar os posts por categoria - atualmente usado para
//          receber o searchParams = [slug: string] da página de categoria (novidades/c/[slug]/page.tsx)
//          o slug é passado como parâmetro na URL da página de categoria e é usado para filtrar os posts como
//          argumento da função getPosts
// QUERY PARAMS - OPCIONAL: recebe um queryParams para filtrar os posts, popular campos, etc
//          por padrão, o queryParams assume uma string vazia
//
//
// ATENÇÃO: por padrão a função getPosts não incluir posts em destaques (featured_post: true)
//          para incluir posts em destaques, é necessário passar o queryParams = "&filters[featured_post][$eq]=true"
//          como argumento na invocação da função no componente que a está chamando

export async function getPosts(
  category?: string,
  queryParams = "",
  page = 1,
  limit = 8
): Promise<{ data: Post[] | []; meta?: PostsMeta }> {
  try {
    let categoryQuery = category
      ? `&filters[category][slug][$eq][0]=${category}`
      : "";

    // o log abaixo debuga o valor passado para o categoryQuery
    // console.log("categoryQuery", categoryQuery);

    let paginationPage = `&pagination[page]=${page}`;
    let pageLimit = `&pagination[pageSize]=${limit}`;
    let notFeatured = "&filters[featured_post][$eq][1]=false";

    const apiUrl = getApiURL(); // helper que retorna a URL da API - eg: http://localhost:1337/api/
    const response = await fetch(
      `${apiUrl}/posts?sort[0]=createdAt:desc${categoryQuery}${queryParams}${notFeatured}${paginationPage}${pageLimit}`
    );

    // o log abaixo debuga a URL da API que é passada para o fetch - util para debugar as queries na requisição
    // console.log("RESPONSE", response.url);
    const { data, meta } = await response.json();
    // console.log("META", meta);

    if (!data) {
      throw new Error("Data not found - check the API availability");
    }

    if (data.length === 0) {
      return {
        data,
        meta,
      };
    }

    return {
      data,
      meta,
    };
  } catch (error) {
    console.error("error", error);
    return {
      data: [],
    };
  }
}

// IDEAS para melhorar a função getPosts:
// - quais parametros posso receber na função getPosts:
//   - filtros
//     - por categoria
//     - por autor
//     - por meta (destaque: true ou false)
//   - ordenar
//     - por data de criação
//     - por data de atualização
//     - por ordem alfabética
//   - paginação
//     - pagina atual
//     - limite de posts por página
