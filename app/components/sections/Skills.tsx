import styles from "@/app/styles/style";
import { Skill } from "../index";
import { AnimationOnIntersection } from "../helpers/AnimationOnIntersection";

export default function Skills() {
  const mySkills = [
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
      id: "javascript",
      src: "/javascript.svg",
      name: "JavaScript",
    },
    {
      id: "typescript",
      src: "/typescript.svg",
      name: "TypeScript",
    },
    {
      id: "html",
      src: "/html5.svg",
      name: "HTML",
    },
    {
      id: "css",
      src: "/css3.svg",
      name: "CSS",
    },
    {
      id: "tailwindcss",
      src: "/tailwindcss.svg",
      name: "Tailwind CSS",
    },
  ];
  return (
    <AnimationOnIntersection animation={"appear-from-bottom"}>
      <section
        className={`relative z-[10] w-full flex-wrap mt-8 ${styles.paddingY}`}
      >
        <h2 className={`${styles.heading2} mb-8 text-center text-[42px]`}>
          My Skills
        </h2>
        <div className={` ${styles.flexCenter}`}>
          <AnimationOnIntersection animation={"appear-from-bottom"}>
            <div className={`flex-wrap ${styles.flexCenter}`}>
              {mySkills.map((skill) => (
                <Skill skill={skill} key={skill.id} />
              ))}
            </div>
          </AnimationOnIntersection>
        </div>
      </section>
    </AnimationOnIntersection>
  );
}
