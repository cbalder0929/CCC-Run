import { NextRequest, NextResponse } from "next/server";
import { emailProvider } from "@/lib/email/service";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email : "";
  const optIn = body?.optIn === true;

  if (!optIn) {
    return NextResponse.json(
      { ok: false, error: "Please check the consent box to subscribe." },
      { status: 400 }
    );
  }

  const result = await emailProvider.subscribe({ email });

  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result, { status: 200 });
}
