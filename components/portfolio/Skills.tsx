import SlideAnimation from "./SlideAnimation";
import { mySkills } from "../../constants";
import styles from "../../styles/style";
import Image from "next/image";

//return skills
export default function Skills() {
  return (
    //section
    <SlideAnimation animation={"slide-animation-top"}>
      <section
        className={`relative z-[10] w-full flex-wrap
        ${styles.marginY} mt-12`}
      >
        {/**heading */}
        <h2
          className={`${styles.heading2} mb-8 
            text-center text-[42px]
            `}
        >
          My Skills
        </h2>

        <div className={`${styles.paddingY} `}>
          <SlideAnimation animation={"slide-animation-right"}>
            <div className={`flex-wrap ${styles.flexCenter}`}>
              {/**map languages */}
              {mySkills.map((img) => (
                //contain language
                <div
                  key={img.id}
                  className={`mt-6 
                            mb-2 items-center justify-start duration-100 ease-in 
                             sm:mb-6
                            `}
                >
                  {/**image */}
                  <Image
                    src={img.img}
                    alt={`image of ${img.id}`}
                    className={`m-10
                            w-[80px] min-w-[80px] object-contain 
                                `}
                  />
                  {/**name */}
                  <h2 className={`${styles.skillText} `}>{img.name}</h2>
                </div>
              ))}
            </div>
          </SlideAnimation>
        </div>
      </section>
    </SlideAnimation>
  );
}
