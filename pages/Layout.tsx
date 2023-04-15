import Head from "next/head";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/style";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout({ children }: any) {
  const { showCart } = useStateContext();

  let darkMode = true;

  return (
    <div className={`${darkMode && "dark"} overflow-hidden bg-primary`}>
      <Head>
        <title>{"Jesse's Portfolio"}</title>
      </Head>
      <header>
        <div className={`navbar-container`}>
          <Navbar />
        </div>
      </header>
      <main
        className={`main-container transition-all duration-300 ${
          showCart && "blur"
        }`}
      >
        <div className={`${styles.flexCenter} p-1 xss:p-2 xs:p-3 ss:p-4`}>
          <div className={`${styles.boxWidth}`}>{children}</div>
        </div>
      </main>
    </div>
  );
}
