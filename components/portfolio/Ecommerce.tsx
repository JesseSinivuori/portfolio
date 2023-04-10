import Image from "next/image";
import Link from "next/link";
import SlideAnimation from "./SlideAnimation";
import styles, { layout } from "../../styles/style";
import ArrowDown from "./ArrowDown";
import {
  ecommerce,
  ecommercecart,
  ecommercecategories,
  ecommerceitem,
  ecommerceitem2,
  nextjs,
  react,
  sanity,
  stripe,
  tailwindcss,
  typescript,
} from "../../public/assets/portfolio";
import { use, useEffect, useRef, useState } from "react";
import tw from "../../utils/tailwindHelper";
import EcommerceImagesSection from "./EcommerceImagesSection";

type EcommerceProps = {};

export default function Ecommerce(props: EcommerceProps) {
  const images = [
    {
      id: "react",
      img: react,
      name: "React",
    },
    {
      id: "nextjs",
      img: nextjs,
      name: "Next.js",
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
    {
      id: "sanity",
      img: sanity,
      name: "Sanity",
    },
    {
      id: "stripe",
      img: stripe,
      name: "Stripe",
    },
  ];

  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <section className={` flex-col ${styles.paddingY}`}>
        <div
          className={`${layout.sectionInfo} ${styles.flexCenter} relative z-[10] flex-col`}
        >
          <h2
            className={`${styles.heading2} mb-6 text-center text-[36px] xss:text-[42px]`}
          >
            Ecommerce Website
          </h2>
          <p
            className={`${styles.paragraph} ${styles.flexStart} w-full max-w-[480px] `}
          >
            A full stack restaurant themed ecommerce website, with Sanity
            backend and Stripe payment.
          </p>
          <SlideAnimation animation={"slide-animation-left"}>
            <div
              className={`flex-wrap ${styles.flexCenter} w-full
            xs:min-w-[480px] xs:max-w-[680px] lg:max-w-full
          `}
            >
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
                            h-[80px] min-h-[80px]
                            w-[80px] min-w-[80px]
                            object-contain
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
        <EcommerceImagesSection />
      </section>
    </SlideAnimation>
  );
}
