"use client";
import { ValueOf } from "next/dist/shared/lib/constants";
import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimationOnIntersectionProps {
  children: ReactNode;
  animation?:
    | "slide-from-right"
    | "slide-from-left"
    | "appear-from-bottom"
    | "appear-";
  retriggerAnimation?: boolean;
  className?: string;
  customAnimation?: {
    fromClass: string;
    toClass: string;
  };
  duration?: Duration;
  rootMargin?: string; //example "0px 0px -100px 0px"
}

const duration = {
  long: "duration-1000",
  medium: "duration-500",
  short: "duration-300",
} as const;

type Duration = ValueOf<typeof duration>;

const fromClass = {
  "slide-from-right": "opacity-0 translate-x-[100%]",
  "slide-from-left": "opacity-0 translate-x-[-100%]",
  "appear-from-bottom": "opacity-0 translate-y-[5%]",
  "appear-": "opacity-0",
};

const toClass = {
  "slide-from-right": "opacity-100 translate-x-0",
  "slide-from-left": "opacity-100 translate-x-0",
  "appear-from-bottom": "opacity-100 translate-y-0",
  "appear-": "opacity-100",
};

export function AnimationOnIntersection(props: AnimationOnIntersectionProps) {
  const {
    animation,
    children,
    className,
    customAnimation,
    retriggerAnimation,
    rootMargin,
    duration,
  } = props;
  let ref = useRef<HTMLDivElement>(null);

  let animateFromClass = "";
  let animateToClass = "";

  if (animation) {
    animateFromClass = fromClass[animation];
    animateToClass = toClass[animation];
  }

  if (customAnimation) {
    animateFromClass = customAnimation.fromClass;
    animateToClass = customAnimation.toClass;
  }

  const [animationState, setAnimationState] = useState(animateFromClass);

  useEffect(() => {
    const element = ref.current;
    const options = { rootMargin: rootMargin ?? "0px 0px -100px 0px" };

    if (element) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimationState(animateToClass);
        } else if (retriggerAnimation) {
          setAnimationState(animateFromClass);
        }
      }, options);

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, [animateFromClass, animateToClass, retriggerAnimation, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${animationState} ${className} 
      ${duration ?? "duration-500"} transition-all`}
    >
      {children}
    </div>
  );
}
