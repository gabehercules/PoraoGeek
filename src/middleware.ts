import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookie = response.cookies.set("firstAccess", "true");

  return cookie;

  // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/busca/",
};
