import { styles } from "@/app/styles/style";
import { Contact } from "./Contact";
import { Footer } from "../components/Footer";

export default function ContactPage() {
  return (
    <div
      className={`flex justify-center items-center ${styles.sectionPaddingY}`}
    >
      <Contact />
      <Footer className={"fixed bottom-0 right-0 left-0"} />
    </div>
  );
}
