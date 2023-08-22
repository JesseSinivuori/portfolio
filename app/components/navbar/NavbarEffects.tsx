"use client";
import { useEffect, useState } from "react";

export function NavbarEffects({
  children,
  navStyles,
}: {
  children: React.ReactNode;
  navStyles: string[];
}) {
  const [navbarBelowTopStyle, navbarAtTopStyle] = navStyles;
  const [navStylesState, setNavStylesState] = useState(navbarAtTopStyle);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 0) {
        setNavStylesState(navbarBelowTopStyle);
      } else {
        setNavStylesState(navbarAtTopStyle);
      }
    };

    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }),
    [navStylesState];

  useEffect(() => {
    if (scrollY > 0) {
      setNavStylesState(navbarBelowTopStyle);
    }
  }, [navbarBelowTopStyle]);

  return <div className={`${navStylesState}`}>{children}</div>;
}
