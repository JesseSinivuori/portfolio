import styles, { layout } from "../../styles/style";
import { mygamegif, unity, csharp } from "../../public/assets/portfolio";
import Image from "next/image";
import SlideAnimation from "./SlideAnimation";

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
        className={`${layout.section} ${styles.paddingY} mt-8`}
      >
        {/**container */}
        <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
          <div className={``}>
            {/**header */}
            <h2
              className={`${styles.heading2} ${styles.flexCenter} mb-6 
                text-center text-[42px]`}
            >
              Original Game
            </h2>

            {/**text under header*/}
            <p className={`${styles.paragraph} w-full ${styles.flexCenter} `}>
              Designed and developed from scratch.{" "}
              <br className="hidden xs:block" />
              Made in Unity, using C Sharp.
            </p>
          </div>
          {/**container */}

          <SlideAnimation animation={"slide-animation-left"}>
            <div className={`${styles.flexCenter} w-full`}>
              {/**map logos */}
              {images.map((img) => (
                //contain image and name
                <div
                  key={img.id}
                  className={`${styles.flexCenter} 
                                m-4 flex-row flex-wrap
                                duration-100 ease-in sm:mb-6 `}
                >
                  {/**image */}
                  <Image
                    src={img.img}
                    alt={`image of ${img.id}`}
                    className={`m-8 w-[80px]
                                        min-w-[80px] object-contain object-center  ${
                                          img.id !== "unity" ? "" : "bg-white"
                                        }
                                        `}
                  />
                  {/**name of image */}
                  <p className={`${styles.skillText} `}>{img.name}</p>
                </div>
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
