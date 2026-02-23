import Image from "next/image";
import Link from "next/link";
import { styles } from "@/app/styles/style";
import { AnimationOnIntersection } from "../helpers/AnimationOnIntersection";
import { Skill, type SkillProps } from "../Skill";

export function ThisWebsite() {
	return (
		<section
			id="website"
			className={`${styles.sectionPaddingY} flex items-center flex-col-reverse md:flex-row
    justify-evenly overflow-visible bg-black dark:bg-transparent relative`}
		>
			<div className={`flex justify-center items-center relative w-full`}>
				<CodeImage />
				<CodeImageGradient />
			</div>
			<div
				className={`flex justify-center h-full w-full items-center mb-8 flex-col flex-wrap sm:mb-20`}
			>
				<div className="p-4">
					<Heading />
					<Paragraph />
				</div>
				<Skills />
				<GithubButton />
			</div>
		</section>
	);
}

const Heading = () => (
	<h2 className={`${styles.h2} mb-4 text-center text-[42px] text-white/90`}>
		This Website
	</h2>
);

const Paragraph = () => (
	<p
		className={`${styles.p} text-white/75 w-full flex items-center justify-center max-w-[370px]`}
	>
		Built with ❤️, reusable components + my gradient generator tool.
	</p>
);

const Skills = () => (
	<div className={`flex flex-wrap justify-center items-center max-w-sm`}>
		{skills.map((skill) => (
			<Skill
				{...skill}
				key={skill.id}
				logoTextClassName="text-white/75 border-white/10"
				cardClassName="!bg-nav !border-white/10"
				descriptionClassName="!text-white/75"
				cardLogoTextClassName="!text-blue-500"
				descriptionPosition="left"
			/>
		))}
	</div>
);

const CodeImageGradient = () => (
	<AnimationOnIntersection
		animation="appear-"
		className="absolute w-full h-full"
		rootMargin="0px 0px -400px 0px"
		duration="duration-1000"
	>
		<div className="absolute m-auto -bottom-40 -left-40 z-[0] h-[150%] w-[150%] rounded-full bg-violet-700/10 blur-[100px]"></div>
	</AnimationOnIntersection>
);

const CodeImage = () => (
	<Image
		src={"/thisWebsiteCode.png"}
		alt=""
		className={`z-[5] h-auto p-8 xss:p-0 w-full ml-64 xs:ml-36 ss:ml-4 sm:ml-0 max-w-[600px] min-w-[570px] object-contain`}
		width={570}
		height={647}
	/>
);

const GithubButton = () => (
	<Link
		data-testid="hero-github-button"
		rel="noreferrer noopener"
		target="_blank"
		href={"https://github.com/JesseSinivuori/portfolio"}
		className="rounded-md mt-8
 border bg-primary/10 z-[0]
px-4 py-2 text-[18px] font-medium
text-white/90 shadow-lg border-white/25
duration-300 ease-in-out hover:border-white/50"
	>
		Github
	</Link>
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
];
