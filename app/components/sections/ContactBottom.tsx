import styles from "@/app/styles/style";
import { AnimationOnIntersection } from "../index";
import Link from "next/link";

export default function ContactBottom() {
  return (
    <AnimationOnIntersection animation={"appear-from-bottom"}>
      <div
        id="contact-bottom"
        className={`${styles.flexCenter} relative z-[10] m-32 flex-col`}
      >
        <div className="absolute z-[-1] h-full w-full max-w-[400px] animate-[pulse_5s_linear_infinite] rounded-full bg-red-600/75  blur-[100px] transition-all duration-1000"></div>
        <Link
          data-testid="bottom-contact-button"
          href={"/contact"}
          className={`flex cursor-pointer select-none
           rounded-md border-[1px] p-2 border-red-600 hover:text-red-600
          text-[16px] text-white duration-100 ease-in-out`}
        >
          Contact
        </Link>
      </div>
    </AnimationOnIntersection>
  );
}
