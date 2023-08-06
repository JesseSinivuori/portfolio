"use client";
import Link from "next/link";
import styles from "@/app/styles/style";
import { AnimationOnIntersection } from "./index";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function EcommerceImagesSection() {
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
      { rootMargin: "0px 0px -400px 0px" }
    );
    observer.observe(imageRef);
    return () => {
      observer.unobserve(imageRef);
    };
  }, [imagesInView, ref]);

  return (
    <AnimationOnIntersection
      animation={"appear-from-bottom"}
      className={`${styles.flexCenter}`}
    >
      <div className={`${styles.flexCenter} flex-col`}>
        <div className={`${styles.flexCenter} flex-col`} ref={ref}>
          <Link
            href={"https://ecommerce-restaurant-beta.vercel.app/"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={"/ecommerce.webp"}
              alt=""
              className={`relative z-[3] m-52 w-[568px] min-w-[270px] rounded-xl border
              border-transparent object-cover duration-300 ease-in-out
              hover:border-red-600 xs:max-w-full
              `}
              height={768}
              width={560}
              quality={100}
            />
          </Link>
          <Link
            href={"https://ecommerce-restaurant-beta.vercel.app/"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={"/ecommercecart.webp"}
              alt=""
              className={`${
                imagesInView
                  ? `translate-x-0 translate-y-0 scale-100`
                  : "translate-x-[-100%] translate-y-[25%] scale-0"
              }
            absolute right-[-100px] top-[50px]
            z-[2] w-[297px] min-w-[200px] rounded-xl
            border border-transparent object-cover
            opacity-100 duration-500 ease-in-out
            hover:border-red-600 hover:opacity-100
            md:right-[160px] lg:hover:scale-[125%]`}
              height={475}
              width={297}
              quality={100}
            />
          </Link>
          <Link
            href={"https://ecommerce-restaurant-beta.vercel.app/"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={"/ecommercecategories.webp"}
              alt=""
              className={`${
                imagesInView
                  ? "translate-y-0 scale-100"
                  : " translate-y-[100%] scale-0"
              } absolute left-[-50px] top-[120px] z-[1] h-[80px] w-[85%] rounded-xl
              border border-transparent object-cover opacity-50 duration-300
              ease-in-out hover:border-red-600 hover:opacity-100 `}
              height={80}
              width={803}
              quality={100}
            />
          </Link>
          <Link
            href={"https://ecommerce-restaurant-beta.vercel.app/"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={"/ecommerceitem.webp"}
              alt=""
              className={`${
                imagesInView
                  ? "translate-x-0 scale-100"
                  : "translate-x-[25%] scale-0"
              } absolute bottom-[180px] left-[-60px] z-[2] w-[800px] min-w-[300px]
              rounded-xl border border-transparent object-cover opacity-100 duration-1000
              ease-in-out hover:border-red-600 hover:opacity-100 sm:left-[-100px]
              hover:lg:translate-x-[-25%]`}
              height={282}
              width={800}
              quality={100}
            />
          </Link>
          <Link
            href={"https://ecommerce-restaurant-beta.vercel.app/"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={"/ecommerceitem2.webp"}
              alt=""
              className={`${
                imagesInView
                  ? `translate-x-0 scale-100 
                  hover:border-red-600 hover:opacity-100`
                  : "translate-x-[25%] scale-0"
              } absolute bottom-[340px] left-[-300px] z-[1] ml-[300px] hidden
              w-[800px]  rounded-xl border
              border-transparent object-cover opacity-25 duration-700 ease-in-out
              lg:block hover:lg:translate-x-[-35%]
              lg:hover:translate-y-[-15%]`}
              height={282}
              width={800}
              quality={100}
            />
          </Link>
        </div>
        <Link
          rel="noreferrer noopener"
          href={"https://ecommerce-restaurant-beta.vercel.app/"}
          target="_blank"
          className={`font-poppins z-[1] rounded-md
                border-[1px] border-red-600 px-4 py-2 text-[18px]
                font-medium text-white shadow-lg
                outline-none duration-300
                ease-in-out hover:border-red-600
                hover:text-red-600 hover:shadow-[#bc0d0d25]`}
        >
          Try the App
        </Link>
        <div
          className={`absolute z-[0] h-full min-h-[1000px] w-full min-w-[1000px]
              ${
                imagesInView
                  ? "translate-y-0 scale-100"
                  : " translate-y-[100%] scale-0"
              } transition-all duration-[1.5s]`}
        >
          <div className="h-full w-full animate-[pulse_5s_linear_infinite] rounded-full bg-red-800/20 blur-[100px]"></div>
        </div>
      </div>
    </AnimationOnIntersection>
  );
}
