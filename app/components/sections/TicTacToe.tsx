import { styles } from "@/app/styles/style";
import { Skill } from "../index";
import { SkillProps } from "../Skill";
import Link from "next/link";
import Image from "next/image";
import TicTacToeFireWorks from "./TicTacToeFireWorks";

export function TicTacToe() {
  return (
    <section
      id="tic-tac-toe"
      className={`${styles.sectionPaddingY} flex flex-col justify-center items-center relative`}
    >
      <div className="flex justify-center items-center flex-col w-full p-4 bg-green-800 dark:bg-transparent overflow-hidden dark:overflow-visible">
        <Gradient />
        <Heading />
        <Paragraph />
        <Skills />
        <TicTacToeFireWorks>
          <MainImage />
        </TicTacToeFireWorks>
      </div>
      <div className="flex p-8 flex-wrap w-full gap-4 justify-center items-start md:mt-8 sm:-mt-16 z-[1]">
        <TryTheAppButton />
        <GithubButton />
      </div>
    </section>
  );
}

const Heading = () => (
  <h2
    className={`${styles.h2} !text-white/90 mb-4 text-center !text-[34px] xs:!text-[48px] xss:!text-[44px]`}
  >
    Tic-Tac-Toe
  </h2>
);

const Paragraph = () => (
  <p className={`${styles.p} !text-white/75 w-full max-w-[680px]`}>
    {`Play tic-tac-toe with a friend through an invite link. Or maybe you want to
    play locally, vs ChatGPT or a bot? Sign in with GitHub to play against AI.
    Leveraging Convex real-time database for multiplayer, Redis for rate limiting, OpenAI's API, for ChatGPT and NextAuth for authentication.`}
  </p>
);

const Skills = () => (
  <div className="flex-wrap flex justify-center items-center w-full xs:min-w-[480px] xs:max-w-[880px]  relative z-[1]">
    {skills.map((skill) => (
      <Skill
        {...skill}
        key={skill.id}
        logoTextClassName="text-white/75 border-white/10"
        cardClassName="!border-black/10 dark:!border-white/10"
        cardLogoTextClassName="dark:!text-blue-500 !text-blue-500"
      />
    ))}
  </div>
);

const TryTheAppButton = () => (
  <Link
    rel="noreferrer noopener"
    href={"https://tic-tac-toe-x.vercel.app/"}
    target="_blank"
    className={`z-[1]
  rounded-md border  border-transparent bg-green-700 dark:bg-transparent text-white/90 px-4 py-2
  text-[18px] font-medium dark:text-white/90 hover:bg-green-600
  shadow-lg duration-300 dark:border-green-700
  ease-in-out hover:border-green-600  
  dark:hover:text-green-700 dark:hover:border-opacity-50`}
  >
    Try the App
  </Link>
);

const GithubButton = () => (
  <Link
    data-testid="hero-github-button"
    rel="noreferrer noopener"
    target="_blank"
    href={"https://github.com/JesseSinivuori/tic-tac-toe"}
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
    id: "convex",
    src: "/convex.svg",
    name: "Convex",
    link: "https://www.convex.dev/",
    description:
      "A real-time database for TypeScript. Keeps your data automatically up to date on the front end, which allows you to move super fast.",
  },
  {
    id: "redis",
    src: "/redis.svg",
    name: "Redis",
    link: "https://redis.io/",
    description:
      "An extremely fast in-memory database. Used for fast operations, like caching or storing the user's login session.",
  },
  {
    id: "openai",
    src: "/openai.svg",
    name: "OpenAI",
    cardLogoClassName: "dark:invert",
    logoClassName: "invert",
    link: "https://platform.openai.com/docs/introduction",
    description:
      "The platform for cutting-edge artificial intelligence models and capabilities. They offer their API's for developers to build on.",
  },
  {
    id: "nextauth",
    src: "/nextauth.png",
    name: "NextAuth.js",
    link: "https://next-auth.js.org/",
    description:
      "A authentication solution, with various providers, like GitHub, Google, Facebook, Twitter and more.",
  },
];

const MainImage = () => (
  <Link
    href="https://tic-tac-toe-x.vercel.app/"
    target="_blank"
    title="Try the App"
    rel="noreferrer noopener"
    className="z-[4] py-8 flex justify-center"
    tabIndex={-1}
  >
    <Image
      src="/tic-tac-toe.png"
      alt=""
      width={684}
      height={684}
      quality={100}
      className="object-cover ss:w-[684px] ss:h-[684px] xs:w-[524px] xs:h-[524px] xss:w-[424px] xss:h-[424px] w-[324px] h-[324px] rounded-xl border border-transparent hover:border-white dark:hover:border-green-500 transition-all duration-300"
    />
  </Link>
);

const Gradient = () => (
  <div className="noise-filter-radial dark:bg-gradient-to-t from-green-300 w-[150%] h-[100%] z-[-1] absolute"></div>
);
