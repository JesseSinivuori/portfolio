import Link from "next/link";
import {
  ecommerce,
  ecommercecart,
  ecommercecategories,
  ecommerceitem,
  ecommerceitem2,
} from "../../public/assets/portfolio";
import styles, { layout } from "../../styles/style";
import tw from "../../utils/tailwindHelper";
import ArrowDown from "./ArrowDown";
import SlideAnimation from "./SlideAnimation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function EcommerceImagesSection() {
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
      { rootMargin: "0px 0px -400px 0px" }
    );
    observer.observe(ref.current);
  }, [ref]);

  return (
    <SlideAnimation
      animation={"slide-animation-top"}
      className={`${styles.flexCenter}`}
    >
      <div className={`${layout.sectionImg} ${styles.flexCenter}`}>
        <div
          className={`${styles.flexCenter} relative z-[1] flex-col`}
          ref={ref}
        >
          <ArrowDown styles="animate-bounce m-16" />
          <Link href={"/store/home"}>
            <Image
              src={ecommerce}
              alt={"image of ecommerce website"}
              className={`relative z-[2] m-24 w-[568px] min-w-[270px] rounded-xl border border-transparent
              object-cover duration-300 ease-in-out hover:border-[#f02d34]
              xs:max-w-full
              `}
              width={568}
              height={414}
            />
          </Link>
          <Link href={"/store/home"}>
            <Image
              src={ecommercecart}
              alt={"image of ecommerce website"}
              className={`${
                imagesInView
                  ? `translate-x-0 translate-y-0 scale-100`
                  : "translate-x-[-100%] translate-y-[25%] scale-0"
              }
            absolute right-[-100px] top-[80px] z-[1] w-[300px]
            rounded-xl border border-transparent
            object-cover opacity-100  duration-300
            ease-in-out hover:border-[#f02d34] hover:opacity-100 lg:hover:scale-[125%]
            `}
            />
          </Link>
          <Link href={"/store/home"}>
            <Image
              src={ecommercecategories}
              alt={"image of ecommerce website"}
              className={`${
                imagesInView
                  ? "translate-y-0 scale-100"
                  : " translate-y-[100%] scale-0"
              } absolute left-[-50px] top-[160px] z-[0] h-20 rounded-xl
              border border-transparent object-cover opacity-50 duration-300
              ease-in-out hover:border-[#f02d34] hover:opacity-100
              `}
            />
          </Link>
          <Link href={"/store/home"}>
            <Image
              src={ecommerceitem}
              alt={"image of ecommerce website"}
              className={`${
                imagesInView
                  ? "translate-x-0 scale-100"
                  : "translate-x-[25%] scale-0"
              } absolute left-[-100px] bottom-[140px] z-[1]
              w-[800px] rounded-xl border border-transparent object-cover opacity-100
              duration-300 ease-in-out hover:border-[#f02d34] hover:opacity-100 lg:left-[-200px]
              hover:lg:translate-x-[-25%] hover:lg:scale-[115%]  `}
            />
          </Link>
          <Link href={"/store/home"}>
            <Image
              src={ecommerceitem2}
              alt={"image of ecommerce website"}
              className={`${
                imagesInView
                  ? `translate-x-0 scale-100 
                  hover:border-[#f02d34] hover:opacity-100`
                  : "translate-x-[25%] scale-0"
              } absolute bottom-[240px] z-[0] ml-[100px] hidden w-[800px] rounded-xl border border-transparent
                   object-cover opacity-25 duration-300 ease-in-out hover:z-[0]
              lg:left-[-200px] lg:block lg:hover:translate-y-[-50%]
              hover:lg:translate-x-[-25%] hover:lg:scale-[115%]
                `}
            />
          </Link>
        </div>
        <div
          className={`absolute z-[0] h-full min-h-[1000px] w-full min-w-[600px]
              ${
                imagesInView
                  ? "translate-y-0 scale-100"
                  : " translate-y-[100%] scale-0"
              } transition-all duration-300`}
          style={{ opacity: "100%", filter: "blur(0px) invert(0)" }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: "0",
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 255, 255, 0.1) 30%, rgba(0, 0, 0, 1) 70%, rgba(102, 245, 236, 0) 100%)",
              filter: "blur(240px)",
              opacity: "1",
              animation: "animateOpacity1 5s linear infinite",
            }}
          ></div>
          <style>
            {`
          @keyframes animateOpacity1 {
            0% {
              opacity: 50%;
            }
            50% {
              opacity: 100%;
            }
            100% {
              opacity: 50%;
            }
          }
        `}
          </style>
        </div>
      </div>
    </SlideAnimation>
  );
}
