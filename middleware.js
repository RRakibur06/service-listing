import { NextResponse } from "next/server";

export function middleware(req) {
  const verify = req.cookies.get("loggedIn");
  const url = req.url;
  if (!verify) {
    return NextResponse.redirect(new URL("/sign-in", url));
  }
  if (verify && url.endsWith("/sign-in"))
    return NextResponse.redirect(
      new URL("/dashboard", "http://localhost:3000/dashboard")
    );
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/sign-in"],
};
