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
