import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { to, subject, html } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Next-gym (do-not-reply) <onboarding@resend.dev>",
      to,
      subject,
      html,
    });
    if (!to || !subject || !html) {
      return Response.json(
        { error: "Required field missing" },
        { status: 400 }
      );
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
