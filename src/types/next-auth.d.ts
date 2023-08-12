import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    accessToken: object;
    expires: string;
    user: {
      id: number | {};
      name: string;
      email: string;
    };
  }

  interface User {
    jwt: string;
  }
}
