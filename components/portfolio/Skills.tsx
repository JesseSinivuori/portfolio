import SlideAnimation from "./SlideAnimation";
import { mySkills } from "../../constants";
import styles from "../../styles/style";
import Skill from "./Skill";

export default function Skills() {
  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <section
        className={`relative z-[10] w-full flex-wrap
        ${styles.marginY} mt-12`}
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
