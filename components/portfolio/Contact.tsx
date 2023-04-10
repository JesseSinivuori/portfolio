import styles from "../../styles/style";

//return contact info
export default function Contact() {
  return (
    //container
    <div className={``}>
      <div className={`${styles.flexCenter} flex-col`}>
        {/**email*/}
        <div className={`${styles.heading2} `}>
          <h2 className="text-[22px] xs:text-[28px] ss:text-[36px] ">
            s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m
          </h2>
        </div>

        {/**a link to open email app*/}
        <div className={`${styles.paragraph} ${styles.flexCenter}`}>
          <a
            href="&#109;a&#105;lt&#111;:s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m"
            target="blank"
          >
            <p
              className="mt-4 text-[18px] text-dimWhite duration-100 
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
