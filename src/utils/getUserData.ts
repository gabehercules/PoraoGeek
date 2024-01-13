// Esta função vai ser reconstruida em breve. Evitar usar por enquanto.

export async function getUserData(token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/me?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}

// A função abaixo busca o avatar do usuário no strapi. Uma vez que o avatar é um campo do tipo relation
// por padrão não é retornado no endpoint de login do strapi.
//
// Este helper ajuda a trazer o avatar, passando como argumento o token do usuário.
//
// Atualemnte não tem como buscar na resposta somente o 'avatar: {url}', pois o strapi retorna
// todo o objeto do usuário junto. A solução atual que encontrei foi passar o fields[0]=id
// para que o strapi SÓ retorne o id do usuário e o avatar, em vez de TODOS os campos
// como {name, email, id, avatar, created_at, updated_at, etc}
//
// A intenção é passar o avatar.url para a session do next-auth e ter disponivel na session o avatar

// DOCS da getUserAvatar();
// O token é um argumento obrigatório, pois é necessário para fazer a requisição autenticada ao strapi
// A princípio esse helper só será usado em conjunto com o next-auth, para passar o avatar do usuário para a session
// O retorno é um objeto com o avatar do usuário => e.g. avatar: {id: 1, url: "res.cloudinary.com/..."}

export async function getUserAvatar(
  token: string
): Promise<string | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/me?fields[0]=id&populate[avatar][fields]=url`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { avatar } = await response.json();

    console.log("AVATAR", avatar);

    if (!avatar) {
      return "no avatar";
    }

    // IDEIA: retornar um path como fallback para um avatar genérico
    return avatar.url;
  } catch (error) {
    console.log(error);
  }
}
