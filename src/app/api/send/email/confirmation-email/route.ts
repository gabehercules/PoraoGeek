import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/send-email-confirmation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email as string,
      }),
    }
  );

  const data = await response.json();

  console.log("DATA NO EMAIL CONFIRMATION", data);

  return NextResponse.json({ message: "Sucesso" });
}
