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
  }, [currentRoute]);

  //toggle mobile menu
  const [toggle, setToggle] = useState(false);

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
    const checkWidth = () => {
      if (window.document.body.offsetWidth > 620) {
        setToggle((prev) => false);
      }
    };
    addEventListener("resize", checkWidth);
    return () => {
      removeEventListener("resize", checkWidth);
    };
  }, [toggle, setToggle]);

  return (
    <div className={`m-auto w-full overscroll-none rounded-b-xl`}>
      <div
        className={`${styles.flexCenter} m-auto ${navStyles} max-w-[1400px]
        rounded-b-xl
        transition-all duration-500 ${
          showCart && "h-full min-h-[100svh] max-h-[100vh] blur"
        }`}
      >
        <div className={`navbar h-full w-full py-4`}>
          <nav className={`flex items-center justify-between`}>
            <Link href={"/"}>
              <p className="ml-[20px] rounded-full bg-transparent p-[10px] font-light text-white hover:opacity-50">
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
            {/** nav links */}
            <ul className="hidden flex-1 list-none items-center justify-end overflow-hidden ss:flex">
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
                  <span className="cart-item-qty">{totalQuantities}</span>
                </button>
              )}
              <Image
                src={toggle ? close : menu}
                alt="menu"
                className={`mr-[24px] h-[28px] w-[28px] object-contain
              ${toggle ? "rotate-180" : ""}  transition-all duration-300`}
                onClick={() => setToggle(true)}
              />
              {/** mobile menu */}
              <CloseOnBack toggleState={toggle} setToggleState={setToggle}>
                <div
                  className={`absolute top-0 mr-4 min-w-[140px] duration-300 ease-in-out
            ${
              toggle
                ? "animate-top-visible mt-20 flex "
                : " animate-top-hidden "
            }`}
                >
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
                    <ul className="list-none flex-col items-center rounded-md bg-primary p-1">
                      {navLinks.map((nav, index) => (
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
          </nav>
        </div>
      </div>
      <Cart />
    </div>
  );
}
