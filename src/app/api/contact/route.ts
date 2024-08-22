import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const subjects = {
  proposal: "Proposta",
  question: "Dúvida",
  other: "Outro",
};

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        error: "Please fill all fields",
      },
      {
        status: 400,
      }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  } as SMTPTransport.Options);

  const messageHTMl = `
<div style="font-family: Arial, sans-serif; font-size: 16px;">
    <h1 style="color: #333; font-size: 24px; font-weight: 700; margin-bottom: 20px;">Contact via <b style="color: #2fd281;">Portfolio</b></h1>
    <table style="width: 100%; margin-bottom: 20px;">
        <tr>
            <td style="width: 100px; font-weight: 700;">Name:</td>
            <td>${name}</td>
        </tr>
        <tr>
            <td style="width: 100px; font-weight: 700;">Email:</td>
            <td>${email}</td>
        </tr>
    </table>
    <div style="margin-bottom: 20px;">
        <p style="font-weight: 700;">Message:</p>
        <p>${message}</p>
    </div>
</div>
    `;

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `Contact via Portfolio - ${subjects.other}`,
    html: messageHTMl,
  });

  return NextResponse.json({
    message: "Message sent",
  });
}
