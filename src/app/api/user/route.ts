import { NextResponse } from "next/server";

export async function GET(req: Request, token: string | null) {
  const requestHeaders = req.headers;
  token = requestHeaders.get("Authorization");
  //   console.log("REQ HEADER", token);

  const response = await fetch(
    `${process.env.STRAPI_API}/api/users/me?populate=*`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
