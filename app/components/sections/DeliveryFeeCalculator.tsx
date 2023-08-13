import Image from "next/image";
import { styles } from "@/app/styles/style";
import { AnimationOnIntersection, Skill } from "../index";
import Link from "next/link";

export function DeliveryFeeCalculator() {
  return (
    <section
      id="delivery_fee_calculator"
      className={`flex justify-center items-center flex-col ${styles.sectionPaddingY}`}
    >
      <div
        className={`flex justify-center items-center relative z-[0] h-full w-full flex-col  rounded-xl
        `}
      >
        <Gradient />
        <Heading />
        <Paragraph />
        <div className={`flex justify-center items-center p-4`}>
          <div className={`flex justify-center items-center relative flex-col`}>
            <MainImage />
            <TryTheAppButton />
          </div>
          <div className="absolute bottom-0 left-0 hidden flex-col lg:block mb-8">
            <SettingsImage />
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}
const Heading = () => (
  <h2 className={`${styles.h2} mb-4 text-center`}>Delivery Fee Calculator</h2>
);

const Paragraph = () => (
  <p className={`${styles.p} flex justify-center w-full max-w-[480px]`}>
    Calculate delivery fees. 🛴
  </p>
);

const Gradient = () => (
  <AnimationOnIntersection
    animation="appear-"
    className="absolute w-full h-full"
    rootMargin="0px 0px -600px 0px"
    duration="duration-1000"
  >
    <div className="absolute bottom-0 h-[50%] w-full rounded-full bg-cyan-500/25 blur-[100px]"></div>
  </AnimationOnIntersection>
);

const MainImage = () => (
  <Link
    title="Try the App"
    rel="noreferrer noopener"
    href={"https://delivery-fee-nu.vercel.app/"}
    target="_blank"
    className="relative m-8"
  >
    <Image
      src={"/deliveryFeeCalculator.png"}
      alt=""
      className="relative z-[1] h-[442px] min-w-[237px] w-full rounded-xl 
      border border-transparent object-contain transition-all duration-300 hover:border-white"
      width={237}
      height={442}
    />
  </Link>
);

const SettingsImage = () => (
  <AnimationOnIntersection
    customAnimation={{
      fromClass: "translate-x-[25%] scale-0",
      toClass: "translate-x-0 scale-100 duration-500",
    }}
  >
    <Link
      href={"https://delivery-fee-nu.vercel.app/"}
      target="_blank"
      title="Try the App"
      rel="noreferrer noopener"
    >
      <Image
        src={"/deliveryFeeCalculatorSettings.png"}
        alt=""
        className={`m-8 h-[290px] w-[640px] rounded-xl border border-transparent
    object-cover opacity-75 transition-all duration-300 hover:border-white hover:opacity-100`}
        height={290}
        width={640}
      />
    </Link>
    <p className={`${styles.p} flex justify-center w-full max-w-[480px] `}>
      Adjust settings. ⚙️
    </p>
  </AnimationOnIntersection>
);

const Skills = () => (
  <div
    className={`flex-wrap flex justify-center items-center max-w-sm sm:max-w-full`}
  >
    {skills.map((skill) => (
      <Skill {...skill} key={skill.id} />
    ))}
  </div>
);

const TryTheAppButton = () => (
  <Link
    rel="noreferrer noopener"
    href={"https://delivery-fee-nu.vercel.app/"}
    target="_blank"
    className={`right-[-280px] z-[1] m-8 flex rounded-md border border-transparent
dark:border-cyan-500 px-4 py-2 text-[18px] font-medium shadow-lg outline-none
duration-300 ease-in-out
dark:hover:border-cyan-500 dark:hover:text-cyan-500 lg:absolute
bg-blue-700 dark:bg-transparent text-white/90 
dark:text-white/90 hover:bg-blue-800 dark:hover:border-opacity-50
`}
  >
    Try the App
  </Link>
);

const skills = [
  {
    id: "react",
    src: "/react.svg",
    name: "React",
  },
  {
    id: "vite",
    src: "/vite.svg",
    name: "Vite",
  },
  {
    id: "typescript",
    src: "/typescript.svg",
    name: "TypeScript",
  },
  {
    id: "tailwindcss",
    src: "/tailwindcss.svg",
    name: "Tailwind CSS",
  },
];
