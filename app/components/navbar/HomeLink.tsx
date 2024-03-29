"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkStyle } from "./navLinkStyle";
import { styles } from "@/app/styles/style";

export function HomeLink() {
  const pathname = usePathname();
  return (
    <Link
      href={"/"}
      className={`${styles.link} ${navLinkStyle(pathname, "/")} p-2 `}
    >
      Home
    </Link>
  );
}
