"use client";
import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { OnPopState, ProjectsPopover, OnClickOutside } from "./index";

export function Navbar() {
  const pathname = usePathname();

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const [navStyles, setNavStyles] = useState(
    "bg-primary/0 backdrop-blur-[0px]"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 0) {
        setNavStyles(`bg-primary/50 backdrop-blur-[25px]`);
      } else {
        setNavStyles(`bg-primary/0 backdrop-blur-[0px]`);
      }
    };

    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }),
    [setNavStyles];

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

  const linkStyle = (route: string): string => {
    return pathname === route
      ? "text-white/50"
      : `cursor-pointer select-none text-[16px] text-white/75
      hover:text-white text-white duration-100 ease-in-out `;
  };

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[9999]
      select-none overscroll-none rounded-b-xl
      `}
    >
      <div
        className={`m-auto ${navStyles} max-w-[1400px] rounded-b-xl transition-all duration-300`}
      >
        <nav>
          <div className="flex w-full items-center gap-4 px-8 py-4">
            <div className="flex flex-1">
              <HomeLogo />
            </div>
            <div className="hidden justify-end gap-4 xs:flex">
              <NavLinks pathname={pathname} linkStyle={linkStyle} />
            </div>
            <div className="flex justify-end xs:hidden">
              <MobileMenu
                toggleMobileMenu={toggleMobileMenu}
                setToggleMobileMenu={setToggleMobileMenu}
              >
                <div className="space-y-4">
                  <NavLinks pathname={pathname} linkStyle={linkStyle} />
                </div>
              </MobileMenu>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

const NavLinks = ({
  pathname,
  linkStyle,
}: {
  pathname: string;
  linkStyle: (route: string) => string;
}) => (
  <>
    <Link href={"/"} className={`${linkStyle("/")} p-2 `}>
      Home
    </Link>
    <ProjectsPopover />
    <ContactLink pathname={pathname} />
  </>
);

const HomeLogo = () => (
  <Link
    href={"/"}
    className="flex rounded-full bg-transparent p-2 font-light text-white hover:opacity-50"
  >
    <span className="text-white">.</span>j
    <span className="text-cyan-500">s</span>
  </Link>
);

export function ContactLink({ pathname }: { pathname?: string }) {
  return (
    <Link
      href={"/contact"}
      className={`flex cursor-pointer select-none
    rounded-md border-[1px] p-2 
    text-[16px] text-white duration-100 ease-in-out 
    ${
      pathname !== "/contact"
        ? "border-red-600 hover:text-red-600"
        : "border-transparent text-white/50"
    } `}
    >
      Contact
    </Link>
  );
}

const MobileMenu = ({
  toggleMobileMenu,
  setToggleMobileMenu,
  children,
}: {
  toggleMobileMenu: boolean;
  setToggleMobileMenu: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) => (
  <div className={`relative flex w-[28px] cursor-pointer `}>
    <button
      type="button"
      onClick={() => setToggleMobileMenu((prev) => !prev)}
      aria-label="toggle mobile menu"
      aria-expanded={toggleMobileMenu ? "true" : "false"}
    >
      <Image
        src={toggleMobileMenu ? "/close.svg" : "/menu.svg"}
        alt=""
        className={`h-[28px] w-[28px] object-contain hover:opacity-50
              ${
                toggleMobileMenu ? "rotate-180" : ""
              }  transition-all duration-100`}
        height={28}
        width={28}
        priority
      />
    </button>
    <div
      className={`fixed right-0 top-0 h-screen overflow-x-clip border overflow-y-scroll w-full px-4 transition-all duration-300 
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
              className="w-full min-w-[160px] list-none flex-col items-center rounded-md bg-nav p-2"
            >
              {children}
            </div>
          </OnClickOutside>
        </div>
      </OnPopState>
    </div>
  </div>
);
