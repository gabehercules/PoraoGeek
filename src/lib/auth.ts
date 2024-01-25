import { getUserAvatar } from "@/utils/getUserData";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import Discord from "next-auth/providers/discord";

const actualDateInSeconds = Math.floor(Date.now() / 1000);

const tokenExpirationInSeconds = Math.floor(7 * 24 * 60 * 60);

export const authOptions = {
  // Configure one or more authentication providers

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days - Padrão do Strapi (validar se seria bom mudar para 30 dias)
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        // console.log("1 - #### CREDENTIAL PASSADA NO AUTH", credentials);

        // Add logic here to look up the user from the credentials supplied
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
            {
              cache: "no-cache",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                identifier: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          const data = await response.json();

          // console.log("2 - #### DATA DO STRAPI", data);

          const { jwt, user, error } = await data;

          // desestruturado o error de dentro do 'data' para a checagem abaixo, se o strapi
          // retornar um erro, o erro será retornado para o next-auth e o usuário não será logado
          if (error) {
            // console.log("error do STRAPI", error);
            throw error;
          }

          // console.log("3 - #### USER DO STRAPI", user);
          const { id, username, email } = user;

          if (!jwt || !id || !username || !email) {
            console.log("Missing data from Strapi");
            return null;
          }

          // Busca o avatar url do usuário no strapi (SOMENTE NO STRAPI, NÃO NO PROVIDER!!!)
          const avatarUrl = await getUserAvatar(jwt);

          // console.log("AVATAR URL NO AUTH", avatarUrl);

          return {
            jwt,
            id,
            email,
            name: username, // Pensar em padronizar depois para 'username' como no strapi
            image: avatarUrl,
          };
        } catch (error) {
          // console.log("ERROR DO STRAPI", error);
          return null;
        }
      },
    }),
    // Discord({
    //   clientId: process.env.DISCORD_CLIENT_ID as string,
    //   clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    // }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, session }) => {
      // console.log("4 - #### TOKEN NO JWT CALLBACK", token);
      // console.log("5 - #### USER NO JWT CALLBACK", user);
      // console.log("6 - #### ACCOUNT NO JWT CALLBACK", account);
      // console.log("6 - #### PROFILE NO JWT CALLBACK", profile);
      // console.log("6 - #### SESSION NO JWT CALLBACK", session);

      const isSignIn = !!user;

      // checa se o usuário está fazendo o login
      if (isSignIn) {
        // Checa se o usuário está fazendo o login com o discord.
        // Se estiver fazendo o login com o discord, faz um fetch para o strapi passando o token do discord que foi retornado
        if (account && account.provider === "discord") {
          // console.log("#### USER NO IF DO ACCOUNT PROVIDER DISCORD");
          // Chama o endpoint do strapi passando o token do discord
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/discord/callback?access_token=${account?.access_token}`
          );

          // Pega os dados retornados da resposta do strapi e seta o token com a função setToken(data) passando o 'data'
          // INFO - O strapi não retorna o avatar na resposta porque o avatar é do PROVIDER!!!.
          // Buscar uma forma de pegar o avatar e setar no token
          const data = await response.json();

          console.log("#### RESPONSE NO IF DO ACCOUNT PROVIDER DISCORD", data);

          // Desestruturado o JWT e o USER de dentro do 'data' vindos da RESPONSE do STRAPI
          const { jwt, user } = data;

          const { id, username, email } = user;

          console.log("7 - #### DATA NO [FETCH] AUTH DISCORD COM TOKEN", data);

          const image = token?.picture || "";

          token = setToken({ jwt, image, id, name: username, email });
          return Promise.resolve(token);
        } else {
          // Se o usuário não estiver fazendo o login com o discord, seta o token com a função setToken(user) passando o 'user'
          // Os dados de user virão do provider Credentials
          // console.log("USER NO ELSE IS SIGNIN COM CREDENTIALS", user);
          token = setToken(user);
          return Promise.resolve(token);
        }
      } else {
        if (!token.expiration) return Promise.resolve({});

        if (actualDateInSeconds > Number(token.expiration))
          return Promise.resolve({});
      }

      return Promise.resolve(token);
    },
    session: async ({ session, token }): Promise<any> => {
      // console.log("6 - #### SESSION NO SESSION CALLBACK", session);
      // console.log("7 - #### TOKEN (MODIFICADO) NO SESSION CALLBACK", token);

      if (
        !token?.jwt ||
        !token?.expiration ||
        !token?.id ||
        !token?.name ||
        !token?.email ||
        !token?.picture
      ) {
        return null;
      }

      session.accessToken = token.jwt;
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        image: token.picture,
      };

      return { ...session };
    },
  },
} satisfies NextAuthOptions;

// Data está tipado como 'any' mas seria o tipo do 'user' vindo do strapi - tipar depois
const setToken = (data: any) => {
  // console.log("8 - #### DATA NO SET TOKEN", data);
  if (!data || !data?.jwt || !data?.id || !data?.name || !data?.email)
    return {};

  return {
    jwt: data.jwt,
    id: data.id,
    name: data.name,
    email: data.email,
    picture: data.image,
    expiration: actualDateInSeconds + tokenExpirationInSeconds,
  };
};
