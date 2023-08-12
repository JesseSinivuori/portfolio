"use client";
import { useEffect, useState } from "react";
import { OnClickOutside, OnPopState } from "../helpers";
import { MobileMenuEffects } from "./MobileMenuEffects";

export const MobileMenu = ({
  children,
  MobileMenuCloseIcon,
  MobileMenuIcon,
}: {
  children: React.ReactNode;
  MobileMenuCloseIcon: JSX.Element;
  MobileMenuIcon: JSX.Element;
}) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

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
  }, [toggleMobileMenu]);

  useEffect(() => {
    if (toggleMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [toggleMobileMenu]);

  return (
    <div className={`relative flex w-[28px] cursor-pointer `}>
      <MobileMenuEffects
        toggleMobileMenu={false}
        setToggleMobileMenu={setToggleMobileMenu}
      />
      <button
        type="button"
        onClick={() => setToggleMobileMenu((prev) => !prev)}
        aria-label="toggle mobile menu"
        aria-expanded={toggleMobileMenu ? "true" : "false"}
        className={`h-[28px] w-[28px] object-contain hover:opacity-50
                ${
                  toggleMobileMenu ? "rotate-180" : ""
                }  transition-all duration-100`}
      >
        {toggleMobileMenu ? MobileMenuCloseIcon : MobileMenuIcon}
      </button>
      <div
        className={`fixed right-0 top-0 h-screen overflow-x-clip overflow-y-scroll w-full px-4 transition-all duration-300 
                  ${!toggleMobileMenu && "hidden"}`}
      >
        <OnPopState onPopState={() => setToggleMobileMenu(false)}>
          <div
            className={`mt-20 flex flex-col items-end`}
            onClick={() => setToggleMobileMenu(false)}
          >
            <OnClickOutside
              condition={toggleMobileMenu}
              onClickOutside={() => setToggleMobileMenu(false)}
            >
              <div
                data-testid="mobile-menu"
                className="w-full min-w-[160px] list-none flex-col items-center rounded-md bg-navLight dark:bg-nav p-2"
              >
                {children}
              </div>
            </OnClickOutside>
          </div>
        </OnPopState>
      </div>
    </div>
  );
};
