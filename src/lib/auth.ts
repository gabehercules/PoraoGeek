import { getUserAvatar } from "@/utils/getUserData";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
            console.log("error do STRAPI", error);
            return null;
          }

          // console.log("3 - #### USER DO STRAPI", user);
          const { id, username, email } = user;

          if (!jwt || !id || !username || !email) {
            console.log("Missing data from Strapi");
            return null;
          }

          const avatarUrl = await getUserAvatar(jwt);

          // console.log("AVATAR URL NO AUTH", avatarUrl);

          return {
            jwt,
            id,
            email,
            name: username,
            image: avatarUrl,
          };
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      // console.log("4 - #### TOKEN NO JWT CALLBACK", token);
      // console.log("5 - #### USER NO JWT CALLBACK", user);

      const isSignIn = !!user;

      const actualDateInSeconds = Math.floor(Date.now() / 1000);
      const tokenExpirationInSeconds = Math.floor(7 * 24 * 60 * 60);

      if (isSignIn) {
        if (!user || !user.jwt || !user.name || !user.email || !user.id) {
          return Promise.resolve({});
        }

        token.jwt = user.jwt;
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image; // avatar retornado pelo strapi

        token.expiration = Math.floor(
          actualDateInSeconds + tokenExpirationInSeconds
        );
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
