import NextAuth from "next-auth";
import type { NextAuthOptions, Session } from "next-auth";
import { AdapterSession } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days - Padrão do Strapi (validar se seria bom mudar para 30 dias)
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        console.log("credentials do NEXT-AUTH", credentials);
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

          const { jwt, user, error } = await data;

          // desestruturado o error de dentro do 'data' para a checagem abaixo, se o strapi
          // retornar um erro, o erro será retornado para o next-auth e o usuário não será logado
          if (error) {
            console.log("error do STRAPI", error);
            return null;
          }

          console.log("user do STRAPI", user);
          const { id, username, email } = user;

          if (!jwt || !id || !username || !email) {
            console.log("Missing data from Strapi");
            return null;
          }

          return {
            jwt,
            id,
            email,
            name: username,
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
      console.log("TOKEN", token);
      console.log("USER", user);

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
      if (
        !token?.jwt ||
        !token?.expiration ||
        !token?.id ||
        !token?.name ||
        !token?.email
      ) {
        return null;
      }

      session.accessToken = token.jwt;
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
      };

      return { ...session };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
