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
        className={` scroll-animation-reverse fixed bottom-0 left-0 z-[999]
              flex animate-pulse
            `}
      >
        <div
          className={`${styles.flexCenter} ml-1 mb-2 ss:ml-2 ss:mb-12 sm:ml-6 sm:mb-12 md:ml-6 md:mb-12 lg:ml-8 lg:mb-12 xl:ml-16 xl:mb-24`}
        >
          <ArrowDown styles="animate-bounce " />
        </div>
      </div>
    </div>
  );
}
