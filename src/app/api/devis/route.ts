import { NextResponse } from "next/server";
import { devisSchema } from "@/lib/validation";
import { sendDevisEmails } from "@/lib/mail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = devisSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    await sendDevisEmails({
      name: parsed.data.name,
      company: parsed.data.company,
      role: parsed.data.role || undefined,
      email: parsed.data.email,
      phone: parsed.data.phone,
      city: parsed.data.city || undefined,
      companySize: parsed.data.companySize,
      sites: parsed.data.sites,
      urgency: parsed.data.urgency,
      budget: parsed.data.budget,
      services: parsed.data.services,
      message: parsed.data.message || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/devis]", err);
    return NextResponse.json({ ok: false, error: "Erreur serveur" }, { status: 500 });
  }
}
