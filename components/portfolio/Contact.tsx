import toast from "react-hot-toast";
import styles from "../../styles/style";
import copy from "copy-to-clipboard";

//return contact info
export default function Contact() {
  const handleCopy = () => {
    copy(`s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m`);
    toast.success("Copied to clipboard.");
  };

  return (
    //container
    <div className={``}>
      <div className={`${styles.flexCenter} flex-col`}>
        {/**email*/}
        <div className={`${styles.heading2} ${styles.flexCenter} flex-wrap`}>
          <h2 className="relative text-[22px] xs:text-[28px] ss:text-[36px]">
            s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m
          </h2>
          <button
            type="button"
            onClick={handleCopy}
            className="m-4 rounded-xl border border-[#ff0606] py-2 px-4 text-[18px]
            font-light text-white transition-all duration-300 hover:text-[#ff0606]"
          >
            Copy
          </button>
        </div>

        {/**a link to open email app*/}
        <div className={`${styles.paragraph} ${styles.flexCenter}`}>
          <a
            href="&#109;a&#105;lt&#111;:s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m"
            target="blank"
          >
            <p
              className="text-[18px] text-dimWhite duration-100 
                    ease-in hover:animate-pulse hover:text-[#ff0606]"
            >
              Click here to mail.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
