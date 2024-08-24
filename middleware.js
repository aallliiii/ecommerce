// middleware.ts (or middleware.js)
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  console.log("Middleware executed on:", req.url);

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (session) {
    console.log("Session exists, redirecting to /");
    return NextResponse.redirect(new URL("/", req.url));
  }

  console.log("No session, allowing request to proceed");
  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};
