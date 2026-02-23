import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function PATCH(_req: NextRequest, _res: NextResponse) {
  const cookieStore = await cookies();  
  const darkModeCookie = cookieStore.get("darkMode");

  if (darkModeCookie?.value) {
    cookieStore.delete("darkMode");
  } else {
    cookieStore.set("darkMode", "false");
  }

  return new NextResponse();
}
