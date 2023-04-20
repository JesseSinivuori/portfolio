import styles from "../styles/style";
import { Hero } from "../components/portfolio";
import Ecommerce from "../components/portfolio/Ecommerce";
import DeliveryFeeCalculator from "../components/portfolio/DeliveryFeeCalculator";
import GradientGenerator from "../components/portfolio/GradientGenerator";
import Head from "next/head";
import { Suspense, lazy } from "react";
import Loading from "../components/helpers/Loading";

const Skills = lazy(() => import("../components/portfolio/Skills"));
const Game = lazy(() => import("../components/portfolio/Game"));
const Website = lazy(() => import("../components/portfolio/Website"));
const Footer = lazy(() => import("../components/portfolio/Footer"));
const ScrollArrow = lazy(() => import("../components/portfolio/ScrollArrow"));
const ContactBottom = lazy(
  () => import("../components/portfolio/ContactBottom")
);

//return home page
export default function Home() {
  return (
    //container
    <div className={``}>
      <Head key={"layout"}>
        <title>{"Jesse's Portfolio"}</title>
      </Head>
      {/**container */}
      <div className={`${styles.flexStart} `}>
        {/**content container */}
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <ScrollArrow />
        </div>
      </div>

      {/**container */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        {/**content container */}
        <div className={`${styles.boxWidth}`}>
          <Skills />
          <Website />
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
