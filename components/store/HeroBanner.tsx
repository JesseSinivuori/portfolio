import Link from "next/link";
import { urlFor } from "../../lib/client";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "../helpers/loading";

export default function HeroBanner({ heroBanner }: any) {
  return (
    <div className="hero-banner-container">
      <Suspense fallback={<Loading />}>
        <div
          className="hero-banner-gradient
            "
        ></div>
        <div className="flex flex-col">
          <div className="relative flex-1">
            <div className="flex ">
              <h1 className="hero-banner-text-gradient">
                {heroBanner.largeText1}
              </h1>
              <div className="px-4">
                <p
                  className={`discount z-1 
                            absolute 
                         top-[40%] right-[62%] rounded-xl
                         border border-[#f02d34]
                        p-2 text-xs font-bold text-[#f02d34]
                      xss:top-0 xss:right-0 xss:mt-[20px]
                      `}
                >
                  {heroBanner.smallText}
                </p>
              </div>
            </div>
            <h3
              className="relative z-10 ml-[40px]
                     hidden w-[260px] rounded-xl
                    bg-[#5a7557] font-extralight md:block md:bg-transparent 
                    "
            >
              {heroBanner.midText}
            </h3>
          </div>
          <Link href={`/store/product/${heroBanner.product.toLowerCase()}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
        <Image
          src={urlFor(heroBanner.image)}
          alt={`image of ${heroBanner.product.toLowerCase()}`}
          className="hero-banner-image"
          height={850}
          width={850}
          priority={true}
        />

        <div className="flex w-full items-end justify-end">
          <h3
            className={`z-1 relative m-[40px]
                    hidden rounded-xl bg-[#5a7557] p-[10px]
                    font-extralight  xs:flex md:hidden md:bg-transparent
                    `}
          >
            {heroBanner.midText}
          </h3>
        </div>
        {/** 
      <div className="relative">
        <div className="desc">
          <h5></h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
      */}
      </Suspense>
    </div>
  );
}
