import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const requestHeader = await req.json();

  console.log("requestHeader", requestHeader);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestHeader),
      }
    );

    const data = await response.json();

    console.log(Date.now(), "RESPOSTA NO FETCH FORGOT PASS DO STRAPI", data);

    if (data.error) {
      const { status, name, message } = data.error;
      // console.log("DEU ERRO NA RESPONSE DO STRAPI");
      console.log(data.error);
      throw {
        status,
        name,
        message,
      };
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log(Date.now(), "CAIU NO ERRO: ", error);
    return NextResponse.json({ message: "Erro ao resetar a senha", error });
  }
}

// TODO:
// 1 [  ] - validar a resposta do strapi. A validação atual ta meio cagada. Ex.: se o email for inválido/não existe cadastro, retornar o erro e passar para a resposta do next para tratar no front
// ======== atualmente se eu passar um email que nem existe, ele não retorna erro, vai prosseguir com a requisição, porém so nao sera enviado o codigo para nenhum email
// 2 [  ] - mover essas rotas que lidam com envio de email para a pasta api/send
