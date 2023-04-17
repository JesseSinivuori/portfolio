import styles from "../../styles/style";
import { arrowUp } from "../../public";
import Link from "next/link";
import Image from "next/image";

//return the circle contact button
export default function ContactButton() {
  return (
    //make the button a link
    <Link href={"/portfolio/contact"}>
      {/**return a circle shaped container with 2px padding */}

      <div
        className={`${styles.flexCenter} relative h-[140px] w-[140px] 
         cursor-pointer rounded-full bg-transparent
         bg-gradient-to-r from-[#70ffff] to-[#7088ff]
         p-[2px] text-[#70ffff]
         duration-300 ease-in 
         hover:animate-pulse hover:from-[#ffdf87] hover:to-[#ff4a4a] hover:text-[#ffa759]
        `}
      >
        {/**fill the circle with background color, leaving the 2px padding as borders */}
        <div
          className={`${styles.flexCenter} h-[100%] w-[100%] flex-col rounded-full
            bg-primary
            `}
        >
          {/**container for content in the circle */}
          <div
            className={`${styles.flexCenter} flex-1
                `}
          >
            {/**contact text */}
            <p
              className="mr-1 font-poppins text-[18px] font-normal 
                        leading-[23px]"
            >
              Contact
            </p>

            {/**arrow image */}
            <Image
              src={arrowUp}
              className="h-[23px] w-[23px] object-contain"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
