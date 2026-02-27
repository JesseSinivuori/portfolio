import Image from "next/image";
import Link from "next/link";
import { styles } from "@/app/styles/style";
import { AnimationOnIntersection } from "../helpers/AnimationOnIntersection";
import { Skill, type SkillProps } from "../Skill";
import { TellMeMoreLink } from "../TellMeMoreLink";

export function AdManager() {
	return (
		<section
			id="ad_manager"
			className={`${styles.sectionPaddingY} flex items-center flex-col md:flex-row justify-evenly`}
		>
			<div className="flex justify-center items-center flex-col w-full">
				<Heading />
				<Paragraph />
				<Skills />
			</div>
			<div className="flex justify-center relative items-center my-10 w-full flex-col px-0 sm:px-10">
				<Gradient />
				<AdManagerImage />
				<div className="pt-8 flex justify-center items-start flex-wrap gap-4">
					<TryTheAppButton />
					<GithubButton />
					<TellMeMoreButton />
				</div>
			</div>
		</section>
	);
}

const Heading = () => (
	<h2 className={`${styles.h2} mb-4 text-center text-[42px]`}>Ad Manager</h2>
);

const Paragraph = () => (
	<p
		className={`${styles.p} w-full max-w-[480px] flex items-center justify-center`}
	>
		{"A full stack CRUD app for managing ad campaigns. "}
		{"Built with Next.js app router, Vercel Postgres and "}
		{"Kysely + Zod for end to end type safety."}
	</p>
);

const skills: SkillProps[] = [
	{
		id: "react",
		src: "/react.svg",
		name: "React",
		link: "https://react.dev/",
		description:
			"The JavaScript library for building user interfaces. React applications are built from reusable pieces of code called components.",
	},
	{
		id: "nextjs",
		src: "/nextjs.svg",
		name: "Next.js",
		cardLogoClassName: "dark:invert",
		logoClassName: "dark:invert",
		link: "https://nextjs.org/",
		description:
			"The React framework for building fast and scalable full stack web applications, with features like React Server Components and Server Side Rendering.",
	},
	{
		id: "typescript",
		src: "/typescript.svg",
		name: "TypeScript",
		link: "https://www.typescriptlang.org/",
		description:
			"Like JavaScript, but with syntax for types, which allows you to catch errors instantly and makes it highly scalable.",
	},
	{
		id: "postgresql",
		src: "/postgresql.svg",
		name: "PostgreSQL",
		link: "https://www.postgresql.org/",
		description:
			"An open-source, powerful, reliable, consistent relational database management system known for its advanced features and extensibility.",
	},
];

const Skills = () => (
	<div className={`flex-wrap flex justify-center items-center max-w-sm`}>
		{skills.map((skill) => (
			<Skill
				{...skill}
				key={skill.id}
				cardClassName="!border-black/10 dark:!border-white/10"
				cardLogoTextClassName="dark:!text-blue-500 !text-blue-700"
			/>
		))}
	</div>
);

const TryTheAppButton = () => (
	<Link
		rel="noreferrer noopener"
		href={"https://ad-manager-beta.vercel.app/"}
		target="_blank"
		className="z-[1]
  rounded-md border  border-transparent bg-pink-700 dark:bg-transparent text-white/90 px-4 py-2
  text-[18px] font-medium dark:text-white/90 hover:bg-pink-800
  shadow-lg duration-300 dark:border-pink-500
  ease-in-out hover:border-pink-500 
  dark:hover:text-pink-500 dark:hover:border-opacity-50"
	>
		Try the App
	</Link>
);

const GithubButton = () => (
	<Link
		data-testid="hero-github-button"
		rel="noreferrer noopener"
		target="_blank"
		href={"https://github.com/JesseSinivuori/ad-manager"}
		className="rounded-md
 border dark:border-transparent bg-primary/10
px-4 py-2 text-[18px] font-medium border-transparent
dark:text-white/90 text-black/90 shadow-lg
duration-300 ease-in-out dark:hover:border-white/50 hover:border-black/50
 hover:text-black/75"
	>
		Github
	</Link>
);

const TellMeMoreButton = () => (
	<TellMeMoreLink
		projectId="ad-manager"
		className="rounded-md
 border dark:border-transparent bg-primary/10
px-4 py-2 text-[18px] font-medium border-transparent
dark:text-white/90 text-black/90 shadow-lg
duration-300 ease-in-out dark:hover:border-white/50 hover:border-black/50
 hover:text-black/75"
	>
		Tell me more
	</TellMeMoreLink>
);

const Gradient = () => (
	<AnimationOnIntersection
		animation="appear-"
		className="absolute z-[-1] top-0 h-[150%] w-[300%] duration-[2s] -rotate-12"
		rootMargin="0px 0px -300px 0px"
	>
		<div className="noise-filter-radial dark:opacity-50 opacity-50 absolute z-[-1] h-full w-full bg-gradient-to-tl from-fuchsia-500  to-pink-500"></div>
	</AnimationOnIntersection>
);

const AdManagerImage = () => (
	<Link
		href={"https://ad-manager-beta.vercel.app/"}
		target="_blank"
		className="px-2"
		title="Try the App"
		rel="noreferrer noopener"
		tabIndex={-1}
	>
		<Image
			src={"/adManager.png"}
			alt=""
			className="z-[-1] h-auto w-[570px] min-w-[240px] object-contain"
			width={503}
			height={345}
		/>
	</Link>
);
