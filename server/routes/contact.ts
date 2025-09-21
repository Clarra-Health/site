import { RequestHandler } from "express";
import { z } from "zod";

const ContactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().optional().default(""),
  email: z.string().email(),
  message: z.string().min(1),
});

export const handleContact: RequestHandler = async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ error: "Invalid payload", issues: parsed.error.flatten() });
  }

  const data = parsed.data;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO ?? "hello@clarrahealth.com";
  const FROM = process.env.CONTACT_FROM; // must be a verified sender/domain on Resend

  if (!RESEND_API_KEY || !FROM) {
    // Not configured
    return res.status(501).json({
      error: "Email service not configured",
      hint: "Set RESEND_API_KEY and CONTACT_FROM env vars to enable email delivery.",
    });
  }

  const subject =
    `New contact from ${data.firstName} ${data.lastName ?? ""}`.trim();
  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;line-height:1.6">
      <h2 style="margin:0 0 8px">Contact form submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName ?? ""}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit;background:#f6f8fa;padding:12px;border-radius:8px">${data.message.replace(
        /</g,
        "&lt;",
      )}</pre>
    </div>`;

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      subject,
      reply_to: data.email,
      html,
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text();
    return res
      .status(502)
      .json({ error: "Failed to send email", details: errText });
  }

  return res.json({ ok: true });
};
