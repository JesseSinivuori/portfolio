import Link from "next/link";
import styles from "../../styles/style";
import SlideAnimation from "./SlideAnimation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function EcommerceImagesSection() {
  const images = {
    ecommerce: "/ecommerce.png",
    ecommercecart: "/ecommercecart.png",
    ecommercecategories: "/ecommercecategories.png",
    ecommerceitem: "/ecommerceitem.png",
    ecommerceitem2: "/ecommerceitem2.png",
  };
  const {
    ecommerce,
    ecommercecart,
    ecommercecategories,
    ecommerceitem,
    ecommerceitem2,
  } = images;
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
  }, [ref]);

  return (
    <SlideAnimation
      animation={"slide-animation-top"}
      className={`${styles.flexCenter}`}
    >
      <div className={`${styles.flexCenter} flex-col`}>
        <div className={`${styles.flexCenter} flex-col`} ref={ref}>
          <Link
            href={"/store/home"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={ecommerce}
              alt={"image of ecommerce website"}
              className={`relative z-[3] m-52 w-[568px] min-w-[270px] rounded-xl border
              border-transparent object-cover duration-300 ease-in-out
              hover:border-[#f02d34] xs:max-w-full
              `}
              height={768}
              width={560}
            />
          </Link>
          <Link
            href={"/store/home"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={ecommercecart}
              alt={"image of ecommerce website cart"}
              className={`${
                imagesInView
                  ? `translate-x-0 translate-y-0 scale-100`
                  : "translate-x-[-100%] translate-y-[25%] scale-0"
              }
            absolute right-[-100px] top-[50px]
            z-[2] w-[300px] min-w-[200px] rounded-xl
            border border-transparent object-cover
            opacity-100 duration-300 ease-in-out
            hover:border-[#f02d34] hover:opacity-100
            md:right-[100px] lg:hover:scale-[125%]`}
              height={475}
              width={375}
            />
          </Link>
          <Link
            href={"/store/home"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={ecommercecategories}
              alt={"image of ecommerce website categories"}
              className={`${
                imagesInView
                  ? "translate-y-0 scale-100"
                  : " translate-y-[100%] scale-0"
              } absolute left-[-50px] top-[120px] z-[1] h-20 w-[85%] rounded-xl
              border border-transparent object-cover opacity-50 duration-300
              ease-in-out hover:border-[#f02d34] hover:opacity-100 `}
              height={80}
              width={803}
            />
          </Link>
          <Link
            href={"/store/home"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={ecommerceitem}
              alt={"image of ecommerce website item"}
              className={`${
                imagesInView
                  ? "translate-x-0 scale-100"
                  : "translate-x-[25%] scale-0"
              } absolute left-[-60px] bottom-[180px] z-[2] w-[800px] min-w-[300px]
              rounded-xl border border-transparent object-cover opacity-100 duration-300
              ease-in-out hover:border-[#f02d34] hover:opacity-100 sm:left-[-100px]
              hover:lg:translate-x-[-25%] `}
              height={282}
              width={800}
            />
          </Link>
          <Link
            href={"/store/home"}
            target="_blank"
            title="Try the App"
            rel="noreferrer noopener"
          >
            <Image
              src={ecommerceitem2}
              alt={"image of ecommerce website item"}
              className={`${
                imagesInView
                  ? `translate-x-0 scale-100 
                  hover:border-[#f02d34] hover:opacity-100`
                  : "translate-x-[25%] scale-0"
              } absolute bottom-[340px] left-[-300px] z-[1] ml-[300px] hidden
              w-[800px]  rounded-xl border
              border-transparent object-cover opacity-25 duration-300 ease-in-out
              lg:block lg:hover:translate-y-[-15%]
              hover:lg:translate-x-[-35%]`}
              height={282}
              width={800}
            />
          </Link>
        </div>
        <Link
          rel="noreferrer noopener"
          href={"/store/home"}
          target="_blank"
          className={`z-[1] rounded-md border-[1px]
                border-[#ff0000] py-2 px-4 font-poppins text-[18px]
                font-medium text-white shadow-lg
                outline-none duration-300
                ease-in-out hover:border-[#ff0000]
                hover:text-[#ff0000] hover:shadow-[#bc0d0d25]`}
        >
          Try the App
        </Link>
        <div
          className={`absolute z-[0] h-full min-h-[1400px] w-full min-w-[1000px]
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
                "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 255, 255, 0.1) 30%, rgba(0, 0, 0, 0) 70%, rgba(102, 245, 236, 0) 100%)",
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
