import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export function PATCH(_req: NextRequest, _res: NextResponse) {
	const darkModeCookie = cookies().get("darkMode");

	if (darkModeCookie?.value) {
		cookies().delete("darkMode");
	} else {
		cookies().set("darkMode", "false");
	}

	return new NextResponse();
}
