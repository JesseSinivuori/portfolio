import { useEffect, useState } from "react";
import Link from "next/link";
import { close, menu } from "../public/assets/portfolio";
import { navLinks } from "../constants/index";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "../components/store/Cart";
import { useRouter } from "next/router";
import styles from "../styles/style";
import CloseOnBack from "../components/store/CloseOnBack";

//return navbar
export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter();
  const currentRoute = router.pathname;

  const [showCartIcon, setShowCartIcon] = useState(false);

  useEffect(() => {
    if (currentRoute.startsWith("/store/")) {
      setShowCartIcon(true);
    } else {
      setShowCartIcon(false);
    }
  }, [currentRoute]);

  //toggle mobile menu
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const [navStyles, setNavStyles] = useState(
    "bg-primary/0 backdrop-blur-[0px]"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 0) {
        setNavStyles("bg-primary/50 backdrop-blur-[25px]");
      } else {
        setNavStyles("bg-primary/0 backdrop-blur-[0px]");
      }
    };

    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }),
    [setNavStyles];

  useEffect(() => {
    if (toggle) {
      const checkWidth = () => {
        if (window.document.body.offsetWidth > 620) {
          setToggle((prev) => false);
        }
      };
      addEventListener("resize", checkWidth);
      return () => {
        removeEventListener("resize", checkWidth);
      };
    }
  }, [toggle, setToggle]);

  return (
    <div
      className={`m-auto w-full rounded-b-xl
      ${showCart && "absolute h-full min-h-[100svh]"}
    transition-all duration-1000 ${navStyles} max-w-[1400px] `}
    >
      <div className={`${styles.flexCenter}`}>
        <div
          className={`navbar w-full
          ${showCart && "blur"} 
          py-4 
         transition-all duration-500 
         `}
        >
          {/**nav content container */}
          <nav className={`flex items-center justify-between `}>
            {/**make logo a link to home page*/}
            <Link href={"/"}>
              {/**logo text */}
              <p className="ml-[20px] rounded-full bg-transparent p-[10px] font-light text-white hover:scale-[1.2]">
                <span className={"text-white"}>.</span>
                &#106;
                <span
                  className={`text-[#70ffff] 
                        ${
                          currentRoute.startsWith("/store") && "text-[#ff0505]"
                        }`}
                >
                  s
                </span>
              </p>
            </Link>
            {/**contain links */}
            <ul className="hidden flex-1 list-none items-center justify-end ss:flex">
              {/**map links */}
              {navLinks.map((nav, index) => (
                <Link href={`${nav.id}`} key={nav.id} className={``}>
                  <li
                    className={`cursor-pointer rounded-md border-[1px] border-transparent
                p-2 font-poppins text-[16px] font-normal text-white
                duration-100 ease-in-out
                    ${currentRoute === nav.id && "text-white/50"}
                    ${
                      nav.id === "/portfolio/contact" &&
                      currentRoute !== "/portfolio/contact"
                        ? " border-[#ff0000]  hover:animate-pulse hover:text-[#ff0000]"
                        : "hover:text-white/50"
                    }
                    ${index === navLinks.length - 1 ? "mr-[30px]" : "mr-[25px]"}
                    `}
                  >
                    {nav.title}
                  </li>
                </Link>
              ))}
              {showCartIcon && (
                <button
                  type="button"
                  className={`cart-icon flex `}
                  onClick={() => {
                    setShowCart((prev: boolean) => !prev);
                  }}
                >
                  <AiOutlineShopping />
                  <span className="cart-item-qty ">{totalQuantities}</span>
                </button>
              )}
            </ul>

            {/**menu icon container on mobile */}
            <div
              className={`relative mb-0 flex w-[28px] cursor-pointer items-center justify-end ss:hidden`}
            >
              {showCartIcon && (
                <button
                  type="button"
                  className={`cart-icon flex`}
                  onClick={() => {
                    setShowCart((prev: boolean) => !prev);
                  }}
                >
                  <AiOutlineShopping />
                  <span className="cart-item-qty ">{totalQuantities}</span>
                </button>
              )}
              {/**menu icons */}
              <Image
                src={toggle ? close : menu}
                alt="menu"
                className={`mr-[24px] h-[28px] w-[28px] object-contain
              ${
                toggle ? "rotate-180 transform" : ""
              } transition-all duration-300`}
                onClick={() => handleClick()}
              />
              {/**menu container*/}
              <CloseOnBack toggleState={toggle} setToggleState={setToggle}>
                <div
                  className={`absolute top-0 mr-4 min-w-[140px] duration-500 ease-in-out
            ${
              toggle
                ? "animate-top-visible mt-20 flex "
                : " animate-top-hidden "
            }`}
                >
                  {/**contain links */}
                  <ul className="list-none flex-col items-center rounded-md bg-primary p-1">
                    {/**map links */}
                    {navLinks.map((nav, index) => (
                      //list link titles
                      <Link href={`${nav.id}`} key={nav.id}>
                        <li
                          className={`cursor-pointer rounded-md border-[1px] border-transparent p-2 font-poppins text-[16px] text-white
                        ${currentRoute === nav.id && "text-white/50"}
                        ${
                          nav.id === "/portfolio/contact" &&
                          currentRoute !== "/portfolio/contact"
                            ? " border-[1px] border-[#ff0000] hover:animate-pulse hover:text-[#ff0000]"
                            : "hover:text-white/50"
                        }
                        ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                                             `}
                          onClick={() => handleClick()}
                        >
                          {nav.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </CloseOnBack>
            </div>
          </nav>
        </div>
      </div>
      <Cart />
    </div>
  );
}
