import styles, { layout } from "../../styles/style";
import Image from "next/image";
import SlideAnimation from "./SlideAnimation";
import Skill from "./Skill";

export default function Website() {
  const images = [
    {
      id: "react",
      img: "/react.svg",
      name: "React",
    },
    {
      id: "nextjs",
      img: "/nextjs.svg",
      name: "Next.js",
    },
    {
      id: "typescript",
      img: "/typescript.svg",
      name: "TypeScript",
    },
    {
      id: "tailwindcss",
      img: "/tailwindcss.svg",
      name: "Tailwind CSS",
    },
  ];

  const codeimg = "/codeimg.png";

  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <section className="pb-32">
        <section
          id="website"
          className={`${layout.sectionReverse}  
            ${styles.flexCenter} ${styles.boxWidth} flex-col-reverse
            ${styles.paddingY} pt-24
            `}
        >
          <SlideAnimation animation={"slide-animation-top"}>
            <div
              className={`${layout.sectionImgReverse} flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
            >
              <Image
                src={codeimg}
                alt="Image of my code."
                className={` z-[5]
                    w-[470px]
                    max-w-[470px]
                    object-contain
                    lg:w-[570px]
                    lg:max-w-[570px]
                    `}
                width={570}
                height={570}
              />

              <div
                className={`absolute top-0 right-0 left-0 bottom-0 z-[0]
                h-[600px] min-h-[600px] w-[400px] min-w-[400px]`}
                style={{ opacity: "100%", filter: "blur(0px) invert(0)" }}
              >
                <div
                  style={{
                    position: "absolute",
                    zIndex: "0",
                    width: "100%",
                    height: "100%",
                    background:
                      "radial-gradient(circle, rgba(163, 88, 254, 0.5) 0%, rgba(255, 255, 255, 0.1) 70%, rgba(0, 0, 0, 1) 70%, rgba(102, 245, 236, 0) 100%)",
                    filter: "blur(240px)",
                    opacity: "1",
                  }}
                ></div>
              </div>
            </div>
          </SlideAnimation>

          <div
            className={`${styles.flexCenter} mb-8 mt-8 flex-wrap sm:mb-20
                    
                  `}
          >
            <div className={``}>
              <h2 className={`${styles.heading2} mb-6 text-center text-[42px]`}>
                This Website
              </h2>

              <p
                className={`${styles.paragraph} w-full ${styles.flexCenter} justify-center`}
              >
                {`Built with ❤️, reusable components `}
                <br />
                {`+ my gradient generator tool.`}
              </p>
            </div>
            <SlideAnimation animation={"slide-animation-right"}>
              <div className={`flex-wrap ${styles.flexCenter}`}>
                {images.map((img) => (
                  <Skill img={img} key={img.id} />
                ))}
              </div>
            </SlideAnimation>
          </div>
        </section>
      </section>
    </SlideAnimation>
  );
}
