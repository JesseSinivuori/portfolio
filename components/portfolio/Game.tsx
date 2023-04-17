import styles, { layout } from "../../styles/style";
import { mygamegif, unity, csharp } from "../../public";
import Image from "next/image";
import SlideAnimation from "./SlideAnimation";
import Skill from "./Skill";

//return game section
export default function Game() {
  //array of languages
  const images = [
    {
      id: "unity",
      img: unity,
      name: "Unity",
    },
    {
      id: "csharp",
      img: csharp,
      name: "C Sharp",
    },
  ];

  return (
    //section
    <SlideAnimation animation={"slide-animation-top"}>
      <section
        id="game"
        className={`${layout.section} ${styles.paddingY} mt-24`}
      >
        {/**container */}
        <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
          <div className={``}>
            {/**header */}
            <h2
              className={`${styles.heading2} ${styles.flexCenter} mb-6 
                text-center text-[42px]`}
            >
              Infinite Ball Game
            </h2>

            {/**text under header*/}
            <p className={`${styles.paragraph} w-full ${styles.flexCenter} `}>
              Collect yellow things and avoid red ones.
            </p>
          </div>
          {/**container */}

          <SlideAnimation animation={"slide-animation-left"}>
            <div className={`${styles.flexCenter} mb-12 w-full`}>
              {/**map logos */}
              {images.map((img) => (
                <Skill img={img} key={img.id} />
              ))}
            </div>
          </SlideAnimation>
        </div>

        {/**contain gif */}
        <div className={`${layout.sectionImg} `}>
          {/**gif */}
          <Image
            src={mygamegif}
            alt="My game gif"
            className={`
                min-w-[270px] max-w-[470px] object-contain`}
          />
        </div>
      </section>
    </SlideAnimation>
  );
}
