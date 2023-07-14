import styles from "../../styles/style";
import { ContactLink } from "../Navbar";
import { Button, SlideAnimation } from "./index";

export default function ContactBottom() {
  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <div className={`${styles.flexCenter} relative z-[10] mt-12 flex-col`}>
        <div className={`${styles.flexCenter} `}>
          <ContactLink currentRoute={"/"} />
        </div>
      </div>
    </SlideAnimation>
  );
}
