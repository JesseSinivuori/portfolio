import Image from "next/image";
import { styles } from "@/app/styles/style";
import { AnimationOnIntersection, Skill, SkillProps } from "../index";
import Link from "next/link";

export function GradientGenerator() {
  return (
    <section
      id="gradient_generator"
      className={`${styles.sectionPaddingY} flex justify-center items-center flex-col `}
    >
      <div className="w-full overflow-hidden bg-blue-700/90 z-[1] relative">
        <div className={`w-full h-full flex-col `}>
          <div
            className={`flex justify-center items-center flex-col p-4 relative z-[1]`}
          >
            <Heading />
            <Paragraph />
            <Skills />
          </div>
          <div className=" h-full w-full flex-col items-center relative flex justify-center z-[0]">
            <Gradient />
            <MainImage />
            <OutputImage />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center flex-wrap gap-4">
        <TryTheAppButton />
        <GithubButton />
      </div>
    </section>
  );
}

const Heading = () => (
  <h2
    className={`${styles.h2} text-white/90 mb-4 text-center text-[36px] xss:text-[42px]`}
  >
    {"Gradient Generator "}
    <br className="ss:hidden" />
    {"🪄"}
  </h2>
);

const Paragraph = () => (
  <p className={`${styles.p} text-white/75 w-full max-w-[480px]`}>
    {"A design tool for developers. "}
    {"Create, test, animate and save unlimited layers of gradients. "}
    {"Copy the code in one click."}
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
    id: "vite",
    src: "/vite.svg",
    name: "Vite",
    link: "",
    description:
      "A lightning-fast frontend build tool, that offers a rich set of features such as hot module replacement and efficient cold boot, improving the modern web development experience.",
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

const Gradient = () => (
  <AnimationOnIntersection
    animation="appear-"
    className="!duration-[3s] w-full h-full"
  >
    <div className="absolute m-auto inset-0 z-[-1] rounded-full h-[210%] w-[110%] animate-spin-and-pulse-20s bg-gradient-to-tr from-sky-500 via-rose-500 to-pink-500 blur-[100px]"></div>
    <div className="absolute m-auto inset-0 z-[-1] rounded-full h-[200%] w-[100%] animate-spin-and-pulse-10s-reverse bg-gradient-to-tr from-orange-500 via-rose-500 to-pink-500 blur-[100px]"></div>
  </AnimationOnIntersection>
);

const MainImage = () => (
  <Link
    href={"https://gradient-generator-beta.vercel.app/"}
    target="_blank"
    title="Try the App"
    rel="noreferrer noopener"
    className="mb-24"
    tabIndex={-1}
  >
    <Image
      src={"/gradientGeneratorColors.png"}
      alt=""
      className=" relative z-[3] ml-96 w-[600px] min-w-[600px] rounded-md
  border border-transparent object-cover opacity-75 transition-all duration-300
  hover:border-white xss:ml-72 sm:ml-0"
      width={600}
      height={405}
    />
  </Link>
);

const OutputImage = () => (
  <Link
    href={"https://gradient-generator-beta.vercel.app/"}
    target="_blank"
    className="hidden justify-center mx-2 mb-8 sm:flex"
    title="Try the App"
    rel="noreferrer noopener"
    tabIndex={-1}
  >
    <Image
      src={"/gradientGeneratorOutput.png"}
      alt=""
      className="rounded-md border
  border-transparent object-cover opacity-75
  transition-all duration-300 hover:border-white"
      width={1000}
      height={91}
    />
  </Link>
);

const Skills = () => (
  <div
    className={`flex-wrap flex justify-center items-center mb-12 lg:max-w-full relative z-[1]`}
  >
    {skills.map((skill) => (
      <Skill
        {...skill}
        key={skill.id}
        logoTextClassName="text-white/75 border-white/10"
        cardLogoTextClassName="dark:!text-blue-400 !text-blue-500"
        cardClassName="dark:!bg-blue-900 !border-black/10 dark:!border-white/10"
      />
    ))}
  </div>
);

const TryTheAppButton = () => (
  <Link
    href={"https://gradient-generator-beta.vercel.app/"}
    target="_blank"
    className={`z-[1]
rounded-md border bg-rose-700 dark:bg-transparent text-white/90 px-4 py-2
text-[18px] font-medium dark:text-white/90 hover:bg-rose-800
shadow-lg duration-300 dark:border-rose-500
ease-in-out hover:border-rose-500 border-transparent
dark:hover:text-rose-500 dark:hover:border-opacity-50`}
  >
    Try the App
  </Link>
);

const GithubButton = () => (
  <Link
    data-testid="hero-github-button"
    rel="noreferrer noopener"
    target="_blank"
    href={"https://github.com/JesseSinivuori/gradient-generator"}
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
