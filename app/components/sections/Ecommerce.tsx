import { styles } from "@/app/styles/style";
import { Skill, EcommerceImages } from "../index";
import { SkillProps } from "../Skill";
import Link from "next/link";

export function Ecommerce() {
  return (
    <section
      id="jesse's_kitchen"
      className={`${styles.sectionPaddingY} flex flex-col justify-center items-center bg-black dark:bg-transparent overflow-hidden dark:overflow-visible`}
    >
      <div className="flex justify-center items-center relative z-[10] flex-col w-full p-4">
        <Heading />
        <Paragraph />
      </div>
      <Skills />
      <EcommerceImages />
      <div className="flex flex-wrap w-full gap-4 justify-center items-start md:mt-8 sm:-mt-16 z-[1]">
        <TryTheAppButton />
        <GithubButton />
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
  <div className="flex-wrap flex justify-center items-center w-full xs:min-w-[480px] xs:max-w-[680px] lg:max-w-full relative z-[1]">
    {skills.map((skill) => (
      <Skill
        {...skill}
        key={skill.id}
        skillTextClassName="text-white/75 border-white/10"
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
        font-medium text-white shadow-lg duration-300
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
 border bg-primary/10
px-4 py-2 text-[18px] font-medium border-transparent
text-white/90 shadow-lg
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
  },
  {
    id: "nextjs",
    src: "/nextjs.svg",
    name: "Next.js",
    skillImageClassName: "invert",
  },
  {
    id: "typescript",
    src: "/typescript.svg",
    name: "TypeScript",
  },
  {
    id: "tailwindcss",
    src: "/tailwindcss.svg",
    name: "Tailwind CSS",
  },
  {
    id: "sanity",
    src: "/sanity.svg",
    name: "Sanity",
  },
  {
    id: "stripe",
    src: "/stripe.svg",
    name: "Stripe",
  },
];
