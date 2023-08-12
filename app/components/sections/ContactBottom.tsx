import { styles } from "@/app/styles/style";
import Link from "next/link";

export function ContactBottom() {
  return (
    <section
      id="contact-bottom"
      className={`${styles.sectionPaddingY} flex justify-center items-center relative z-[10] flex-col`}
    >
      <Link
        href={"/contact"}
        className="rounded-md border 
                dark:border-cyan-700 border-transparent px-4 py-2 text-[18px] 
                font-medium text-white/90 shadow-lg dark:hover:border-opacity-50
                duration-300 ease-in-out dark:bg-transparent bg-blue-700 hover:bg-blue-800
                dark:hover:text-cyan-500"
        data-testid="bottom-contact-button"
      >
        Contact
      </Link>
    </section>
  );
}
