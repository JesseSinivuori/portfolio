import styles from "@/app/styles/style";
import Image from "next/image";
import Link from "next/link";
import { AnimationOnIntersection } from "../helpers";

const HeroGradient = () => (
  <div
    className={
      "absolute z-[0] min-h-full min-w-full blur-[100px] animate-spin-and-pulse-20s"
    }
  >
    <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/20"></div>
    <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20"></div>
  </div>
);

export default function Hero() {
  return (
    <div className="flex">
      <section
        id="hero"
        className={`flex-col justify-center items-center relative flex w-full h-full `}
      >
        <div className="flex flex-wrap w-full h-full justify-center items-center px-4 sm:px-8">
          <AnimationOnIntersection
            animation="appear-"
            className="w-full h-full absolute duration-[3s]"
          >
            <HeroGradient />
          </AnimationOnIntersection>
          <div className="flex-col z-[10] flex ">
            <div className="flex w-full flex-wrap items-center">
              <h1
                className="flex-1 text-[52px] font-light 
                    leading-[72px] ss:leading-[92px] text-white ss:text-[72px]"
              >
                .&#106;ess&#101; <br className="hidden sm:block" />{" "}
                <span
                  className={`flex bg-gradient-to-tr from-cyan-500 to-white bg-clip-text text-transparent`}
                >
                  s&#105;niv&#117;o&#114;&#105;
                </span>
              </h1>
            </div>
            <h2
              className="w-full text-[52px] font-semibold 
             text-white ss:text-[68px] leading-[72px] ss:leading-[92px]"
            >
              Software Engineer
            </h2>
            <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
              I 😍 building things.
            </p>
            <div className="my-8 flex">
              <Link
                href={"/contact"}
                className="rounded-md border-[1px]
                border-cyan-500 px-4 py-2 text-[18px] 
                font-medium text-[#ffffff] shadow-lg
                outline-none duration-300
                ease-in-out 
                hover:text-cyan-500 hover:shadow-[#58f3fe25]"
                data-testid="hero-contact-button"
              >
                Contact
              </Link>
              <Link
                data-testid="hero-github-button"
                rel="noreferrer noopener"
                target="_blank"
                href={"https://github.com/JesseSinivuori"}
                className="mx-4 rounded-md
                 border-[1px] border-transparent bg-primary/10
                px-4 py-2 text-[18px] font-medium
                text-[#ffffff] shadow-lg outline-none
                duration-300 ease-in-out hover:border-[#ffffff]
                 hover:shadow-[#ffffff]/10 "
              >
                Github
              </Link>
            </div>
          </div>
          <div
            className={`flex ${styles.flexCenter} w-full flex-1 relative my-8 `}
          >
            <Image
              src={"/imgofme.webp"}
              alt=""
              className="z-[5] w-auto h-auto xl:min-w-[650px] xl:max-h-[650px] lg:max-h-[550px] max-h-[450px] lg:min-w-[550px] xs:min-w-[450px] min-w-[270px] object-contain md:h-[650px] "
              width={650}
              height={650}
              quality={100}
              priority
            />
            <AnimationOnIntersection
              animation="appear-"
              className="w-full h-full absolute"
            >
              <div className="z-[0] absolute h-[600px] w-[600px] rounded-full bg-cyan-800/25 opacity-10 blur-[100px]"></div>
            </AnimationOnIntersection>
          </div>
        </div>
      </section>
    </div>
  );
}
