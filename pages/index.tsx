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

export default function Home() {
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
