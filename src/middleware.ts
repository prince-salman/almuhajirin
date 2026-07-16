import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET || "super_secret_jwt_key_for_almuhajirin_2025";
const key = new TextEncoder().encode(secretKey);

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  if (path.startsWith("/admin")) {
    // Izinkan halaman login
    if (path === "/admin/login") {
      return NextResponse.next();
    }

    const token = request.cookies.get("admin_session")?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      // Verifikasi token
      await jwtVerify(token, key, { algorithms: ["HS256"] });
      return NextResponse.next();
    } catch (err) {
      // Token tidak valid atau kedaluwarsa
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("admin_session");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
