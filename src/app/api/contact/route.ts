import { NextRequest, NextResponse } from "next/server";
import dns from "node:dns";
import nodemailer from "nodemailer";

const dnsPromises = dns.promises;

const TO_EMAIL = "htetmyatsoe126@gmail.com";
const CC_EMAIL = "nyiwinkhant.design@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const host = process.env.MAIL_HOST ?? "smtp.gmail.com";
    const port = Number(process.env.MAIL_PORT) || 587;
    const user = process.env.MAIL_USERNAME;
    const pass = process.env.MAIL_PASSWORD;
    const fromAddress = process.env.MAIL_FROM_ADDRESS ?? user;
    const fromName = process.env.MAIL_FROM_NAME ?? "Webhub Asia";

    if (!user || !pass) {
      return NextResponse.json(
        { error: "Mail configuration is missing (MAIL_USERNAME / MAIL_PASSWORD)" },
        { status: 500 }
      );
    }

    // Resolve host to IPv4 only to avoid ENETUNREACH on servers without IPv6 (Gmail often resolves to IPv6)
    let smtpHost = host;
    try {
      const addresses = await dnsPromises.resolve4(host);
      if (addresses.length > 0) smtpHost = addresses[0];
    } catch {
      // keep original host if resolve4 fails (e.g. already an IP)
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 10000,
      // When connecting by IP, TLS still needs the real hostname for the certificate
      ...(smtpHost !== host && {
        tls: { servername: host },
      }),
    });

    const mailOptions = {
      from: `"${fromName}" <${fromAddress}>`,
      to: TO_EMAIL,
      cc: CC_EMAIL,
      subject: `[Webhub] Contact form: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
