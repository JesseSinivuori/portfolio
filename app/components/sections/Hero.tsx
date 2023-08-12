import { styles } from "@/app/styles/style";
import Image from "next/image";
import Link from "next/link";
import { AnimationOnIntersection } from "../helpers";
import imgOfMe from "@/public/imgofme.png";

export function Hero() {
  return (
    <section
      id="hero"
      className={`flex justify-center items-center w-full px-4 md:px-8 relative`}
    >
      <Gradient />
      <div className="flex-col items-center flex w-full">
        <H1 />
        <H2 />
        <Paragraph />
        <div className="my-8">
          <ContactLink />
          <GithubLink />
        </div>
      </div>
      <div className="flex justify-center items-center w-full flex-1">
        <HeroImage />
      </div>
    </section>
  );
}

const H1 = () => (
  <h1
    className={`text-[34px] xss:text-[46px] ss:text-[72px] font-light flex text-center md:text-start
    leading-[72px] ss:leading-[142px] dark:text-white/90 text-black/90 gap-x-4`}
  >
    .&#106;ess&#101;
    <span
      className={`flex bg-gradient-to-tr from-cyan-500 dark:to-emerald-500 to-fuchsia-500 bg-clip-text text-transparent `}
    >
      s&#105;niv&#117;o&#114;&#105;
    </span>
  </h1>
);

const H2 = () => (
  <h2
    className={`${styles.h2} p-2 !font-extrabold !text-[48px] ss:!text-[82px] text-center md:text-start
    bg-clip-text !text-transparent bg-gradient-to-b dark:from-zinc-300 from-zinc-700 dark:to-white to-black
    `}
  >
    Full Stack Developer
  </h2>
);

const Paragraph = () => (
  <p className={`${styles.p} mt-16 max-w-[470px]`}>I 😍 building things.</p>
);

const HeroImage = () => (
  <Image
    src={imgOfMe}
    alt=""
    className="z-[5] hidden dark:contrast-100 contrast-75 dark:brightness-100 brightness-150 w-auto h-auto xl:min-w-[650px] xl:max-h-[650px] lg:max-h-[550px] max-h-[450px] lg:min-w-[550px] xs:min-w-[450px] min-w-[270px] object-contain md:h-[650px] "
    quality={100}
    priority
  />
);

const GithubLink = () => (
  <Link
    data-testid="hero-github-button"
    rel="noreferrer noopener"
    target="_blank"
    href={"https://github.com/JesseSinivuori"}
    className="mx-4 rounded-md
 border dark:border-transparent bg-primary/10
px-4 py-2 text-[18px] font-medium border-transparent
dark:text-white/90 text-black/90 shadow-lg outline-none 
duration-300 ease-in-out dark:hover:border-white/50 hover:border-black/50
 hover:text-black/75"
  >
    Github
  </Link>
);

const ContactLink = () => (
  <Link
    href={"/contact"}
    className="rounded-md border 
dark:border-cyan-700 border-transparent px-4 py-2 text-[18px] 
font-medium text-white/90 shadow-lg dark:hover:border-opacity-50
duration-300 ease-in-out dark:bg-transparent bg-blue-700 hover:bg-blue-800
dark:hover:text-cyan-500 "
    data-testid="hero-contact-button"
  >
    Contact
  </Link>
);

const Gradient = () => (
  <AnimationOnIntersection
    customAnimation={{
      fromClass: "opacity-50",
      toClass: "opacity-100",
    }}
    className="w-full h-full absolute duration-[3s] z-[-1]"
  >
    <div className="noise-filter-radial blur-[1px] overflow-hidden -left-60 -top-40 absolute h-[800px] w-[1800px] -rotate-[5deg] bg-gradient-to-br from-cyan-500 z-[-2]"></div>
    <div className="noise-filter-radial blur-[1px] overflow-hidden -left-40 top-20 absolute h-[800px] w-[1800px] -rotate-[10deg] bg-gradient-to-br dark:from-emerald-500 from-blue-500 z-[-1]"></div>
    <div className="noise-filter-radial blur-[1px] overflow-hidden -left-20 top-0 absolute h-[800px] w-[1800px] -rotate-[25deg] bg-gradient-to-br dark:from-blue-700 from-fuchsia-500 z-[-3]"></div>
  </AnimationOnIntersection>
);
