"use client";

import Link from "next/link";
import { useTokenizedHref } from "../helpers";

export function HomeLogo() {
	const homeHref = useTokenizedHref("/");

	return (
		<Link
			href={homeHref}
			className="flex rounded-full bg-transparent p-2 font-light dark:text-white text-black hover:opacity-50"
		>
			<span className="dark:text-white text-black">.</span>j
			<span className="dark:text-cyan-500 text-blue-700">s</span>
		</Link>
	);
}
