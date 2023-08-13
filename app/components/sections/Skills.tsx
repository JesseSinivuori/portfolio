import { styles } from "@/app/styles/style";
import { Skill } from "../index";
import { SkillProps } from "../Skill";

export function Skills() {
  return (
    <section
      id="skills"
      className={`relative z-[10] w-full flex-wrap ${styles.sectionPaddingY}`}
    >
      <h2 className={`${styles.h2} mb-4 text-center`}>My Skills</h2>
      <div className={`flex justify-center items-center`}>
        <div
          className={`flex-wrap flex justify-center items-center max-w-[800px] xl:max-w-full`}
        >
          {mySkills.map((skill) => (
            <Skill {...skill} key={skill.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

const mySkills: SkillProps[] = [
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
