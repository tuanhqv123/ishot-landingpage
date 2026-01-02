import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Here you could log the download to a database or analytics service
  console.log("Download tracked at:", new Date().toISOString());

  const origin = request.nextUrl.origin;
  // Redirect to the actual file
  return NextResponse.redirect(
    new URL("/download/iShot_0.1.0_aarch64.dmg", origin)
  );
}
