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
          <div className="relative w-full h-full">
            <Ecommerce />
            <DeliveryFeeCalculator />
          </div>
          <ContactBottom />
          <Footer />
        </div>
      </div>
    </div>
  );
}
