import styles from "@/app/styles/style";
import Image from "next/image";
import { AnimationOnIntersection, Skill } from "../index";
import Link from "next/link";

export default function AdManager() {
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

  return (
    <AnimationOnIntersection animation={"appear-from-bottom"}>
      <section
        id="ad_manager"
        className={` pb-32
            ${styles.flexCenter} flex-col  md:flex-row
            ${styles.paddingY} justify-evenly
            `}
      >
        <div
          className={`${styles.flexCenter} mb-8 mt-8 flex-col flex-wrap sm:mb-20`}
        >
          <div>
            <h2 className={`${styles.heading2} mb-6 text-center text-[42px]`}>
              Ad Manager
            </h2>
            <p
              className={`${styles.paragraph} w-full max-w-[480px] ${styles.flexCenter} justify-center`}
            >
              {"A full stack CRUD app for managing ad campaigns. "}
              {"Built with Next.js app router, Vercel Postgres and "}
              {"Kysely + Zod for end to end type safety."}
            </p>
          </div>
          <AnimationOnIntersection animation={"slide-from-left"}>
            <div className={`flex-wrap ${styles.flexCenter} max-w-sm`}>
              {skills.map((skill) => (
                <Skill skill={skill} key={skill.id} />
              ))}
            </div>
          </AnimationOnIntersection>
        </div>
        <AnimationOnIntersection animation={"appear-from-bottom"}>
          <div
            className={`flex ${styles.flexCenter} relative 
              my-10 w-full flex-col px-0 sm:px-10 `}
          >
            <Link
              href={"https://ad-manager-beta.vercel.app/"}
              target="_blank"
              className="relative w-full justify-center px-2 transition-all duration-1000 sm:flex"
              title="Try the App"
              rel="noreferrer noopener"
            >
              <div className="absolute inset-0 z-[10] h-full w-full rounded-full bg-gradient-to-tl from-rose-500  to-pink-500 opacity-10 blur-[100px] transition-all duration-1000"></div>
              <Image
                src={"/admanager.webp"}
                alt=""
                className={` z-[5]
                    max-h-[391px]
                    w-[570px]
                    min-w-[240px]
                    object-contain
                    lg:w-[570px]
                    lg:max-w-[570px]
                    `}
                width={570}
                height={391}
                quality={100}
              />
            </Link>
            <Link
              rel="noreferrer noopener"
              href={"https://ad-manager-beta.vercel.app/"}
              target="_blank"
              className={`z-[1] mt-12
                rounded-md border-[1px] border-pink-500 px-4 py-2
                text-[18px] font-medium text-white
                shadow-lg outline-none duration-300
                ease-in-out hover:border-pink-500
                hover:text-pink-500 hover:shadow-pink-500/25`}
            >
              Try the App
            </Link>
          </div>
        </AnimationOnIntersection>
      </section>
    </AnimationOnIntersection>
  );
}
