import Image from "next/image";
import styles from "@/app/styles/style";
import { AnimationOnIntersection, Skill } from "../index";
import Link from "next/link";

export default function GradientGenerator() {
  return (
    <section id="gradient_generator">
      <AnimationOnIntersection
        animation={"appear-from-bottom"}
        className={`${styles.flexCenter} flex-col `}
      >
        <div className="w-full overflow-hidden">
          <div
            className={`w-full flex-col overflow-hidden ${styles.paddingY} bg-[#0011ff]`}
          >
            <div
              className={`${styles.flexCenter} relative z-[10] flex-col p-4`}
            >
              <h2
                className={`${styles.heading2} mb-6 text-center text-[36px] xss:text-[42px]`}
              >
                {"Gradient Generator "}
                <br className="ss:hidden" />
                {"🪄"}
              </h2>
              <p className={`${styles.paragraph} w-full max-w-[480px] `}>
                {"A design tool for developers. "}
                {
                  "Create, test, animate and save unlimited layers of gradients. "
                }
                {"Copy the code in one click."}
              </p>
            </div>
            <AnimationOnIntersection
              animation={"appear-from-bottom"}
              className="relative z-[1] flex justify-center"
            >
              <div
                className={`flex-wrap ${styles.flexCenter}
             mb-12 xs:min-w-[480px] xs:max-w-[680px] lg:max-w-full
          `}
              >
                {skills.map((skill) => (
                  <Skill skill={skill} key={skill.id} />
                ))}
              </div>
            </AnimationOnIntersection>
            <AnimationOnIntersection animation={"appear-from-bottom"}>
              <div className="flex h-full w-full flex-col items-center justify-center">
                <Gradient />
                <Link
                  href={"https://gradient-generator-beta.vercel.app/"}
                  target="_blank"
                  title="Try the App"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={"/gradientcolors.webp"}
                    alt=""
                    className=" relative z-[3] mb-24 ml-96 w-[600px] min-w-[600px] rounded-md
                    border border-transparent object-cover opacity-75 transition-all duration-300
                    hover:border-white xss:ml-72 sm:ml-0"
                    height={405}
                    width={600}
                    quality={100}
                  />
                </Link>
                <Link
                  href={"https://gradient-generator-beta.vercel.app/"}
                  target="_blank"
                  className="hidden w-full justify-center px-2 sm:flex"
                  title="Try the App"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={"/gradientoutput.webp"}
                    alt=""
                    className="h-full rounded-md border
                    border-transparent object-cover opacity-75
                    transition-all duration-300 hover:border-white"
                    height={90}
                    width={1000}
                    quality={100}
                  />
                </Link>
              </div>
            </AnimationOnIntersection>
          </div>
        </div>
        <Link
          href={"https://gradient-generator-beta.vercel.app/"}
          target="_blank"
          className={`z-[1]
                my-16 rounded-md border-[1px] border-[#eb51ff] px-4
                py-2 text-[18px] font-medium
                text-white shadow-lg outline-none duration-300
                ease-in-out hover:border-[#eb51ff]
                hover:text-[#eb51ff] hover:shadow-[#eb51ff2a]`}
        >
          Try the App
        </Link>
      </AnimationOnIntersection>
    </section>
  );
}

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
  <>
    <div className="absolute z-[0] h-[200%] w-[200%] animate-spin-and-pulse-20s bg-gradient-to-tr from-sky-500 via-rose-500 to-pink-500 blur-[100px]"></div>
    <div className="absolute z-[0] h-[150%] w-[150%] animate-spin-and-pulse-10s-reverse bg-gradient-to-tr from-orange-500 via-rose-500 to-pink-500 blur-[100px]"></div>
  </>
);
