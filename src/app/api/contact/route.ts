import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactEmails } from "@/lib/mail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    if (parsed.data.website) {
      // Honeypot hit — silently succeed
      return NextResponse.json({ ok: true });
    }

    await sendContactEmails({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || undefined,
      phone: parsed.data.phone || undefined,
      subject: parsed.data.subject,
      message: parsed.data.message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact]", err);
    return NextResponse.json({ ok: false, error: "Erreur serveur" }, { status: 500 });
  }
}
