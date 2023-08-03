// import { EmailTemplate } from "../../../components/EmailTemplates/Newsletter";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const email = await request.json();

  console.log("JSON da Req", email);

  try {
    const data = await resend.emails.send({
      from: "Porão Geek <newsletter@poraogeek.com.br>",
      to: [email],
      subject: "Newsletter Porão Geek",
      html: `<strong>Email de cadastro:</strong> ${email}<br>Obrigado por se cadastrar na nossa newsletter! Você receberá nossos emails semanalmente.`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
