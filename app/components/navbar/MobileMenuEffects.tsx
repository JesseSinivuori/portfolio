"use client";
import { useEffect } from "react";

export const MobileMenuEffects = ({
  toggleMobileMenu,
  setToggleMobileMenu,
}: {
  toggleMobileMenu: boolean;
  setToggleMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (toggleMobileMenu) {
      const checkWidth = () => {
        if (window.document.body.offsetWidth > 620) {
          setToggleMobileMenu(false);
        }
      };
      addEventListener("resize", checkWidth);
      return () => {
        removeEventListener("resize", checkWidth);
      };
    }
  }, [setToggleMobileMenu, toggleMobileMenu]);

  useEffect(() => {
    if (toggleMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [toggleMobileMenu]);

  return null;
};
