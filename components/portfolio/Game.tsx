import styles, { layout } from "../../styles/style";
import SlideAnimation from "./SlideAnimation";
import Skill from "./Skill";

export default function Game() {
  const mygamemp4 = "/mygamemp4.mp4";
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
        className={`${layout.section} ${styles.paddingY} mt-24`}
      >
        <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
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
        <div className={`${layout.sectionImg}`}>
          <video
            loop
            autoPlay
            muted
            controls
            className="min-w-[270px] max-w-[470px] object-contain"
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-6fbcc.appspot.com/o/public-firebase%2Fmygamemp4.mp4?alt=media&token=7cced7c5-4283-446f-b513-150105115029"
              type="video/mp4"
            />
            <span className={`${styles.paragraph}`}>
              Your browser does not support the video tag.
            </span>
          </video>
        </div>
      </section>
    </SlideAnimation>
  );
}
