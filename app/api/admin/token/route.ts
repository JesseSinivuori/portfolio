import { NextResponse } from "next/server";
import { z } from "zod";
import { createToken } from "@/app/lib/token";

export const runtime = "nodejs";

const CreateTokenRequestSchema = z.object({
	adminSecret: z.string().trim().min(1),
	label: z.string().trim().max(120).nullable(),
});

export async function POST(request: Request) {
	if (process.env.NODE_ENV === "production") {
		return NextResponse.json({ error: "Not found." }, { status: 404 });
	}

	try {
		const json = await request.json();
		const parsed = CreateTokenRequestSchema.parse(json);

		const expectedSecret = process.env.ADMIN_TOKEN_UI_SECRET?.trim();
		if (!expectedSecret) {
			return NextResponse.json(
				{ error: "Server is missing ADMIN_TOKEN_UI_SECRET." },
				{ status: 500 },
			);
		}

		if (parsed.adminSecret !== expectedSecret) {
			return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
		}

		const created = await createToken(parsed.label);
		const url = new URL(request.url);
		const shareUrl = `${url.origin}/?accessToken=${encodeURIComponent(created.token)}`;

		return NextResponse.json({
			token: created.token,
			expiresAt: created.expiresAt,
			label: created.label,
			shareUrl,
		});
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{
					error: "Invalid request payload.",
					details: error.issues,
				},
				{ status: 400 },
			);
		}

		return NextResponse.json(
			{
				error: "Failed to create token.",
				details: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		);
	}
}
