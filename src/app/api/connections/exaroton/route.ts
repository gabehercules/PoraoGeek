// Não vou excluir essa rota,
// apenas a pagina. Caso eu precise implementar novamente
// apenas sera necessario chamar essa rota via fetch API e tratar a resposta no front-end

import { NextResponse } from "next/server";
// import { URLSearchParams } from "url";

export async function GET(request: Request, response: Response) {
  // se for ativar, descomentar o codigo abaixo (e o import acima) e excluir a linha 13

  return NextResponse.json({ message: "Você não deveria estar aqui" });

  // const requestURL = new URL(request.url);

  // const urlSearchParams = new URLSearchParams(requestURL.search);

  // const actionParam = urlSearchParams.get("action");

  // console.log("ACTION", actionParam);

  // if (actionParam === "start") {
  //   const res = await fetch(
  //     "https://api.exaroton.com/v1/servers/ce6HHyP4A7mWXDUK/start",
  //     {
  //       cache: "no-store",
  //       headers: {
  //         Authorization:
  //           "Bearer g1IRJu0Ybgmg237VM4yesZHoyCK4R3PbmwMcASQm1JG6YvNloZ4ayl0lW7llBb898kV4t974naN5rKRYom2wRWKyXwTfHYyB7yH8",
  //       },
  //     }
  //   );

  //   const data = await res.json();

  //   if (data.error === true) {
  //     return NextResponse.json({ message: "Falha ao iniciar o server" });
  //   }

  //   console.log(data);

  //   return NextResponse.json({
  //     data,
  //     message: "Server iniciado com sucesso",
  //   });
  // }

  // if (actionParam === "stop") {
  //   const res = await fetch(
  //     "https://api.exaroton.com/v1/servers/ce6HHyP4A7mWXDUK/stop",
  //     {
  //       cache: "no-store",
  //       headers: {
  //         Authorization:
  //           "Bearer g1IRJu0Ybgmg237VM4yesZHoyCK4R3PbmwMcASQm1JG6YvNloZ4ayl0lW7llBb898kV4t974naN5rKRYom2wRWKyXwTfHYyB7yH8",
  //       },
  //     }
  //   );

  //   const data = await res.json();

  //   console.log(data);

  //   return NextResponse.json({
  //     data,
  //     message: "Server parando...",
  //   });
  // }
}
