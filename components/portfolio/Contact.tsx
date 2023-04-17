import toast from "react-hot-toast";
import styles from "../../styles/style";
import copy from "copy-to-clipboard";
import { useState } from "react";

//return contact info
export default function Contact() {
  const handleCopy = () => {
    copy(`sinivuorii@gmail.com`);
    toast.success("Copied to clipboard.");
  };

  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.flexCenter} flex-col`}>
      {!toggle && (
        <button
          type="button"
          onClick={() => setToggle(!toggle)}
          className={`rounded-xl border border-[#ff0606] py-2 px-4 text-[18px] font-normal text-white
             transition-all duration-300 hover:text-[#ff0606]`}
        >
          Show email
        </button>
      )}
      {toggle && (
        <>
          <div
            className={`${styles.heading2} ${styles.flexCenter} flex-wrap p-2`}
          >
            <h2 className="relative p-4 text-[22px] xs:text-[28px] ss:text-[36px]">
              s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m
            </h2>
            <button
              type="button"
              onClick={handleCopy}
              className={`rounded-xl border border-[#ff0606] py-2 px-4 text-[18px] font-normal text-white
             transition-all duration-300 hover:text-[#ff0606]`}
            >
              Copy
            </button>
          </div>
          <div className={`${styles.paragraph} ${styles.flexCenter} p-2`}>
            <a
              href="&#109;a&#105;lt&#111;:s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p
                className="text-[18px] text-dimWhite transition-all 
                    duration-300 hover:text-[#ff0606]"
              >
                Click here to mail.
              </p>
            </a>
          </div>
        </>
      )}
    </div>
  );
}
