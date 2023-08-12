"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimationOnIntersection } from "../helpers";

export function EcommerceImages({ images }: { images: StaticImageData[] }) {
  const [
    ecommerce,
    ecommerceCart,
    ecommerceCategories,
    ecommercePizza,
    ecommercePancakes,
  ] = images;

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
    <div className={`flex justify-center items-center flex-col sm:m-52 my-16`}>
      <div
        className={`flex justify-center items-center flex-col relative`}
        ref={ref}
      >
        <MainImage image={ecommerce} />
        <CartImage imagesInView={imagesInView} image={ecommerceCart} />
        <CategoriesImage
          imagesInView={imagesInView}
          image={ecommerceCategories}
        />
        <PizzaImage imagesInView={imagesInView} image={ecommercePizza} />
        <PancakesImage imagesInView={imagesInView} image={ecommercePancakes} />
        <Gradient />
      </div>
    </div>
  );
}

const imageStyle =
  "rounded-xl border border-transparent object-contain duration-500 hover:duration-300 ease-in-out hover:border-red-600/50";

const MainImage = ({ image }: { image: StaticImageData }) => (
  <Link
    href={"https://ecommerce-restaurant-beta.vercel.app/"}
    target="_blank"
    title="Try the App"
    rel="noreferrer noopener"
    className="z-[3]"
  >
    <Image
      src={image}
      blurDataURL={image.blurDataURL}
      placeholder="blur"
      alt=""
      className={`${imageStyle} justify-center min-w-[380px] sm:min-w-[580px] h-auto hidden sm:flex
    `}
      quality={100}
    />
  </Link>
);

const CartImage = ({
  imagesInView,
  image,
}: {
  imagesInView: boolean;
  image: StaticImageData;
}) => (
  <Link
    href={"https://ecommerce-restaurant-beta.vercel.app/"}
    target="_blank"
    title="Try the App"
    rel="noreferrer noopener"
    className="z-[4] flex justify-center"
  >
    <Image
      src={image}
      alt=""
      className={`${imageStyle} max-w-[360px] w-[90%] justify-center h-auto ${
        imagesInView
          ? "translate-x-0 translate-y-0 scale-100"
          : "sm:translate-x-[-100%] sm:translate-y-[25%] sm:scale-0"
      } sm:absolute flex justify-center items-center sm:-right-60 sm:-top-40`}
      quality={100}
      blurDataURL={image.blurDataURL}
      placeholder="blur"
    />
  </Link>
);

const CategoriesImage = ({
  imagesInView,
  image,
}: {
  imagesInView: boolean;
  image: StaticImageData;
}) => (
  <Link
    href={"https://ecommerce-restaurant-beta.vercel.app/"}
    target="_blank"
    title="Try the App"
    rel="noreferrer noopener"
    className="z-[1]"
  >
    <Image
      src={image}
      blurDataURL={image.blurDataURL}
      placeholder="blur"
      alt=""
      className={`${
        imagesInView ? "translate-y-0 scale-100" : "translate-y-[100%] scale-0"
      } ${imageStyle} h-auto min-w-[900px] opacity-50 hover:opacity-100 hidden sm:block
      absolute -top-24 -left-20`}
      quality={100}
    />
  </Link>
);

const PizzaImage = ({
  imagesInView,
  image,
}: {
  imagesInView: boolean;
  image: StaticImageData;
}) => (
  <Link
    href={"https://ecommerce-restaurant-beta.vercel.app/"}
    target="_blank"
    title="Try the App"
    rel="noreferrer noopener"
    className="z-[2]"
  >
    <Image
      src={image}
      blurDataURL={image.blurDataURL}
      placeholder="blur"
      alt=""
      className={`${
        imagesInView ? "translate-x-0 scale-100" : "translate-x-[25%] scale-0"
      } ${imageStyle} w-[800px] min-w-[300px] h-auto lg:hover:translate-x-[-25%]
      absolute -left-[300px] -bottom-40 hidden md:block`}
      quality={100}
    />
  </Link>
);

const PancakesImage = ({
  imagesInView,
  image,
}: {
  imagesInView: boolean;
  image: StaticImageData;
}) => (
  <Link
    href={"https://ecommerce-restaurant-beta.vercel.app/"}
    target="_blank"
    title="Try the App"
    rel="noreferrer noopener"
    className="z-[1]"
  >
    <Image
      src={image}
      blurDataURL={image.blurDataURL}
      placeholder="blur"
      alt=""
      className={`${
        imagesInView ? `translate-x-0 scale-100` : "translate-x-[25%] scale-0"
      } ${imageStyle} hover:opacity-100 opacity-25 w-[800px] h-auto lg:hover:translate-x-[-25%]
      absolute hidden md:block -left-[200px] -bottom-0`}
      quality={100}
    />
  </Link>
);

const Gradient = () => (
  <AnimationOnIntersection
    customAnimation={{
      fromClass: "scale-0 opacity-0",
      toClass: "scale-100 opacity-100",
    }}
    rootMargin="0px 0px 200px 0px"
    className="absolute z-[0] h-[250%] w-[250%]"
  >
    <div
      className={`h-full w-full noise-filter-radial bg-red-800 transition-all duration-[2s]`}
    ></div>
  </AnimationOnIntersection>
);
