import toast from "react-hot-toast";
import styles from "../../styles/style";
import copy from "copy-to-clipboard";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const handleCopy = () => {
    copy(`sinivuorii@gmail.com`);
    toast.success("Copied to clipboard.");
  };

  const [showEmail, setShowEmail] = useState(false);

  if (!showEmail) {
    return (
      <button
        type="button"
        onClick={() => setShowEmail(!showEmail)}
        className={`rounded-md border border-[#ff0606] px-4 py-2 text-[18px] text-white
     transition-all duration-100 hover:text-[#ff0606]`}
      >
        Show email
      </button>
    );
  }

  return (
    <div className={`${styles.flexCenter} flex-col`}>
      <div className={`${styles.heading2} ${styles.flexCenter} flex-wrap p-2`}>
        <h2 className=" p-4 text-[22px] xs:text-[28px] ss:text-[36px]">
          s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m
        </h2>
        <button
          type="button"
          onClick={handleCopy}
          className={`rounded-md border border-[#ff0606] px-4 py-2 text-[18px] font-normal text-white
             transition-all duration-100 hover:text-[#ff0606]`}
        >
          Copy
        </button>
      </div>
      <div className={`${styles.paragraph} ${styles.flexCenter} p-2`}>
        <Link
          href="&#109;a&#105;lt&#111;:s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m"
          target="_blank"
          rel="noreferrer noopener"
        >
          <p
            className={`${styles.paragraph} transition-all duration-100 hover:text-[#ff0606]`}
          >
            Click here to mail.
          </p>
        </Link>
      </div>
    </div>
  );
}
