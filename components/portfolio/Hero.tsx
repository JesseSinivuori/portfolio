import styles from "../../styles/style";
import Image from "next/image";
import Link from "next/link";
import { HeroGradient, SlideAnimation } from "./index";

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex-col md:flex-row ${styles.paddingY} ${styles.flexCenter} relative`}
    >
      <div
        className={`flex-1 ${styles.flexStart} z-[10] flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="flex w-full flex-wrap items-center justify-between">
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
        <h1
          className="w-full font-poppins text-[52px] font-semibold leading-[75px]
             text-white ss:text-[68px] ss:leading-[100px]"
        >
          Software Engineer
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          I 😍 building things.
        </p>
        <div className="my-8 flex items-center justify-center">
          <Link
            href={"/portfolio/contact"}
            className="rounded-md border-[1px] border-[#58f3fe]
                py-2 px-4 font-poppins text-[18px] 
                font-medium text-[#ffffff] shadow-lg
                outline-none duration-300
                ease-in-out hover:border-[#58f3fe]
                hover:text-[#58f3fe] hover:shadow-[#58f3fe25]"
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>
      <HeroGradient />
      <div
        className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <Image
          src={"/imgofme.png"}
          alt="Image of me."
          className="z-[5] h-[450px] max-h-[650px] min-w-[270px] max-w-full
            object-contain md:h-full"
          width={650}
          height={650}
          placeholder="blur"
          blurDataURL={"/imgofme.png"}
          priority
        />
        <div
          className={`absolute z-[0] h-[800px] min-h-[800px] w-[500px] min-w-[500px]`}
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
  );
}
