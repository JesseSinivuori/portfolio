import styles from "../styles/style";
import Head from "next/head";
import {
  Skills,
  Game,
  Website,
  Footer,
  ScrollArrow,
  ContactBottom,
  DeliveryFeeCalculator,
  GradientGenerator,
  Hero,
  Ecommerce,
} from "../components/index";
import AdManager from "../components/portfolio/AdManager";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const welcomeMessageShown = localStorage.getItem("welcomeMessageShown");
    if (!welcomeMessageShown) {
      toast.success("Welcome! You can find my skills + projects below.", {
        icon: "👋",
        duration: 6000,
        position: "bottom-center",
      });
    }
    localStorage.setItem("welcomeMessageShown", "true");
  }, []);

  return (
    <div className={``}>
      <Head key={"layout"}>
        <title>{"Jesse's Portfolio"}</title>
      </Head>
      <div className={`${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <ScrollArrow />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Skills />
          <Website />
          <AdManager />
          <GradientGenerator />
          <Ecommerce />
          <DeliveryFeeCalculator />
          <Game />
          <ContactBottom />
          <Footer />
        </div>
      </div>
    </div>
  );
}
