import Image from "next/image";
import { styles } from "@/app/styles/style";
import { AnimationOnIntersection, Skill } from "../index";
import Link from "next/link";
import gradientGeneratorColors from "@/public/gradientGeneratorColors.png";
import gradientGeneratorOutput from "@/public/gradientGeneratorOutput.png";

export function GradientGenerator() {
  return (
    <section
      id="gradient_generator"
      className={`${styles.sectionPaddingY} flex justify-center items-center flex-col `}
    >
      <div className="w-full overflow-hidden bg-blue-700 z-[1] relative">
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
      <TryTheAppButton /> {/**THIS IS OUT OF PLACE */}
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

const skills = [
  {
    id: "react",
    src: "/react.svg",
    name: "React",
  },
  {
    id: "vite",
    src: "/vite.svg",
    name: "Vite",
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

const OutputImage = () => (
  <Link
    href={"https://gradient-generator-beta.vercel.app/"}
    target="_blank"
    className="hidden w-full justify-center px-2 pb-8 sm:flex"
    title="Try the App"
    rel="noreferrer noopener"
  >
    <Image
      src={gradientGeneratorOutput}
      blurDataURL={gradientGeneratorOutput.blurDataURL}
      placeholder="blur"
      alt=""
      className="rounded-md border
  border-transparent object-cover opacity-75
  transition-all duration-300 hover:border-white"
      quality={100}
    />
  </Link>
);

const MainImage = () => (
  <Link
    href={"https://gradient-generator-beta.vercel.app/"}
    target="_blank"
    title="Try the App"
    rel="noreferrer noopener"
  >
    <Image
      src={gradientGeneratorColors}
      blurDataURL={gradientGeneratorColors.blurDataURL}
      placeholder="blur"
      alt=""
      className=" relative z-[3] mb-24 ml-96 w-[600px] min-w-[600px] rounded-md
  border border-transparent object-cover opacity-75 transition-all duration-300
  hover:border-white xss:ml-72 sm:ml-0"
      quality={100}
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
        skillTextClassName="text-white/75 border-white/10"
      />
    ))}
  </div>
);

const TryTheAppButton = () => (
  <Link
    href={"https://gradient-generator-beta.vercel.app/"}
    target="_blank"
    className={`z-[1] my-8
rounded-md border bg-rose-700 dark:bg-transparent text-white/90 px-4 py-2
text-[18px] font-medium dark:text-white/90 hover:bg-rose-800
shadow-lg duration-300 dark:border-rose-500
ease-in-out hover:border-rose-500 border-transparent
dark:hover:text-rose-500 dark:hover:border-opacity-50`}
  >
    Try the App
  </Link>
);
