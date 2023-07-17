import { useEffect, useState } from "react";
import styles from "../../styles/style";
import { ArrowDown } from "./index";

type Props = {
  styles?: string;
};

export default function ScrollArrow(props: Props) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;
    let requestId: number | null | any;
    const handleScroll = () => {
      if (!requestId) {
        requestId = requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY > 50) {
            setIsVisible(false);
          }
          requestId = null;
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsVisible, isVisible]);

  return (
    <div
      className={`${props.styles} scroll-arrow ${
        !isVisible ? "opacity-0" : "opacity-1"
      }`}
    >
      <div
        className={
          "scroll-animation-reverse fixed bottom-0 left-0 z-[999] flex animate-pulse"
        }
      >
        <div
          className={`${styles.flexCenter} mb-2 ml-1 ss:mb-12 ss:ml-2 sm:mb-12 sm:ml-6 md:mb-12 md:ml-6 lg:mb-12 lg:ml-8 xl:mb-24 xl:ml-16`}
        >
          <ArrowDown styles="animate-bounce" />
        </div>
      </div>
    </div>
  );
}
