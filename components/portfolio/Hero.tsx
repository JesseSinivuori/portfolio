import styles from "../../styles/style";
import { imgofme } from "../../public/assets/portfolio";
import ContactButton from "./ContactButton";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SlideAnimation from "./SlideAnimation";
import HeroGradient from "./HeroGradient";
import Button from "./Button";
import Link from "next/link";

//return hero section
export default function Hero() {
  return (
    //section
    <SlideAnimation animation={"slide-animation-top"}>
      <section
        id="home"
        className={`flex-col md:flex-row ${styles.paddingY} ${styles.flexCenter} relative`}
      >
        {/**container */}
        <div
          className={`flex-1 ${styles.flexStart} z-[10] flex-col px-6 sm:px-16 xl:px-0`}
        >
          {/**contain heading and button*/}
          <div className="flex w-full flex-wrap items-center justify-between">
            {/**heading */}

            <h1
              className="flex-1 font-poppins text-[52px] font-light 
                    leading-[75px] text-white ss:text-[72px] ss:leading-[100px]"
            >
              .&#106;ess&#101; <br className="hidden sm:block" />{" "}
              <SlideAnimation animation={"slide-animation-left"}>
                <span className={`text-gradient`}>
                  s&#105;niv&#117;o&#114;&#105;
                </span>
              </SlideAnimation>
            </h1>
          </div>

          {/**text under heading */}
          <h1
            className="w-full font-poppins text-[52px]
                    font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100px]"
          >
            Software Engineer
          </h1>
          <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
            I build websites, apps and games.
          </p>
          {/**button */}
          <div className="my-8 flex items-center justify-center">
            <Link href={"/portfolio/contact"}>
              <button
                type="button"
                className={`rounded-md border-[1px] border-white
                py-2 px-4 font-poppins text-[18px] 
                font-medium text-[#ffffff] shadow-lg
                outline-none duration-300
                ease-in-out hover:border-[#58f3fe]
                hover:text-[#58f3fe] hover:shadow-[#58f3fe25]
                 
                `}
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
        <HeroGradient />
        {/**contain image and gradient */}
        <div
          className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
        >
          {/**image */}
          <Image
            src={imgofme}
            alt="Image of me."
            className=":w-[100%] z-[5] 
                h-[100%] max-h-[650px] min-w-[270px] object-contain
                "
          />

          {/**gradients */}
            <div
              className={`absolute z-[0] h-[1000px] min-h-[1000px] w-[500px] min-w-[500px]`}
              style={{ opacity: "100%", filter: "blur(0px) invert(0)" }}
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: "0",
                  width: "100%",
                  height: "100%",
                  background:
                    "radial-gradient(circle, rgba(0, 4, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 60%, rgba(0, 0, 0, 1) 70%, rgba(102, 245, 236, 0) 100%)",
                  filter: "blur(240px)",
                  opacity: "0.25",
                  animation: "false",
                }}
              ></div>
            </div>
        </div>
      </section>
    </SlideAnimation>
  );
}
