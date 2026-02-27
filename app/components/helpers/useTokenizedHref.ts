"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { buildTokenizedHref } from "@/app/lib/tokenized-href";

export function useTokenizedHref(href: string): string {
	const searchParams = useSearchParams();
	const token =
		searchParams.get("accessToken")?.trim() ?? searchParams.get("t")?.trim();

	return useMemo(() => buildTokenizedHref(href, token), [href, token]);
}
