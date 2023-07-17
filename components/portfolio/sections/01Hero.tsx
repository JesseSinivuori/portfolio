import styles from "../../../styles/style";
import Image from "next/image";
import Link from "next/link";

const HeroGradient = () => (
  <div
    className={`absolute z-[0] h-[100vh] w-[80vw] animate-spin-and-pulse-20s opacity-25 blur-[100px] xss:h-[80vh] xss:w-[80vw]`}
  >
    <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/50"></div>
    <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/50"></div>
  </div>
);

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex-col md:flex-row ${styles.paddingY} ${styles.flexCenter} relative min-h-screen pb-36`}
    >
      <HeroGradient />
      <div
        className={`flex-1 ${styles.flexStart} z-[10] flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="flex w-full flex-wrap items-center justify-between ">
          <h1
            className="font-poppins flex-1 text-[52px] font-light 
                    leading-[75px] text-white ss:text-[72px] ss:leading-[100px]"
          >
            .&#106;ess&#101; <br className="hidden sm:block" />{" "}
            <span className={`text-gradient flex`}>
              s&#105;niv&#117;o&#114;&#105;
            </span>
          </h1>
        </div>
        <h1
          className="font-poppins w-full text-[52px] font-semibold leading-[75px]
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
            className="font-poppins rounded-md border-[1px]
                border-cyan-500 px-4 py-2 text-[18px] 
                font-medium text-[#ffffff] shadow-lg
                outline-none duration-300
                ease-in-out hover:border-cyan-500
                hover:text-cyan-500 hover:shadow-[#58f3fe25]"
          >
            Contact
          </Link>
          <Link
            rel="noreferrer noopener"
            target="_blank"
            href={"https://github.com/JesseSinivuori"}
            className="font-poppins mx-4 rounded-md
                 border-[1px] border-transparent bg-transparent
                px-4 py-2 text-[18px] font-medium
                text-[#ffffff] shadow-lg outline-none
                duration-300 ease-in-out hover:border-[#ffffff]
                 hover:shadow-[#ffffff]/10 "
          >
            Github
          </Link>
        </div>
      </div>
      <div className={`flex  ${styles.flexCenter} relative my-10 md:my-0`}>
        <Image
          src={"/imgofme.webp"}
          alt="Image of me."
          className="z-[5] h-[450px] min-w-[270px] object-contain md:h-[650px]"
          width={650}
          height={650}
          quality={100}
          priority
        />
        <div className="absolute z-[0] h-[700px] w-[600px] rounded-full bg-cyan-500/25 opacity-10 blur-[100px]"></div>
      </div>
    </section>
  );
}
