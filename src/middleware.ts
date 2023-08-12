import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/busca")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/cadastrar")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // if (request.nextUrl.pathname.startsWith("/entrar")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // brincar com esses cookies depois
  const response = NextResponse.next();
  if (!request.cookies.has("first_access")) {
    response.cookies.set("first_access", "true", {
      maxAge: 60 * 60 * 24 * 365, // este cookie expira em 1 ano
    });

    return response;
  } else {
    response.cookies.delete("first_access");
    return response;
  }
}

export const config = {
  matcher: ["/", "/busca/", "/cadastrar/", "/entrar/"],
};
