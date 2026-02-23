"use client";
import copy from "copy-to-clipboard";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { styles } from "@/app/styles/style";

const handleCopy = () => {
	copy(`sinivuorii@gmail.com`);
	toast.success("Email copied to clipboard.");
};

export function Contact() {
	const [showEmail, setShowEmail] = useState(false);

	if (!showEmail) {
		return (
			<button
				type="button"
				onClick={() => setShowEmail(!showEmail)}
				className={`rounded-md border 
        dark:border-cyan-700 border-transparent px-4 py-2 text-[18px] 
        font-medium text-white/90 dark:hover:border-opacity-50
        duration-300 ease-in-out dark:bg-transparent bg-blue-700 hover:bg-blue-800
        dark:hover:text-cyan-500`}
			>
				Show email
			</button>
		);
	}

	return (
		<div className="flex justify-center items-center flex-col">
			<div className={`flex justify-center items-center flex-col`}>
				<h2
					className={`${styles.h2} !text-[22px] xs:!text-[28px] ss:!text-[36px]`}
				>
					s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m
				</h2>
				<Link
					href="&#109;a&#105;lt&#111;:s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m"
					target="_blank"
					rel="noreferrer noopener"
					className={`${styles.p} text-center transition-all duration-100 dark:hover:text-cyan-700 hover:text-blue-700 p-4`}
				>
					Click here to open mail app
				</Link>
				<button
					type="button"
					onClick={handleCopy}
					className={`rounded-md border 
          dark:border-cyan-700 border-transparent px-4 py-2 my-2 text-[18px] 
          font-medium text-white/90 dark:hover:border-opacity-50
          duration-300 ease-in-out dark:bg-transparent bg-blue-700 hover:bg-blue-800
          dark:hover:text-cyan-500`}
				>
					Copy Email
				</button>
			</div>
		</div>
	);
}
