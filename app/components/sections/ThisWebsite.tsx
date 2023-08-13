import { styles } from "@/app/styles/style";
import Image from "next/image";
import { AnimationOnIntersection, Skill } from "../index";
import { SkillProps } from "../Skill";

export function ThisWebsite() {
  return (
    <section
      id="website"
      className={`${styles.sectionPaddingY} flex items-center flex-col-reverse md:flex-row
    justify-evenly overflow-hidden dark:overflow-visible bg-black relative`}
    >
      <div className={`flex justify-center items-center relative p-4`}>
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
        skillTextClassName="text-white/75 border-white/10"
      />
    ))}
  </div>
);

const CodeImageGradient = () => (
  <AnimationOnIntersection
    animation="appear-"
    retriggerAnimation={true}
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
];
