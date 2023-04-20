import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks } from "../constants/index";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "../components/store/Cart";
import { useRouter } from "next/router";
import CloseOnBack from "../components/store/CloseOnBack";
import OnClickOutside from "../components/helpers/OnClickOutside";

//return navbar
export default function Navbar() {
  const { showCart, setShowCart, totalQuantities, totalPrice } =
    useStateContext();
  const router = useRouter();
  const currentRoute = router.pathname;

  const [showCartIcon, setShowCartIcon] = useState(false);

  useEffect(() => {
    if (currentRoute.startsWith("/store/")) {
      setShowCartIcon(true);
    } else {
      setShowCartIcon(false);
    }
  }, [currentRoute, setShowCartIcon]);

  //toggle mobile menu
  const [toggle, setToggle] = useState(false);

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

  {
    /**
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollTo = (id: string) => {
    const sectionRef = sectionRefs.current[id];
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };
   */
  }

  return (
    <div
      className={`overscroll-none rounded-b-xl 
      ${showCart ? "h-screen" : "h-full"}`}
    >
      <div
        className={` m-auto ${navStyles} w-full max-w-[1400px]
        rounded-b-xl ${showCart && "blur"}
        transition-all duration-300 `}
      >
        <div className={`py-4`}>
          <nav className={`flex items-center justify-between `}>
            <Link href={"/"}>
              <p className="ml-[20px] rounded-full bg-transparent p-[10px] font-light text-white hover:opacity-50">
                <span className={"text-white"}>.</span>
                &#106;
                <span
                  className={`text-[#70ffff] ${
                    currentRoute.startsWith("/store") && "text-[#ff0505]"
                  }`}
                >
                  s
                </span>
              </p>
            </Link>
            {/** nav links */}
            <ul className="hidden flex-1 list-none items-center justify-end overflow-hidden md:flex">
              {navLinks.map((nav, index) => (
                <div key={nav.id}>
                  <Link
                    href={`${nav.id}`}
                    key={nav.id}
                    target={`${nav.target ?? "_self"}`}
                    rel={`${nav.rel ?? ""}
                    `}
                  >
                    <li
                      className={`cursor-pointer rounded-md border-[1px] border-transparent
                      p-2 font-poppins text-[16px] font-normal text-white
                      duration-100 ease-in-out 
                      ${currentRoute === nav.id && "text-white/50"}
                      ${
                        nav.id === "/portfolio/contact" &&
                        currentRoute !== "/portfolio/contact"
                          ? " border-[#ff0000] hover:text-[#ff0000]"
                          : nav.title !== "Gradient Generator" &&
                            "hover:text-white/50"
                      } 
                      ${
                        nav.title === "Gradient Generator" &&
                        `bg-gradient-to-r from-yellow-400 to-pink-500 
                        bg-clip-text font-bold text-transparent
                        transition-all duration-100
                       hover:from-yellow-400/75 hover:to-pink-500/75
                      `
                      } 
                      ${
                        index === navLinks.length - 1
                          ? "mr-[30px]"
                          : "mr-[25px]"
                      }
                    `}
                    >
                      {nav.title}
                    </li>
                  </Link>
                </div>
              ))}
              {showCartIcon && (
                <button
                  data-testid="cart-button"
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
            <div
              className={`relative mb-0 flex w-[28px] cursor-pointer items-center justify-end md:hidden`}
            >
              {showCartIcon && (
                <button
                  data-testid="cart-button-mobile"
                  type="button"
                  className={`cart-icon flex`}
                  onClick={() => {
                    setShowCart((prev: boolean) => !prev);
                  }}
                >
                  <AiOutlineShopping />
                  <span className="cart-item-qty">{totalQuantities}</span>
                </button>
              )}
              <Image
                src={toggle ? "/close.svg" : "/menu.svg"}
                alt="menu"
                className={`mr-[24px] h-[28px] w-[28px] object-contain
              ${toggle ? "rotate-180" : ""}  transition-all duration-300`}
                onClick={() => setToggle((prev) => !prev)}
                height={28}
                width={28}
                priority
              />
              {/** mobile menu */}
              <div
                data-testid="mobile-menu"
                className={`fixed top-0 p-2 transition-all duration-300
                ${!toggle && "hidden"}`}
              >
                <CloseOnBack toggleState={toggle} setToggleState={setToggle}>
                  <div className={` mr-4 mt-20 flex max-h-full`}>
                    <OnClickOutside
                      condition={toggle}
                      onClickOutside={() => {
                        if (toggle) {
                          const timeout = setTimeout(() => {
                            setToggle(false);
                          }, 100);
                          return () => clearTimeout(timeout);
                        } else {
                          return;
                        }
                      }}
                    >
                      <ul className="w-full list-none flex-col items-center overflow-y-scroll rounded-md bg-nav p-2">
                        {navLinks.map((nav, index) => (
                          <Link
                            href={`${nav.id}`}
                            key={nav.id}
                            target={`${nav.target ?? "_self"}`}
                            rel={`${nav.rel ?? ""}`}
                          >
                            <li
                              className={`cursor-pointer rounded-md border-[1px] border-transparent p-2 font-poppins text-[16px] text-white
                              ${currentRoute === nav.id && "text-white/50"}
                              ${
                                nav.id === "/portfolio/contact" &&
                                currentRoute !== "/portfolio/contact"
                                  ? " border-[#ff0000] hover:text-[#ff0000]"
                                  : nav.title !== "Gradient Generator" &&
                                    "hover:text-white/50"
                              } 
                              ${
                                nav.title === "Gradient Generator" &&
                                `bg-gradient-to-br from-yellow-400 to-pink-500
                              bg-clip-text font-bold text-transparent
                              transition-all duration-100
                             hover:from-yellow-400/75 hover:to-pink-500/75`
                              } 
                            ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                                             `}
                              onClick={() => setToggle((prev) => !prev)}
                            >
                              {nav.title}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </OnClickOutside>
                  </div>
                </CloseOnBack>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {currentRoute.startsWith("/store/") && <Cart />}
    </div>
  );
}
