import { styles } from "@/app/styles/style";
import { Skill } from "../index";
import { SkillProps } from "../Skill";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "../helpers/Carousel";

export function News() {
  return (
    <section
      id="news"
      className={`${styles.sectionPaddingY} flex flex-col justify-center items-center relative`}
    >
      <div className="flex justify-center items-center flex-col w-full p-4">
        <Gradient />
        <Heading />
        <Paragraph />
        <Skills />
        <Carousel
          className="hidden md:flex"
          carouselObjects={[
            { content: <NewsArticleShowcase />, label: "Articles" },
            { content: <LandingPage />, label: "Landing Page" },
          ]}
        />
        <NewsArticleShowcase className="md:hidden flex" />
      </div>
      <div className="flex p-8 flex-wrap w-full gap-4 justify-center items-start md:pt-8 pt-24 z-[1]">
        <TryTheAppButton />
        <GithubButton />
      </div>
    </section>
  );
}

const Heading = () => (
  <h2 className={`${styles.h2} mb-4 text-center text-[42px]`}>News Website</h2>
);

const Paragraph = () => (
  <p className={`${styles.p} w-full max-w-[680px]`}>
    {`See breaking news from various countries and categories. Search articles from 80K+ sources. Powered by `}
    <Link
      href={"https://newsapi.org/"}
      className="dark:hover:text-blue-500 hover:text-blue-600"
    >
      NewsAPI
    </Link>
    {`. A beautiful landing page included. Redis used for caching the API responses.`}
  </p>
);

const Skills = () => (
  <div className="flex-wrap flex justify-center items-center w-full xs:min-w-[480px] xs:max-w-[680px] lg:max-w-full  relative z-[50]">
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
    href={"https://news-site-alpha.vercel.app/landing"}
    target="_blank"
    className={`z-[1]
  rounded-md border  border-transparent bg-blue-700 dark:bg-transparent text-white/90 px-4 py-2
  text-[18px] font-medium dark:text-white/90 hover:bg-blue-600
  shadow-lg duration-300 dark:border-blue-700
  ease-in-out hover:border-blue-600  
  dark:hover:text-blue-700 dark:hover:border-opacity-50`}
  >
    Try the App
  </Link>
);

const GithubButton = () => (
  <Link
    data-testid="hero-github-button"
    rel="noreferrer noopener"
    target="_blank"
    href={"https://github.com/JesseSinivuori/news"}
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
    id: "tailwindcss",
    src: "/tailwindcss.svg",
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    description:
      "The CSS framework that enables you to write your styles without making multiple files. Perfect for writing modular pieces, like React components and extremely fast prototyping.",
  },
  {
    id: "redis",
    src: "/redis.svg",
    name: "Redis",
    link: "https://redis.io/",
    description:
      "An extremely fast in-memory database. Used for fast operations, like caching or storing the user's login session.",
  },
];

const LandingPage = () => (
  <Link
    href="https://news-site-alpha.vercel.app/landing"
    target="_blank"
    title="Try the App"
    rel="noreferrer noopener"
    className="z-[1] py-8 flex justify-center"
    tabIndex={-1}
  >
    <Image
      src="/news-landing.png"
      alt=""
      width={1408}
      height={819}
      quality={100}
      className=" object-cover rounded-xl border border-transparent  hover:border-blue-500 transition-all duration-300"
    />
  </Link>
);

const Gradient = () => (
  <div className="noise-filter-radial bg-gradient-to-t from-blue-300 w-[150%] h-[100%] z-[-1] absolute"></div>
);

function NewsArticleShowcase({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col py-16 ${className || ""}`}>
      <div className="flex flex-col justify-center items-center gap-16">
        <div className="flex relative">
          <Link
            href="https://news-site-alpha.vercel.app/landing"
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
            className="z-10"
            tabIndex={-1}
          >
            <Image
              src={"/article1.png"}
              alt={""}
              width={368}
              height={489}
              className="flex border border-b-zinc-950/20 rounded-md  hover:border-blue-500 transition-all duration-300"
            />
          </Link>
          <Link
            href="https://news-site-alpha.vercel.app/landing"
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
            tabIndex={-1}
          >
            <Image
              src={"/article2.png"}
              alt={""}
              width={368}
              height={489}
              className="flex absolute md:left-60 left-20 md:top-10 top-24 border-b border-zinc-950/20 rounded-md md:hover:left-80 transition-all duration-500 border border-b-zinc-950/20 hover:border-blue-500"
            />
          </Link>
          <Link
            href="https://news-site-alpha.vercel.app/landing"
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
            tabIndex={-1}
          >
            <Image
              src={"/article3.png"}
              alt={""}
              width={368}
              height={489}
              className="flex absolute md:right-60 right-20 top-20 border-b border-zinc-950/20 rounded-md md:hover:right-80 transition-all duration-500 border border-b-zinc-950/20 hover:border-blue-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
