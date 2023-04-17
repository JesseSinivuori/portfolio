import styles from "../../styles/style";
import Link from "next/link";
import Image from "next/image";

export default function ContactButton() {
  const arrowUp = "/arrowup.svg";
  return (
    <Link href={"/portfolio/contact"}>
      <div
        className={`${styles.flexCenter} relative h-[140px] w-[140px] 
         cursor-pointer rounded-full bg-transparent
         bg-gradient-to-r from-[#70ffff] to-[#7088ff]
         p-[2px] text-[#70ffff]
         duration-300 ease-in 
         hover:animate-pulse hover:from-[#ffdf87] hover:to-[#ff4a4a] hover:text-[#ffa759]
        `}
      >
        <div
          className={`${styles.flexCenter} h-[100%] w-[100%] flex-col rounded-full bg-primary`}
        >
          <div
            className={`${styles.flexCenter} flex-1
                `}
          >
            <p className="mr-1 font-poppins text-[18px] font-normal leading-[23px]">
              Contact
            </p>
            <Image
              src={arrowUp}
              className="h-[23px] w-[23px] object-contain"
              alt="arrow"
              height={23}
              width={23}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
