import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";
import { useRouter } from "next/router";
import { OnClickOutside, CloseOnBack, Cart } from "../components/index";
import ProjectsPopover from "./portfolio/ProjectsPopover";

export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter();
  const currentRoute = router.pathname;

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

  const linkStyle = (route: string) => {
    return currentRoute === route
      ? "text-white/50"
      : `cursor-pointer select-none text-[16px] text-white/75
      hover:text-white text-white duration-100 ease-in-out `;
  };

  return (
    <div
      className={`select-none overscroll-none rounded-b-xl
      ${showCart ? "h-screen" : "h-full"}`}
    >
      <div
        className={`m-auto ${navStyles} w-full max-w-[1400px]
        rounded-b-xl ${showCart && "blur"}
        transition-all duration-300`}
      >
        <nav>
          {/** nav links */}
          <ul className="hidden w-full list-none items-center gap-4 py-4 px-8 xss:flex">
            <div className="flex flex-1">
              <HomeLogo currentRoute={currentRoute} />
            </div>
            <Link
              href={!currentRoute.startsWith("/store") ? "/" : "/store/home"}
              className={`${linkStyle("/")}`}
            >
              Home
            </Link>
            {(currentRoute === "/" ||
              currentRoute === "/portfolio/contact") && <ProjectsPopover />}
            <ContactLink currentRoute={currentRoute} />
            <CartIcon
              setShowCart={setShowCart}
              totalQuantities={totalQuantities}
              currentRoute={currentRoute}
            />
          </ul>
        </nav>
      </div>
      {currentRoute.startsWith("/store") && <Cart />}
    </div>
  );
}

const HomeLogo = ({ currentRoute }: { currentRoute: string }) => (
  <Link href={"/"}>
    <span className="flex rounded-full bg-transparent font-light text-white hover:opacity-50">
      <span className={"text-white"}>.</span>
      &#106;
      <span
        className={`text-[#70ffff] ${
          currentRoute.startsWith("/store") && "text-[#ff0505]"
        }`}
      >
        s
      </span>
    </span>
  </Link>
);

export const ContactLink = ({ currentRoute }: { currentRoute: string }) => (
  <Link
    href={"/portfolio/contact"}
    className={`flex cursor-pointer select-none
    rounded-md border-[1px] border-transparent p-2 
    text-[16px] text-white duration-100 ease-in-out 
    ${
      currentRoute !== "/portfolio/contact"
        ? "border-red-600 hover:text-red-600"
        : "text-white/50"
    } `}
  >
    Contact
  </Link>
);

const CartIcon = ({
  setShowCart,
  totalQuantities,
  currentRoute,
}: {
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
  totalQuantities: number;
  currentRoute: string;
}) => {
  if (currentRoute.startsWith("/store"))
    return (
      <button
        data-testid="cart-button-mobile"
        type="button"
        className={`cart-icon flex hover:opacity-50`}
        onClick={() => {
          setShowCart((prev: boolean) => !prev);
        }}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
    );
  return null;
};

const MobileMenu = ({
  showCartIcon,
  setShowCart,
  toggle,
  setToggle,
  totalQuantities,
  currentRoute,
}: {
  showCartIcon: boolean;
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
  setToggle: React.Dispatch<SetStateAction<boolean>>;
  totalQuantities: number;
  currentRoute: string;
}) => {
  <div
    className={`relative mb-0 flex w-[28px] cursor-pointer items-center justify-end `}
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
      className={`mr-[24px] h-[28px] w-[28px] object-contain hover:opacity-50
              ${toggle ? "rotate-180" : ""}  transition-all duration-100`}
      onClick={() => setToggle((prev) => !prev)}
      height={28}
      width={28}
      priority
    />

    <div
      data-testid="mobile-menu"
      className={`fixed top-0 p-2 transition-all duration-300
                ${!toggle && "hidden"}`}
    >
      <CloseOnBack toggleState={toggle} setToggleState={setToggle}>
        <div
          className={` mr-4 mt-20 flex max-h-full `}
          onClick={() => setToggle(false)}
        >
          <OnClickOutside
            condition={toggle}
            onClickOutside={() => {
              setToggle(false);
            }}
          >
            <ul className="w-full min-w-[220px] list-none flex-col items-center overflow-y-scroll rounded-md bg-nav p-2">
              {/** navlinks */}
            </ul>
          </OnClickOutside>
        </div>
      </CloseOnBack>
    </div>
  </div>;
};
