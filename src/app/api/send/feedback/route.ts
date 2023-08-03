import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const feedbackContent = await request.json();

  console.log("JSON da Req", feedbackContent);

  try {
    const data = await resend.emails.send({
      from: "Porão Geek <no-reply@poraogeek.com.br>",
      to: ["contato@poraogeek.com.br"],
      bcc: ["gabrielsyze@gmail.com"],
      subject: "Feedback Porão Geek",
      html: `<strong>Novo Feedback no Porão Geek!!!</strong><br><p>${feedbackContent}</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
