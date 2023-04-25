import { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/style";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

export default function Layout({ children }: any) {
  const { showCart } = useStateContext();
  let darkMode = true;

  const pathname = usePathname();
  const [bgColor, setBgColor] = useState("bg-[#0a0a0a]");

  useEffect(() => {
    if (pathname.startsWith("/store/")) {
      setBgColor("bg-store");
    } else {
      setBgColor("bg-primary");
    }
  }, [pathname]);

  return (
    <div
      className={`${
        darkMode && "dark"
      }  overflow-hidden overscroll-none ${bgColor} ${
        showCart && "fixed h-full w-full"
      }
      `}
    >
      <header>
        <div className={`navbar-container`}>
          <Navbar />
          <Toaster
            containerClassName={`mt-16 lg:mt-0 z-[9999]`}
            toastOptions={{
              style: {
                padding: "16px",
                color: "white",
                backgroundColor: "#0a0a0a",
              },
            }}
          />
        </div>
      </header>
      <main className={`main-container`}>
        <div
          className={`${styles.flexCenter} p-1 xss:p-2 xs:p-3 ss:p-4 
          ${showCart && "blur"}`}
        >
          {/**content container */}
          <div className={`${styles.boxWidth} `}>{children}</div>
        </div>
      </main>
    </div>
  );
}
