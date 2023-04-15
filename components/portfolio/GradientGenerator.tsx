import Image from "next/image";
import {
  gradientcolors,
  gradientoutput,
  react,
  tailwindcss,
  typescript,
  vite,
} from "../../public/assets/portfolio";
import styles, { layout } from "../../styles/style";
import Skill from "./Skill";
import SlideAnimation from "./SlideAnimation";
import Link from "next/link";

export default function GradientGenerator() {
  return (
    <SlideAnimation
      animation={"slide-animation-top"}
      className={`${styles.flexCenter} flex-col`}
    >
      <div className="w-full overflow-hidden ">
        <section className={` flex-col ${styles.paddingY} bg-[#0011ff]`}>
          <div
            className={`${layout.sectionInfo} ${styles.flexCenter} relative z-[10] flex-col p-4`}
          >
            <h2
              className={`${styles.heading2} mb-6 text-center text-[36px] xss:text-[42px]`}
            >
              {`Gradient Generator `}
              <br className="ss:hidden" />
              {`🪄`}
            </h2>
            <p
              className={`${styles.paragraph} ${styles.flexStart} w-full max-w-[480px] `}
            >
              {`A design tool for developers. `}
              {`Create, test, animate and save unlimited layers of gradients. `}
              {`Copy the code in one click.`}
            </p>
          </div>
          <SlideAnimation
            animation={"slide-animation-top"}
            className="relative z-[1] flex justify-center"
          >
            <div
              className={`flex-wrap ${styles.flexCenter}
             mb-12 xs:min-w-[480px] xs:max-w-[680px] lg:max-w-full
          `}
            >
              {images.map((img) => (
                <Skill img={img} key={img.id} />
              ))}
            </div>
          </SlideAnimation>
          <SlideAnimation animation={"slide-animation-top"}>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <Gradient />
              <Link
                href={"https://gradient-generator-beta.vercel.app/"}
                target="blank"
              >
                <Image
                  src={gradientcolors}
                  alt={"image of gradient colors settings"}
                  className=" relative z-[3] mb-24 ml-96 w-[600px] min-w-[600px] rounded-md
                    border border-transparent object-cover opacity-75 transition-all duration-300
                    hover:border-white xss:ml-72 sm:ml-0"
                />
              </Link>
              <Link
                href={"https://gradient-generator-beta.vercel.app/"}
                target="blank"
                className="hidden w-full justify-center sm:flex"
              >
                <Image
                  src={gradientoutput}
                  alt={"image of gradient output"}
                  className=" h-full min-h-[50px] rounded-md border
                    border-transparent object-cover opacity-75
                    transition-all duration-300 hover:border-white"
                />
              </Link>
            </div>
          </SlideAnimation>
        </section>
      </div>
      <Link
        href={"https://gradient-generator-beta.vercel.app/"}
        target="blank"
        className={`z-[1] my-24
                rounded-md border-[1px] border-[#eb51ff] py-2 px-4
                font-poppins text-[18px] font-medium
                text-white shadow-lg outline-none duration-300
                ease-in-out hover:border-[#eb51ff]
                hover:text-[#eb51ff] hover:shadow-[#eb51ff2a]`}
      >
        <span>Try the App</span>
      </Link>
    </SlideAnimation>
  );
}

const images = [
  {
    id: "react",
    img: react,
    name: "React",
  },
  {
    id: "vite",
    img: vite,
    name: "Vite",
  },
  {
    id: "typescript",
    img: typescript,
    name: "TypeScript",
  },
  {
    id: "tailwindcss",
    img: tailwindcss,
    name: "Tailwind CSS",
  },
];

const Gradient = () => {
  return (
    <>
      <div
        style={{
          opacity: "100%",
          filter: "blur(0px) invert(0)",
          display: "flex",
          height: "100%",
          width: "100%",
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: "0",
            width: "150%",
            height: "150%",
            background:
              "linear-gradient(215deg, rgba(80, 57, 254, 1) 0%, rgba(255, 62, 41, 1) 50%, rgba(255, 66, 195, 1) 100%)",
            filter: "blur(190px)",
            opacity: "1",
            animation:
              "animateOpacity1 20s linear infinite, animateRotation1 20s linear infinite",
          }}
        ></div>
        <style>
          {`
          @keyframes animateOpacity1 {
            0% {
              opacity: 0%;
            }
            50% {
              opacity: 100%;
            }
            100% {
              opacity: 0%;
            }
          }
          
          @keyframes animateRotation1 {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
        </style>
      </div>
      <div
        style={{
          opacity: "100%",
          filter: "blur(0px) invert(0)",
          display: "flex",
          height: "100%",
          width: "100%",
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(215deg, rgba(255, 162, 0, 1) 0%, rgba(255, 62, 41, 0) 50%, rgba(255, 66, 132, 1) 100%)",
            filter: "blur(267px)",
            opacity: "1",
            animation:
              "animateOpacity2 10s linear infinite, animateRotation2 10s linear infinite",
          }}
        ></div>
        <style>
          {`
          @keyframes animateOpacity2 {
            0% {
              opacity: 100%;
            }
            50% {
              opacity: 100%;
            }
            100% {
              opacity: 100%;
            }
          }
          
          @keyframes animateRotation2 {
            0% {
              transform: rotate(0deg);
            }
            0% {
              transform: rotate(360deg);
            }
          }
        `}
        </style>
      </div>
    </>
  );
};