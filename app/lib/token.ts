import { randomUUID } from "node:crypto";
import { jwtVerify, SignJWT } from "jose";

const TOKEN_EXPIRY_DAYS = 30;

function getJwtSecret(): Uint8Array {
	const secret = process.env.TOKEN_JWT_SECRET?.trim();
	if (!secret) {
		throw new Error("Missing TOKEN_JWT_SECRET");
	}
	return new TextEncoder().encode(secret);
}

export type VerifiedToken = {
	sub: string;
	label: string | null;
	exp: number;
};

export async function createToken(label: string | null) {
	const secret = getJwtSecret();
	const now = new Date();
	const expiresAt = new Date(now);
	expiresAt.setDate(expiresAt.getDate() + TOKEN_EXPIRY_DAYS);

	const normalizedLabel = label?.trim() ? label.trim() : null;
	const sub = randomUUID();

	const token = await new SignJWT(
		normalizedLabel ? { label: normalizedLabel } : {},
	)
		.setProtectedHeader({ alg: "HS256", typ: "JWT" })
		.setSubject(sub)
		.setIssuedAt()
		.setExpirationTime("30d")
		.sign(secret);

	return {
		token,
		expiresAt: expiresAt.toISOString(),
		sub,
		label: normalizedLabel,
	};
}

export async function verifyToken(
	token: string,
): Promise<{ valid: true; claims: VerifiedToken } | { valid: false }> {
	try {
		const secret = getJwtSecret();
		const verified = await jwtVerify(token, secret, {
			algorithms: ["HS256"],
		});

		const sub = verified.payload.sub;
		const exp = verified.payload.exp;
		const labelValue = verified.payload.label;
		const label =
			typeof labelValue === "string" && labelValue.trim().length > 0
				? labelValue
				: null;

		if (!sub || typeof exp !== "number") {
			return { valid: false };
		}

		return {
			valid: true,
			claims: {
				sub,
				exp,
				label,
			},
		};
	} catch {
		return { valid: false };
	}
}
