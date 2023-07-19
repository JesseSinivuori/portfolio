import styles from "../../../styles/style";
import { ContactLink } from "../../Navbar";
import { SlideAnimation } from "../index";

export default function ContactBottom() {
  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <div className={`${styles.flexCenter} relative z-[10] m-32 flex-col`}>
        <div className="absolute z-[-1] h-full w-full max-w-[400px] animate-[pulse_5s_linear_infinite] rounded-full bg-red-600/75  blur-[100px] transition-all duration-1000"></div>
        <ContactLink />
      </div>
    </SlideAnimation>
  );
}
