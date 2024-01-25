import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  try {
    const { email, password, confirmPassword } = body;

    if (!email || !password || !confirmPassword) {
      throw {
        status: 400,
        message: "Todos os campos são obrigatórios",
      };
    } else if (password !== confirmPassword) {
      throw {
        status: 400,
        message: "As senhas não são iguais",
      };
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    console.log("DATA NO CREATE USER", data);
  } catch (error) {}

  console.log(body);
  return NextResponse.json({ message: "Hello World!" });
}
