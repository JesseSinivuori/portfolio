"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styles } from "@/app/styles/style";
import { useTokenizedHref } from "../helpers";
import { navLinkStyle } from "./navLinkStyle";

export function HomeLink() {
	const pathname = usePathname();
	const homeHref = useTokenizedHref("/");
	return (
		<Link
			href={homeHref}
			className={`${styles.link} ${navLinkStyle(pathname, "/")} p-2 `}
		>
			Home
		</Link>
	);
}
