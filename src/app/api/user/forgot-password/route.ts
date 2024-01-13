import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  // const requestHeader = await req.json();

  // try {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/forgot-password`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(requestHeader),
  //     }
  //   );

  //   const data = await response.json();

  //   if (data.error) {
  //     // console.log("DEU ERRO NA RESPONSE DO STRAPI");
  //     return new Error(data.error);
  //   }

  //   // console.log("ERROR NAO EXISTE");

  //   console.log(data.error);

  //   return NextResponse.json(data);
  // } catch (error) {
  //   // console.log("CAIU NO ERRO", error);
  //   return NextResponse.json({ message: "Erro ao resetar a senha" });
  //}

  return NextResponse.json({ message: "Erro ao resetar a senha" });
}

// TODO:
// 1 [  ] - validar a resposta do strapi. A validação atual ta meio cagada. Ex.: se o email for inválido/não existe cadastro, retornar o erro e passar para a resposta do next para tratar no front
// ======== atualmente se eu passar um email que nem existe, ele não retorna erro, vai prosseguir com a requisição, porém so nao sera enviado o codigo para nenhum email
// 2 [  ] - mover essas rotas que lidam com envio de email para a pasta api/send
