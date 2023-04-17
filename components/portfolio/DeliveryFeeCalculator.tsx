import Image from "next/image";
import styles, { layout } from "../../styles/style";
import SlideAnimation from "./SlideAnimation";
import {
  deliveryfeecalculator,
  deliveryfeecalculatorsettings,
  react,
  tailwindcss,
  typescript,
  vite,
} from "../../public";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Skill from "./Skill";

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
    const imageRef = ref.current;
    if (!imageRef) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImagesInView(true);
          }
        });
      },
      { rootMargin: "0px 0px -300px 0px" }
    );
    observer.observe(imageRef);
    return () => {
      observer.unobserve(imageRef);
    };
  }, [ref]);

  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <div className={`${styles.flexCenter} flex-col items-center`}>
        <section
          className={`${layout.section} ${styles.flexCenter} 
          m-8 mt-24 flex-col items-center
          justify-center rounded-xl 
        `}
          style={{
            zIndex: "0",
            width: "100%",
            height: "100%",
            filter: "blur(0px)",
            opacity: "1",
            animation: "false",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: "0",
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(circle, #58f3fe 0%, rgba(255, 255, 255, 0.1) 30%, rgba(0, 0, 0, 1) 70%, rgba(102, 245, 236, 0) 100%)",
              filter: "blur(240px)",
              opacity: "1",
            }}
          ></div>
          <div className={`flex ${styles.flexCenter}`}>
            <div className={`${styles.flexCenter} relative flex-col`}>
              <h2
                className={`${styles.heading2} mb-6 text-center text-[36px] xss:text-[42px]`}
              >
                Delivery Fee Calculator
              </h2>
              <p
                className={`${styles.paragraph} ${styles.flexStart} w-full max-w-[480px] `}
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
                <div ref={ref} className="m-8">
                  <Image
                    src={deliveryfeecalculator}
                    alt="image of delivery fee calculator"
                    className="border-1 relative z-[1] rounded-xl border-transparent object-cover
               transition-all duration-300 hover:border-white
              "
                    height={240}
                    width={240}
                  />
                </div>
              </Link>
              <Link
                rel="noreferrer noopener"
                href={"https://delivery-fee-nu.vercel.app/"}
                target="_blank"
                className={`right-[-180px] z-[1] m-8 flex rounded-md border-[1px] border-[#58f3fe]
            py-2 px-4 font-poppins text-[18px] font-medium
            text-[#ffffff] shadow-lg outline-none
            duration-300 ease-in-out
            hover:border-[#58f3fe] hover:text-[#58f3fe]
            hover:shadow-[#58f3fe25] lg:absolute
            `}
              >
                <span>Try the App</span>
              </Link>
            </div>
            <div className="absolute left-0 bottom-10 hidden flex-col lg:block">
              <div
                className={`${
                  imagesInView
                    ? "translate-x-0 scale-100"
                    : "translate-x-[25%] scale-0"
                } transition-all duration-300`}
              >
                <Link
                  href={"https://delivery-fee-nu.vercel.app/"}
                  target="_blank"
                  title="Try the App"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={deliveryfeecalculatorsettings}
                    alt="image of delivery fee calculator"
                    className={`
                   border-1 m-8 rounded-xl
              border-transparent object-cover opacity-75 transition-all
              duration-300 hover:border-white hover:opacity-100
              `}
                    height={640}
                    width={640}
                  />
                </Link>
                <p
                  className={`${styles.paragraph} ${styles.flexStart} w-full max-w-[480px] `}
                >
                  Adjust settings. ⚙️
                </p>
              </div>
            </div>
          </div>
        </section>
        <SlideAnimation animation={"slide-animation-top"}>
          <div className={`flex-wrap ${styles.flexCenter}`}>
            {/**map languages */}
            {images.map((img) => (
              //contain language
              <Skill img={img} key={img.id} />
            ))}
          </div>
        </SlideAnimation>
      </div>
    </SlideAnimation>
  );
}
