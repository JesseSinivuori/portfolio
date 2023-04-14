import styles from "../styles/style";
import {
  Hero,
  Skills,
  Game,
  Website,
  Footer,
  ScrollArrow,
  ContactBottom,
} from "../components/portfolio";
import Ecommerce from "../components/portfolio/Ecommerce";
import DeliveryFeeCalculator from "../components/portfolio/DeliveryFeeCalculator";
import GradientGenerator from "../components/portfolio/GradientGenerator";

//return home page
export default function Home() {
  return (
    //container
    <div className={``}>
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
