"use client";
import { launchFireWorks } from "@/app/lib/confetti";
import { useEffect, useRef, useState } from "react";

export default function TicTacToeFireWorks({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [fireWorksLaunched, setFireWorksLaunched] = useState(false);

  useEffect(() => {
    if (!fireWorksLaunched) {
      const ticTacToeRef = ref.current;
      if (!ticTacToeRef) return;
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            launchFireWorks();
            setFireWorksLaunched(true);
          }
        },
        { rootMargin: "0px 0px -500px 0px" }
      );

      observer.observe(ticTacToeRef);
      return () => {
        observer.unobserve(ticTacToeRef);
      };
    }
  }, [fireWorksLaunched]);
  return <div ref={ref}>{children}</div>;
}
