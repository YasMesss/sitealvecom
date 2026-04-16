import { Resend } from "resend";
import { siteConfig } from "./site";

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL || `no-reply@alvecom.fr`;
const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;

function getClient() {
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderRows(entries: [string, string | undefined | null][]) {
  return entries
    .filter(([, v]) => v !== undefined && v !== null && `${v}`.trim() !== "")
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #E5EAF2;color:#4A5467;font-size:13px;">${escapeHtml(k)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #E5EAF2;color:#0b1220;font-size:14px;font-weight:500;">${escapeHtml(String(v))}</td>
      </tr>`
    )
    .join("");
}

export function renderTemplate({
  title,
  intro,
  rowsHtml,
  message,
}: {
  title: string;
  intro: string;
  rowsHtml: string;
  message?: string | null;
}) {
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#F4F7FB;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F7FB;padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(10,43,79,0.06);">
        <tr><td style="background:linear-gradient(135deg,#0A2B4F 0%,#1E5BA8 100%);padding:24px 28px;color:#fff;">
          <div style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#AFC8E6;">Alvecom</div>
          <div style="font-size:22px;font-weight:700;margin-top:4px;">${escapeHtml(title)}</div>
        </td></tr>
        <tr><td style="padding:24px 28px;color:#1b2433;font-size:15px;line-height:1.6;">
          <p style="margin:0 0 16px 0;">${escapeHtml(intro)}</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E5EAF2;border-radius:10px;overflow:hidden;">
            ${rowsHtml}
          </table>
          ${
            message
              ? `<div style="margin-top:16px;padding:16px;background:#F4F7FB;border-radius:10px;white-space:pre-wrap;">${escapeHtml(message)}</div>`
              : ""
          }
        </td></tr>
        <tr><td style="padding:16px 28px;background:#F4F7FB;color:#6B7488;font-size:12px;">
          Envoyé depuis le site alvecom.fr — ${new Date().toLocaleString("fr-FR")}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function sendContactEmails(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const client = getClient();
  if (!client) {
    console.warn("[mail] RESEND_API_KEY manquant, envoi simulé", data);
    return { ok: true, simulated: true };
  }

  const rows = renderRows([
    ["Nom", data.name],
    ["Email", data.email],
    ["Téléphone", data.phone ?? ""],
    ["Société", data.company ?? ""],
    ["Sujet", data.subject],
  ]);

  const adminHtml = renderTemplate({
    title: "Nouveau contact",
    intro: "Un prospect vient de remplir le formulaire de contact.",
    rowsHtml: rows,
    message: data.message,
  });

  await client.emails.send({
    from: `Alvecom <${fromEmail}>`,
    to: [toEmail],
    replyTo: data.email,
    subject: `[Contact] ${data.subject} — ${data.name}`,
    html: adminHtml,
  });

  const confirmHtml = renderTemplate({
    title: "Nous avons bien reçu votre message",
    intro: `Bonjour ${data.name}, merci pour votre prise de contact. Nos équipes reviennent vers vous sous 24 h ouvrées.`,
    rowsHtml: renderRows([
      ["Sujet", data.subject],
      ["Contact", `${data.name} — ${data.email}`],
    ]),
    message: data.message,
  });

  await client.emails.send({
    from: `Alvecom <${fromEmail}>`,
    to: [data.email],
    subject: "Votre demande a bien été reçue — Alvecom",
    html: confirmHtml,
  });

  return { ok: true, simulated: false };
}

export async function sendDevisEmails(data: {
  name: string;
  company: string;
  role?: string;
  email: string;
  phone: string;
  city?: string;
  companySize: string;
  sites: string;
  urgency: string;
  budget?: string;
  services: string[];
  message?: string;
}) {
  const client = getClient();
  if (!client) {
    console.warn("[mail] RESEND_API_KEY manquant, envoi simulé", data);
    return { ok: true, simulated: true };
  }

  const rows = renderRows([
    ["Nom", data.name],
    ["Société", data.company],
    ["Fonction", data.role ?? ""],
    ["Email", data.email],
    ["Téléphone", data.phone],
    ["Ville", data.city ?? ""],
    ["Taille", data.companySize],
    ["Sites", data.sites],
    ["Urgence", data.urgency],
    ["Budget", data.budget ?? ""],
    ["Besoins", data.services.join(", ")],
  ]);

  await client.emails.send({
    from: `Alvecom <${fromEmail}>`,
    to: [toEmail],
    replyTo: data.email,
    subject: `[Devis] ${data.company} — ${data.services.join(", ")}`,
    html: renderTemplate({
      title: "Nouvelle demande de devis",
      intro: "Un prospect a finalisé la demande de devis en 3 étapes.",
      rowsHtml: rows,
      message: data.message,
    }),
  });

  await client.emails.send({
    from: `Alvecom <${fromEmail}>`,
    to: [data.email],
    subject: "Votre demande de devis a bien été reçue — Alvecom",
    html: renderTemplate({
      title: "Merci pour votre demande de devis",
      intro: `Bonjour ${data.name}, nous avons bien reçu votre demande. Un expert Alvecom vous rappelle sous 24 h ouvrées pour préparer votre proposition.`,
      rowsHtml: renderRows([
        ["Société", data.company],
        ["Besoins", data.services.join(", ")],
        ["Urgence", data.urgency],
      ]),
    }),
  });

  return { ok: true, simulated: false };
}
