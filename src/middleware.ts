import { NextResponse } from "next/server";
import { NextRequest, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);

  const isMobile = device.type === "MOBILE";

  if (request.nextUrl.pathname.startsWith("/busca")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // if (request.nextUrl.pathname.startsWith("/cadastrar")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // if (request.nextUrl.pathname.startsWith("/entrar")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // brincar com esses cookies depois
  const response = NextResponse.next();

  if (isMobile && !request.cookies.has("isMobile")) {
    response.cookies.set("isMobile", "true", {
      maxAge: 60 * 60 * 24 * 365, // este cookie expira em 1 ano
    });
  }

  if (!request.cookies.has("first_access")) {
    response.cookies.set("first_access", "true", {
      maxAge: 60 * 60 * 24 * 365, // este cookie expira em 1 ano
    });

    return response;
  }
}

export const config = {
  matcher: ["/", "/busca/", "/cadastrar/", "/entrar/"],
};
