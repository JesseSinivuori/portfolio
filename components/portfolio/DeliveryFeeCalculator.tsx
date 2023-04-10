import Image from "next/image";
import styles, { layout } from "../../styles/style";
import SlideAnimation from "./SlideAnimation";
import {
  deliveryfeecalculator,
  deliveryfeecalculatorsettings,
  nextjs,
  react,
  tailwindcss,
  typescript,
  vite,
} from "../../public/assets/portfolio";
import Link from "next/link";
import ArrowDown from "./ArrowDown";
import { useEffect, useRef, useState } from "react";

type DeliveryFeeCalculatorProps = {};

export default function DeliveryFeeCalculator(
  props: DeliveryFeeCalculatorProps
) {
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

  const ref = useRef<HTMLDivElement>(null);
  const [imagesInView, setImagesInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImagesInView(true);
          } else {
            setImagesInView(false);
          }
        });
      },
      { rootMargin: "0px 0px -300px 0px" }
    );
    observer.observe(ref.current);
  }, [ref]);

  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <div className={`${styles.flexCenter} flex-col`}>
        <section
          className={`${layout.section} ${styles.flexCenter} m-8 mt-24 flex-col rounded-xl
        
        `}
          style={{
            zIndex: "0",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, transparent 10%, rgba(0, 157, 224, 1) 100%)",
            filter: "blur(0px)",
            opacity: "1",
            animation: "false",
          }}
        >
          <div>
            <div className={`${styles.flexCenter} relative flex-col`}>
              <h2
                className={`${styles.heading2} mb-6 text-center text-[36px] xss:text-[42px]`}
              >
                Delivery Fee Calculator
              </h2>
              <p
                className={`${styles.paragraph} ${styles.flexStart} w-full max-w-[480px] `}
              >
                Calculate delivery fees.
              </p>
              <Link href={"https://delivery-fee-nu.vercel.app/"} target="blank">
                <div ref={ref}>
                  <Image
                    src={deliveryfeecalculator}
                    alt="image of delivery fee calculator"
                    className="relative z-[1] m-8 rounded-xl border-1 border-transparent
              object-cover transition-all duration-300 hover:border-white
              "
                    height={240}
                    width={240}
                  />
                </div>
              </Link>
              <SlideAnimation
                animation={"slide-animation-right"}
                className="right-0 hidden lg:absolute"
              >
                <div className={`flex-wrap ${styles.flexCenter}`}>
                  {/**map languages */}
                  {images.map((img) => (
                    //contain language
                    <div
                      key={img.id}
                      className={`mt-6 
                            mb-2 items-center justify-start duration-100 ease-in 
                            sm:mb-6
                            `}
                    >
                      {/**image */}
                      <Image
                        src={img.img}
                        alt={`image of ${img.id}`}
                        className={`m-10
                            w-[80px] min-w-[80px] object-contain
                            ${img.id === "nextjs" && "invert"}
                            `}
                      />
                      {/**name */}
                      <h2 className={`${styles.skillText} `}>{img.name}</h2>
                    </div>
                  ))}
                </div>
              </SlideAnimation>
            </div>
            <div className="absolute left-0 bottom-10 hidden flex-col lg:block">
              <ArrowDown styles="animate-bounce m-16 justify-center items-center flex" />
              <div
                className={`${
                  imagesInView
                    ? "translate-x-0 scale-100"
                    : "translate-x-[25%] scale-0"
                } transition-all duration-300`}
              >
                <Link
                  href={"https://delivery-fee-nu.vercel.app/"}
                  target="blank"
                >
                  <Image
                    src={deliveryfeecalculatorsettings}
                    alt="image of delivery fee calculator"
                    className={`
                  z-[0] m-8 rounded-xl border-1
              border-transparent object-cover opacity-50 transition-all
              duration-300 hover:border-white hover:opacity-100
              `}
                    height={640}
                    width={640}
                  />
                </Link>
                <p
                  className={`${styles.paragraph} ${styles.flexStart} w-full max-w-[480px] `}
                >
                  Adjust settings.
                </p>
              </div>
            </div>
          </div>
        </section>
        <SlideAnimation
          animation={"slide-animation-right"}
          className="flex lg:hidden"
        >
          <div className={`flex-wrap ${styles.flexCenter}`}>
            {/**map languages */}
            {images.map((img) => (
              //contain language
              <div
                key={img.id}
                className={`mt-6 
                            mb-2 items-center justify-start duration-100 ease-in 
                            sm:mb-6
                            `}
              >
                {/**image */}
                <Image
                  src={img.img}
                  alt={`image of ${img.id}`}
                  className={`m-10
                            w-[80px] min-w-[80px] object-contain
                            ${img.id === "nextjs" && "invert"}
                            `}
                />
                {/**name */}
                <h2 className={`${styles.skillText} `}>{img.name}</h2>
              </div>
            ))}
          </div>
        </SlideAnimation>
      </div>
    </SlideAnimation>
  );
}
