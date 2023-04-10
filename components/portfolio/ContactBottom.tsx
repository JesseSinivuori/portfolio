import styles from "../../styles/style";
import { Button, ArrowDown, SlideAnimation } from ".";

//return contact button and arrow
export default function ContactBottom() {
  return (
    //container with pulse animation
    <SlideAnimation animation={"slide-animation-top"}>
      <div
        className={`${styles.flexCenter} relative z-[10] mt-12 flex-col hover:animate-pulse`}
      >
        {/**contain button */}
        <div className={`${styles.flexCenter} `}>
          {/**button */}
          <Button to="/portfolio/contact" styles="m-8" />
        </div>
      </div>
    </SlideAnimation>
  );
}
