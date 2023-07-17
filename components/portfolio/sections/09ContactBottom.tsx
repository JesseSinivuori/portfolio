import styles from "../../../styles/style";
import { ContactLink } from "../../Navbar";
import { SlideAnimation } from "../index";

export default function ContactBottom() {
  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <div className={`${styles.flexCenter} relative z-[10] mt-12 flex-col`}>
        <div className={`${styles.flexCenter} `}>
          <ContactLink pathname={"/"} />
        </div>
      </div>
    </SlideAnimation>
  );
}
