import { styles } from "@/app/styles/style";
import { Skill, type SkillProps } from "../Skill";

export function Skills() {
	return (
		<section
			id="skills"
			className={`relative z-[10] w-full flex-wrap ${styles.sectionPaddingY}`}
		>
			<h2 className={`${styles.h2} mb-4 text-center`}>My Skills</h2>
			<div className={`flex justify-center items-center`}>
				<div
					className={`flex-wrap flex justify-center items-center max-w-[800px] xl:max-w-full`}
				>
					{mySkills.map((skill) => (
						<Skill
							{...skill}
							key={skill.id}
							cardClassName="!border-black/10 dark:!border-white/10"
							cardLogoTextClassName="dark:!text-blue-500 !text-blue-700"
						/>
					))}
				</div>
			</div>
			<Paragraph />
		</section>
	);
}

const Paragraph = () => (
	<p className={`${styles.p} mt-16 w-full text-center`}>
		These are the tools I use every day.
	</p>
);

const mySkills: SkillProps[] = [
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
		id: "javascript",
		src: "/javascript.svg",
		name: "JavaScript",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		description:
			"The programming language of the web. Used for making web applications interactive, with nearly 99% of websites using it.",
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
		id: "html",
		src: "/html5.svg",
		name: "HTML",
		link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		description:
			"The standard markup language for documents designed to be displayed in a web browser, defining the structure and content of web pages.",
	},
	{
		id: "css",
		src: "/css3.svg",
		name: "CSS",
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		description:
			"A stylesheet language used for describing the look and formatting of a document written in HTML, determining the visual presentation of web pages.",
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
