"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTokenizedHref } from "../helpers";

export const ContactLink = () => {
	const pathname = usePathname();
	const contactHref = useTokenizedHref("/contact");
	return (
		<Link
			href={contactHref}
			className={`rounded-md border-transparent p-2 dark:bg-transparent bg-blue-700 
         duration-100 ease-in-out border flex
        ${
					pathname !== "/contact"
						? "text-white/90 dark:border-bg-blue-700 dark:hover:text-cyan-500 dark:border-cyan-700 dark:hover:border-opacity-50 hover:bg-blue-800"
						: "border-transparent dark:text-white/50 text-black/50 bg-transparent"
				} `}
		>
			Contact
		</Link>
	);
};
