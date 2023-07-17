import styles from "../../../styles/style";
import { Skill, SlideAnimation } from "../index";

export default function Skills() {
  const mySkills = [
    {
      id: "react",
      src: "/react.svg",
      name: "React",
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
    {
      id: "csharp",
      src: "/csharp.svg",
      name: "C Sharp",
    },
  ];
  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <section
        className={`relative z-[10] w-full flex-wrap
        ${styles.marginY}`}
      >
        <h2 className={`${styles.heading2} mb-8 text-center text-[42px]`}>
          My Skills
        </h2>

        <div className={`${styles.paddingY} ${styles.flexCenter}`}>
          <SlideAnimation animation={"slide-animation-top"}>
            <div
              className={`flex-wrap ${styles.flexCenter}
              `}
            >
              {mySkills.map((skill) => (
                <Skill skill={skill} key={skill.id} />
              ))}
            </div>
          </SlideAnimation>
        </div>
      </section>
    </SlideAnimation>
  );
}
