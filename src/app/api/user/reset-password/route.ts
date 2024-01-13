import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  // const requestHeader = await req.json();

  // console.log("HEADER", requestHeader);

  // try {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/reset-password`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(requestHeader),
  //     }
  //   );

  //   const strapiResponse = await response.json();
  //   console.log("DATA", strapiResponse);
  //   // look at the strapi response, if it's not ok (one of the code, pass or confirm pass is invalid), return the error
  //   if (response.status === 400) {
  //     console.log("DEU ERRO NA RESPONSE DO STRAPI");

  //     return NextResponse.json({ message: strapiResponse.error });
  //   }

  //   console.log("RESPONSE STRAPI", response);
  //   return NextResponse.json(strapiResponse);
  // } catch (error) {
  //   console.log("ERROR STRAPI", error);
  //   return NextResponse.json({ message: "Erro ao resetar a senha" });
  //}
  return NextResponse.json({ message: "Erro ao resetar a senha" });
}
