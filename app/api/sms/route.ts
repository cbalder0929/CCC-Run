import { NextRequest, NextResponse } from "next/server";
import { smsProvider } from "@/lib/sms/service";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const phone = typeof body?.phone === "string" ? body.phone : "";
  const optIn = body?.optIn === true;

  if (!optIn) {
    return NextResponse.json(
      { ok: false, error: "Please check the consent box to sign up." },
      { status: 400 }
    );
  }

  const result = await smsProvider.subscribe({ phone });

  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result, { status: 200 });
}
