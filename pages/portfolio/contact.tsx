import styles from "../../styles/style";
import { Contact, Footer } from "../../components/portfolio";

//return contact page
export default function ContactPage() {
  return (
    <div className=" fixed inset-0 h-screen w-full bg-primary">
      <div
        className={`${styles.paddingY} ${styles.flexCenter} 
            `}
      >
        {/**content container */}
        <div
          className={`${styles.flexCenter} ${styles.boxWidth} 
                 mt-40 flex flex-col`}
        >
          <Contact />
          <Footer styles={"fixed bottom-0 right-0 left-0"} />
        </div>
      </div>
    </div>
  );
}
