import styles from "../../styles/style";
import { Contact, Footer } from "../../components/index";

export default function ContactPage() {
  return (
    <div
      className={`${styles.flexCenter} ${styles.paddingY} ${styles.boxWidth} mt-16 flex-col`}
    >
      <Contact />
      <Footer styles={"fixed bottom-0 right-0 left-0"} />
    </div>
  );
}
