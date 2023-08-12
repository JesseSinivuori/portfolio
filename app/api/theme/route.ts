import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function PATCH(req: NextRequest, res: NextResponse) {
  const darkModeCookie = cookies().get("darkMode");

  if (darkModeCookie?.value) {
    cookies().delete("darkMode");
  } else {
    cookies().set("darkMode", "false");
  }

  return new NextResponse();
}
