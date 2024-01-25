import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const requestHeader = await req.json();

  try {
    const { code, password, passwordConfirmation } = requestHeader;

    if (!code || password !== passwordConfirmation) {
      throw new Error("Erro ao resetar a senha");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestHeader),
      }
    );

    const { data, error } = await response.json();
    console.log("DATA", data, error);
    // look at the strapi response, if it's not ok (one of the code, pass or confirm pass is invalid), return the error
    if (response.status === 400) {
      console.log("DEU ERRO NA RESPONSE DO STRAPI");

      throw error;
    }

    console.log("RESPONSE STRAPI", response);
    return NextResponse.json(data, error);
  } catch (error) {
    console.log("ERROR: ", error);
    return NextResponse.json({ message: "Erro ao resetar a senha", error });
  }
  // return NextResponse.json({ message: "Erro ao resetar a senha" });
}
