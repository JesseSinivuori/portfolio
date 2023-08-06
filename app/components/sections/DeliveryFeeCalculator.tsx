import Image from "next/image";
import styles from "@/app/styles/style";
import { AnimationOnIntersection, Skill } from "../index";
import Link from "next/link";

export default function DeliveryFeeCalculator() {
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

  return (
    <AnimationOnIntersection animation={"appear-from-bottom"}>
      <div
        className={`${styles.flexCenter} flex-col items-center`}
        id="delivery_fee_calculator"
      >
        <section
          className={` ${styles.flexCenter} 
          relative z-[0] h-full
          w-full flex-col items-center justify-center rounded-xl
        `}
        >
          <div className="absolute bottom-0 h-[50%] w-full rounded-full bg-cyan-500/25 blur-[100px]"></div>

          <div className={`flex ${styles.flexCenter}`}>
            <div className={`${styles.flexCenter} relative flex-col`}>
              <h2
                className={`${styles.heading2} mb-6 text-center text-[36px] xss:text-[42px]`}
              >
                Delivery Fee Calculator
              </h2>
              <p
                className={`${styles.paragraph} flex justify-center w-full max-w-[480px] `}
              >
                Calculate delivery fees. 🛴
              </p>
              <Link
                title="Try the App"
                rel="noreferrer noopener"
                href={"https://delivery-fee-nu.vercel.app/"}
                target="_blank"
                className="relative"
              >
                <div className="m-8">
                  <Image
                    src={"/deliveryfeecalculator.webp"}
                    alt=""
                    className="relative z-[1] h-[442px] min-w-[237px] w-full rounded-xl 
                    border border-transparent object-contain
               transition-all duration-300 hover:border-white
              "
                    height={443}
                    width={238}
                    quality={100}
                  />
                </div>
              </Link>
              <Link
                rel="noreferrer noopener"
                href={"https://delivery-fee-nu.vercel.app/"}
                target="_blank"
                className={`right-[-180px] z-[1] m-8 flex rounded-md border
            border-cyan-500 px-4 py-2 text-[18px] font-medium
            text-[#ffffff] shadow-lg outline-none
            duration-300 ease-in-out
            hover:border-cyan-500 hover:text-cyan-500
            hover:shadow-cyan-900 lg:absolute
            `}
              >
                Try the App
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 hidden flex-col lg:block mb-8">
              <AnimationOnIntersection
                customAnimation={{
                  fromClass: "translate-x-[25%] scale-0",
                  toClass: "translate-x-0 scale-100 duration-500",
                }}
              >
                <div>
                  <Link
                    href={"https://delivery-fee-nu.vercel.app/"}
                    target="_blank"
                    title="Try the App"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src={"/deliveryfeecalculatorsettings.webp"}
                      alt=""
                      className={`m-8 h-[290px] w-[640px] rounded-xl border border-transparent
                    object-cover opacity-75 transition-all duration-300 hover:border-white hover:opacity-100`}
                      height={290}
                      width={640}
                      quality={100}
                    />
                  </Link>
                  <p
                    className={`${styles.paragraph} flex justify-center w-full max-w-[480px] `}
                  >
                    Adjust settings. ⚙️
                  </p>
                </div>
              </AnimationOnIntersection>
            </div>
          </div>
        </section>
        <AnimationOnIntersection animation={"appear-from-bottom"}>
          <div className={`flex-wrap ${styles.flexCenter}`}>
            {skills.map((skill) => (
              <Skill skill={skill} key={skill.id} />
            ))}
          </div>
        </AnimationOnIntersection>
      </div>
    </AnimationOnIntersection>
  );
}
