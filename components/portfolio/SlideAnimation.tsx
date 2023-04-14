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

  const elementRef = useRef<any>(null);

  useEffect(() => {
    // create an intersection observer to detect when the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // check if the element is in view
          if (entry.isIntersecting) {
            // add the "in-view" class to the element to trigger the animation
            entry.target.classList.add("in-view");
          } else {
            // remove the "in-view" class to stop the animation
            //entry.target.classList.remove("in-view");
            return;
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px" }
    );
    // get the child elements of the container
    const elements = elementRef.current.children;

    // start observing the child elements
    for (const element of elements) {
      observer.observe(element);
    }
    return () => {
      // stop observing the child elements
      for (const element of elements) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, animation]);

  return (
    <div ref={elementRef}>
      <div className={`${animation} ${className}`}>{children}</div>
    </div>
  );
}
