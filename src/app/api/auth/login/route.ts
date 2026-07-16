import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import { encrypt } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username dan password wajib diisi" },
        { status: 400 }
      );
    }

    // Ambil data admin berdasarkan username
    const { data: admin, error } = await supabase
      .from("admin_users")
      .select("*")
      .eq("username", username)
      .eq("is_active", true)
      .single();

    if (error || !admin) {
      return NextResponse.json(
        { error: "Username atau password salah" },
        { status: 401 }
      );
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, admin.password_hash);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Username atau password salah" },
        { status: 401 }
      );
    }

    // Buat JWT Token
    const payload = {
      sub: admin.id,
      username: admin.username,
      role: admin.role,
      name: admin.full_name,
    };
    
    const token = await encrypt(payload);

    // Set cookie
    const response = NextResponse.json({ success: true, user: payload });
    
    response.cookies.set({
      name: "admin_session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 10, // 10 jam
      path: "/",
    });

    // Update last login
    await supabase
      .from("admin_users")
      .update({ last_login: new Date().toISOString() })
      .eq("id", admin.id);

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal" },
      { status: 500 }
    );
  }
}
