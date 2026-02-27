import Link from "next/link";
import { styles } from "@/app/styles/style";
import { Skill, type SkillProps } from "../Skill";
import { TellMeMoreLink } from "../TellMeMoreLink";
import { EcommerceImages } from "./EcommerceImages";

export function Ecommerce() {
	return (
		<section
			id="jesse's_kitchen"
			className={`${styles.sectionPaddingY} relative flex flex-col justify-center items-center bg-black dark:bg-transparent overflow-visible`}
		>
			<div className="flex justify-center items-center relative flex-col w-full p-4">
				<Heading />
				<Paragraph />
			</div>
			<Skills />
			<EcommerceImages />
			<div className="flex flex-wrap w-full gap-4 justify-center items-start md:mt-8 sm:-mt-16">
				<TryTheAppButton />
				<GithubButton />
				<TellMeMoreButton />
			</div>
		</section>
	);
}

const Heading = () => (
	<h2 className={`${styles.h2} !text-white/90 mb-4 text-center`}>
		Ecommerce Website
	</h2>
);

const Paragraph = () => (
	<p className={`${styles.p} !text-white/75 w-full max-w-[480px]`}>
		A full stack restaurant themed ecommerce website, with Sanity backend and
		Stripe payment. 💸
	</p>
);

const Skills = () => (
	<div className="flex-wrap flex justify-center items-center w-full xs:min-w-[480px] xs:max-w-[680px] lg:max-w-full relative ">
		{skills.map((skill) => (
			<Skill
				{...skill}
				key={skill.id}
				logoTextClassName="text-white/75 border-white/10"
				cardClassName="!bg-nav border-white/10 dark:!border-white/10"
				descriptionClassName="text-white/90"
				cardLogoTextClassName="!text-blue-500"
			/>
		))}
	</div>
);

const TryTheAppButton = () => (
	<Link
		rel="noreferrer noopener"
		href={"https://ecommerce-restaurant-beta.vercel.app/"}
		target="_blank"
		className={`z-[1] rounded-md
        border-[1px] border-red-700 px-4 py-2 text-[18px]
        font-medium text-white/90 shadow-lg duration-300
        ease-in-out hover:border-red-700
        hover:text-red-700 dark:hover:border-opacity-50`}
	>
		Try the App
	</Link>
);

const GithubButton = () => (
	<Link
		data-testid="hero-github-button"
		rel="noreferrer noopener"
		target="_blank"
		href={"https://github.com/JesseSinivuori/ecommerce"}
		className="rounded-md
 border bg-primary/10 z-[0]
px-4 py-2 text-[18px] font-medium border-transparent
text-white/90 shadow-lg
duration-300 ease-in-out hover:border-white/50"
	>
		Github
	</Link>
);

const TellMeMoreButton = () => (
	<TellMeMoreLink
		projectId="ecommerce-restaurant"
		className="rounded-md
 border bg-primary/10 z-[0]
px-4 py-2 text-[18px] font-medium border-transparent
text-white/90 shadow-lg
duration-300 ease-in-out hover:border-white/50"
	>
		Tell me more
	</TellMeMoreLink>
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
		cardLogoClassName: "invert",
		logoClassName: "invert",
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
		id: "tailwindcss",
		src: "/tailwindcss.svg",
		name: "Tailwind CSS",
		link: "https://tailwindcss.com/",
		description:
			"The CSS framework that enables you to write your styles without making multiple files. Perfect for writing modular pieces, like React components and extremely fast prototyping.",
	},
	{
		id: "sanity",
		src: "/sanity.svg",
		name: "Sanity",
		link: "https://www.sanity.io/",
		description:
			"A headless CMS(Content Management System), that lets you update the contents of your site in real-time. Useful for blogs, e-commerce sites, etc.",
	},
	{
		id: "stripe",
		src: "/stripe.svg",
		name: "Stripe",
		link: "https://stripe.com/",
		description:
			"A payments solutions provider. Developers can integrate Stripe's API's to their own applications.",
	},
];
