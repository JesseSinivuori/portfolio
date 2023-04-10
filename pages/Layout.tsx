import Head from "next/head";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/style";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  const { showCart } = useStateContext();

  return (
    <div
      className={`overflow-hidden bg-primary
      ${showCart && "fixed h-[100svh] w-[100svw]"}
      overflow-hidden 
      `}
    >
      <Head>
        <title>{"Jesse's Portfolio"}</title>
      </Head>
      <header>
        <div className={`navbar-container `}>
          <Navbar />
        </div>
      </header>
      <main className={`main-container`}>
        <div className={`${styles.flexCenter} p-1 xss:p-2 xs:p-3 ss:p-4`}>
          {/**content container */}
          <div className={`${styles.boxWidth}`}>{children}</div>
        </div>
      </main>
    </div>
  );
}
