import styles, { layout } from "../../../styles/style";
import { SlideAnimation, Skill } from "../index";
import Image from "next/image";

export default function Game() {
  const images = [
    {
      id: "unity",
      src: "/unity.svg",
      name: "Unity",
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
        id="game"
        className={`${layout.section} ${styles.paddingY} mt-24 `}
      >
        <div className={`${layout.sectionInfo} ${styles.flexCenter} `}>
          <div>
            <h2
              className={`${styles.heading2} ${styles.flexCenter} mb-6 
                text-center text-[42px]`}
            >
              Infinite Ball Game
            </h2>
            <p className={`${styles.paragraph} w-full ${styles.flexCenter} `}>
              Collect yellow things and avoid red ones.
            </p>
          </div>
          <SlideAnimation animation={"slide-animation-left"}>
            <div className={`${styles.flexCenter} mb-12 w-full`}>
              {images.map((skill) => (
                <Skill skill={skill} key={skill.id} />
              ))}
            </div>
          </SlideAnimation>
        </div>
        <div className={` mt-0 flex flex-1 justify-center md:mt-8`}>
          <Image
            src="/mygamevid.webp"
            alt="video of my game"
            className="h-[270px] min-w-[270px] max-w-[470px] object-contain"
            width={470}
            height={270}
            quality={100}
          />
        </div>
      </section>
    </SlideAnimation>
  );
}
