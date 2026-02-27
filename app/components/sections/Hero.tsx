"use client";

import Link from "next/link";
import { styles } from "@/app/styles/style";
import { AnimationOnIntersection, useTokenizedHref } from "../helpers";

export function Hero() {
	return (
		<section
			id="hero"
			className="flex justify-center items-center w-full px-4 md:px-8 relative"
		>
			<Gradient />
			<div className="flex-col items-center flex w-full">
				<H1 />
				<H2 />
				<Paragraph />
				<div className="my-8 flex flex-wrap justify-center gap-4">
					<ContactLink />
					<GithubLink />
				</div>
			</div>
		</section>
	);
}

const H1 = () => (
	<h1
		className="text-[34px] xss:text-[46px] ss:text-[72px] font-light flex text-center md:text-start
    leading-[72px] ss:leading-[142px] dark:text-white/90 text-black/90 gap-x-4"
	>
		.&#106;ess&#101;
		<span className="flex bg-gradient-to-tr from-cyan-500 dark:to-emerald-500 to-fuchsia-500 bg-clip-text text-transparent">
			s&#105;niv&#117;o&#114;&#105;
		</span>
	</h1>
);

const H2 = () => (
	<h2
		className={`${styles.h2} p-2 !font-extrabold !text-[48px] ss:!text-[82px] text-center md:text-start
    bg-clip-text !text-transparent bg-gradient-to-b dark:from-zinc-300 from-zinc-700 dark:to-white to-black
    `}
	>
		Full Stack Developer
	</h2>
);

const Paragraph = () => (
	<p className={`${styles.p} mt-16 w-full text-center`}>
		I 😍 building responsive, modern, fast and beautiful applications.
	</p>
);

const ContactLink = () => {
	const contactHref = useTokenizedHref("/contact");

	return (
		<Link
			href={contactHref}
			className="rounded-md border 
dark:border-cyan-700 border-transparent px-4 py-2 text-[18px] 
font-medium text-white/90 shadow-lg dark:hover:border-opacity-50
duration-300 ease-in-out dark:bg-transparent bg-blue-700 hover:bg-blue-800
dark:hover:text-cyan-500 "
			data-testid="hero-contact-button"
		>
			Contact
		</Link>
	);
};

const GithubLink = () => (
	<Link
		data-testid="hero-github-button"
		rel="noreferrer noopener"
		target="_blank"
		href={"https://github.com/JesseSinivuori"}
		className="mx-4 rounded-md
 border dark:border-transparent bg-primary/10
px-4 py-2 text-[18px] font-medium border-transparent
dark:text-white/90 text-black/90 shadow-lg
duration-300 ease-in-out dark:hover:border-white/50 hover:border-black/50
 hover:text-black/75"
	>
		Github
	</Link>
);

const Gradient = () => (
	<AnimationOnIntersection
		customAnimation={{
			fromClass: "opacity-50",
			toClass: "opacity-100",
		}}
		className="w-full h-full absolute duration-[3s] z-[-1]"
	>
		<div className="noise-filter-radial absolute -left-60 -top-40 h-[840px] w-[1840px] -rotate-[5deg] overflow-hidden bg-gradient-to-br from-cyan-400/80 via-cyan-500/45 to-transparent blur-[18px] z-[-2]"></div>
		<div className="noise-filter-radial absolute -left-40 top-20 h-[840px] w-[1840px] -rotate-[10deg] overflow-hidden bg-gradient-to-br from-blue-500/70 via-blue-500/35 to-transparent dark:from-emerald-400/70 dark:via-emerald-500/30 blur-[18px] z-[-1]"></div>
		<div className="noise-filter-radial absolute -left-20 top-0 h-[840px] w-[1840px] -rotate-[25deg] overflow-hidden bg-gradient-to-br from-fuchsia-500/70 via-fuchsia-500/30 to-transparent dark:from-blue-700/70 dark:via-blue-700/30 blur-[20px] z-[-3]"></div>
	</AnimationOnIntersection>
);
