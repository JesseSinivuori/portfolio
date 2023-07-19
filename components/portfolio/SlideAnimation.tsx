import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  animation:
    | "slide-animation-right"
    | "slide-animation-left"
    | "slide-animation-top"
    | "appear-animation";
  className?: string;
};

export default function SlideAnimation(props: Props) {
  const { animation, children, className } = props;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            }
          });
        },
        { rootMargin: "0px 0px -100px 0px" }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, [ref]);

  return (
    <div ref={ref} className={`${animation} ${className}`}>
      {children}
    </div>
  );
}
