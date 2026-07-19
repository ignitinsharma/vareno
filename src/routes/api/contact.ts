import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON." }, { status: 400 });
        }
        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Please provide a valid name, email, and message." },
            { status: 400 }
          );
        }
        const { name, email, phone, message } = parsed.data;

        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.RESEND_FROM_EMAIL;
        const to = process.env.CONTACT_TO_EMAIL || "info@vareno.in";

        if (!apiKey || !from) {
          console.error("Missing RESEND_API_KEY or RESEND_FROM_EMAIL");
          return Response.json(
            { error: "Email service is not configured yet. Please try WhatsApp." },
            { status: 500 }
          );
        }

        const timestamp = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date());

        const html = `
          <div style="font-family:Inter,system-ui,sans-serif;color:#111;line-height:1.6">
            <h2 style="margin:0 0 12px">New Vareno inquiry</h2>
            <p style="margin:0 0 4px"><strong>Name:</strong> ${esc(name)}</p>
            <p style="margin:0 0 4px"><strong>Email:</strong> ${esc(email)}</p>
            ${phone ? `<p style="margin:0 0 4px"><strong>Phone:</strong> ${esc(phone)}</p>` : ""}
            <p style="margin:12px 0 4px"><strong>Message:</strong></p>
            <p style="white-space:pre-wrap">${esc(message)}</p>
            <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
            <p style="font-size:12px;color:#666">Submitted ${esc(timestamp)} IST</p>
          </div>
        `;
        const text = `New Vareno inquiry\n\nName: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ""}\nMessage:\n${message}\n\nSubmitted ${timestamp} IST`;

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              from,
              to: [to],
              reply_to: email,
              subject: `New Vareno inquiry from ${name}`,
              html,
              text,
            }),
          });
          if (!res.ok) {
            const detail = await res.text();
            console.error("Resend error", res.status, detail);
            return Response.json({ error: "Email service failed." }, { status: 502 });
          }
        } catch (err) {
          console.error(err);
          return Response.json({ error: "Email service failed." }, { status: 502 });
        }
        return Response.json({ ok: true });
      },
    },
  },
});
