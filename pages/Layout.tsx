import Head from "next/head";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/style";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: any) {
  const { showCart } = useStateContext();

  let darkMode = true;

  return (
    <div
      className={`${
        darkMode && "dark"
      } overflow-hidden overscroll-none bg-primary`}
    >
      <Head>
        <title>{"Jesse's Portfolio"}</title>
      </Head>
      <header>
        <div className={`navbar-container`}>
          <Navbar />
          <Toaster
            containerClassName={`mt-16 lg:mt-0 z-[9999]`}
            toastOptions={{
              style: {
                padding: "16px",
                color: "white",
                backgroundColor: "#0f0f0f",
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
          <div className={`${styles.boxWidth}`}>{children}</div>
        </div>
      </main>
    </div>
  );
}
