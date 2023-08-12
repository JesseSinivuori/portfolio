"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkStyle } from "./navLinkStyle";

export function HomeLink() {
  const pathname = usePathname();
  return (
    <Link href={"/"} className={`${navLinkStyle(pathname, "/")} p-2 `}>
      Home
    </Link>
  );
}
