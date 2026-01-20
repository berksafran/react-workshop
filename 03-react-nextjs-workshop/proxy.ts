import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log("middleware çalıştı");
  // Sadece auth-demo protected route'u için proxy çalışsın
  if (
    request.nextUrl.pathname.startsWith(
      "/day2/02-nextjs-router/04-middleware/auth-demo/protected",
    )
  ) {
    // Cookie'den auth token'ı kontrol et
    const authToken = request.cookies.get("auth-demo-token");

    if (!authToken) {
      // Token yoksa auth-demo ana sayfasına yönlendir
      const url = request.nextUrl.clone();
      url.pathname = "/day2/02-nextjs-router/04-middleware/auth-demo";
      url.searchParams.set("error", "unauthorized");

      return NextResponse.redirect(url);
    }

    // Token varsa devam et
    const response = NextResponse.next();

    // Response header'larına bilgi ekle
    response.headers.set("X-Auth-Status", "authenticated");
    response.headers.set("X-Proxy-Applied", "true");

    return response;
  }

  // Diğer route'lar için proxy çalışmasın
  return NextResponse.next();
}

// Proxy'nin hangi route'larda çalışacağını belirt
export const config = {
  matcher: ["/day2/02-nextjs-router/04-middleware/auth-demo/:path*"],
};
