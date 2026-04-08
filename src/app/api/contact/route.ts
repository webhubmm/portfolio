import nodemailer from "nodemailer";

const MAX_NAME = 120;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 8000;
const MAX_EMAIL = 254;

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** HTML email: table layout + inline styles for broad client support */
function buildContactEmailHtml(params: {
  name: string;
  email: string;
  subject: string;
  message: string;
  brandName: string;
}) {
  const { name, email, subject, message, brandName } = params;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\r\n/g, "\n").replace(/\n/g, "<br/>");

  const primary = "#182257";
  const accent = "#435FEF";
  const muted = "#5c6488";
  const surface = "#f6f7fb";
  const border = "#e8eaf4";

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:0 0 14px 0;vertical-align:top;">
        <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${muted};">${label}</p>
        <p style="margin:6px 0 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:16px;font-weight:500;line-height:1.45;color:${primary};">${value}</p>
      </td>
    </tr>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting" />
  <title>New message</title>
  <style type="text/css">
    /* Desktop: inset message card (mobile is full-bleed by default in markup) */
    @media only screen and (min-width: 601px) {
      .email-message-wrap {
        padding-left: 32px !important;
        padding-right: 32px !important;
      }
      .email-message-label {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .email-message-body {
        border: 1px solid ${border} !important;
        border-radius: 12px !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:100%;background-color:#ffffff;">
    <tr>
      <td style="padding:0;margin:0;width:100%;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:100%;background-color:#ffffff;border-collapse:collapse;border-bottom:1px solid ${border};">
          <tr>
            <td style="padding:28px 32px 20px 32px;border-bottom:1px solid ${border};">
              <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.04em;color:${accent};">${escapeHtml(brandName)}</p>
              <h1 style="margin:8px 0 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:22px;font-weight:700;line-height:1.25;color:${primary};letter-spacing:-0.02em;">New contact message</h1>
              <p style="margin:8px 0 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:${muted};">Someone submitted the form on your site.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 8px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                ${row("Subject", safeSubject)}
                ${row("Name", safeName)}
                ${
                  email
                    ? row(
                        "Reply email",
                        `<a href="mailto:${encodeURIComponent(email)}" style="color:${accent};text-decoration:none;">${safeEmail}</a>`
                      )
                    : row("Reply email", `<span style="color:${muted};font-style:italic;font-weight:400;">Not provided</span>`)
                }
              </table>
            </td>
          </tr>
          <tr>
            <td class="email-message-wrap" style="padding:8px 0 28px 0;width:100%;box-sizing:border-box;">
              <p class="email-message-label" style="margin:0 0 10px 0;padding:0 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${muted};">Message</p>
              <div class="email-message-body" style="display:block;width:100%;max-width:100%;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:${primary};background-color:#fafbff;border-top:1px solid ${border};border-bottom:1px solid ${border};border-left:none;border-right:none;border-radius:0;padding:18px 16px;word-break:break-word;overflow-wrap:break-word;-webkit-text-size-adjust:100%;">
                ${safeMessage}
              </div>
            </td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:100%;background-color:${surface};">
          <tr>
            <td style="padding:20px 24px 28px 24px;">
              <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.55;color:#9aa0b5;text-align:center;width:100%;">This email was sent from your website contact form.<br/>Reply directly to respond to the sender when a reply address is set.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromAddr = process.env.MAIL_FROM_ADDRESS ?? user;
  const fromName = process.env.MAIL_FROM_NAME ?? "WebHub Asia";
  const toAddr = process.env.CONTACT_TO ?? fromAddr;

  if (!host || !user || !pass || !fromAddr || !toAddr) {
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid body." }, { status: 400 });
  }

  const { name, subject, message, email } = body as Record<string, unknown>;

  const nameStr = typeof name === "string" ? name.trim() : "";
  const subjectStr = typeof subject === "string" ? subject.trim() : "";
  const messageStr = typeof message === "string" ? message.trim() : "";
  const emailStr =
    typeof email === "string" && email.trim() ? email.trim() : "";

  if (!nameStr || !subjectStr || !messageStr) {
    return Response.json(
      { error: "Name, subject, and message are required." },
      { status: 400 }
    );
  }

  if (nameStr.length > MAX_NAME || subjectStr.length > MAX_SUBJECT) {
    return Response.json({ error: "Field too long." }, { status: 400 });
  }

  if (messageStr.length > MAX_MESSAGE) {
    return Response.json({ error: "Message too long." }, { status: 400 });
  }

  if (emailStr) {
    const simple = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!simple.test(emailStr) || emailStr.length > MAX_EMAIL) {
      return Response.json({ error: "Invalid email address." }, { status: 400 });
    }
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = port === 465;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const textLines = [
      "── WebHub Asia · Contact form ──",
      "",
      `Subject: ${subjectStr}`,
      `Name: ${nameStr}`,
      emailStr ? `Reply email: ${emailStr}` : "Reply email: (not provided)",
      "",
      "── Message ──",
      "",
      messageStr,
      "",
      "──────────────────────────────",
    ];

    const html = buildContactEmailHtml({
      name: nameStr,
      email: emailStr,
      subject: subjectStr,
      message: messageStr,
      brandName: fromName,
    });

    await transporter.sendMail({
      from: `"${fromName.replace(/"/g, "")}" <${fromAddr}>`,
      to: toAddr,
      replyTo: emailStr || undefined,
      subject: `[WebHub Asia contact] ${subjectStr.slice(0, MAX_SUBJECT)}`,
      text: textLines.join("\n"),
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return Response.json(
      { error: "Could not send your message. Please try again later." },
      { status: 500 }
    );
  }
}
