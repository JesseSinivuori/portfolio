import { styles } from "@/app/styles/style";
import Image from "next/image";
import { AnimationOnIntersection, Skill } from "../index";
import Link from "next/link";

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
        <TryTheAppButton />
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

const skills = [
  {
    id: "react",
    src: "/react.svg",
    name: "React",
  },
  {
    id: "nextjs",
    src: "/nextjs.svg",
    name: "Next.js",
    skillImageClassName: "dark:invert",
  },
  {
    id: "typescript",
    src: "/typescript.svg",
    name: "TypeScript",
  },
  {
    id: "postgresql",
    src: "/postgresql.svg",
    name: "PostgreSQL",
  },
];

const Skills = () => (
  <div className={`flex-wrap flex justify-center items-center max-w-sm`}>
    {skills.map((skill) => (
      <Skill {...skill} key={skill.id} />
    ))}
  </div>
);

const TryTheAppButton = () => (
  <Link
    rel="noreferrer noopener"
    href={"https://ad-manager-beta.vercel.app/"}
    target="_blank"
    className="z-[1] mt-12
  rounded-md border  border-transparent bg-pink-700 dark:bg-transparent text-white/90 px-4 py-2
  text-[18px] font-medium dark:text-white/90 hover:bg-pink-800
  shadow-lg duration-300 dark:border-pink-500
  ease-in-out hover:border-pink-500 
  dark:hover:text-pink-500 dark:hover:border-opacity-50"
  >
    Try the App
  </Link>
);

const Gradient = () => (
  <AnimationOnIntersection
    animation="appear-"
    className="absolute z-[-1] top-0 h-[150%] w-[300%] duration-[2s] -rotate-12"
    rootMargin="0px 0px -300px 0px"
    retriggerAnimation={true}
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
