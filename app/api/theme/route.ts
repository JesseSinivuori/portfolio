import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function PATCH(_req: NextRequest) {
	const cookieStore = await cookies();
	const darkModeCookie = cookieStore.get("darkMode");

	if (darkModeCookie?.value) {
		cookieStore.delete("darkMode");
	} else {
		cookieStore.set("darkMode", "false");
	}

	return new NextResponse();
}
