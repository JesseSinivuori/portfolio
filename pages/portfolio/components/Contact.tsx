import styles from "../../../styles/style";

//return contact info
export default function Contact() {
    return (

        //container
        <div className={``}>
            <div className={`${styles.flexCenter} flex-col`}>
                {/**email*/}
                <div className={`${styles.heading2} `}>
                    <h2 className="ss:text-[36px] xs:text-[28px] text-[22px] ">
                        s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m
                    </h2>

                </div>

                {/**a link to open email app*/}
                <div className={`${styles.paragraph} ${styles.flexCenter}`}>
                    <a href="&#109;a&#105;lt&#111;:s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m"
                        target='blank'
                    >
                        <p className="hover:text-[#ff0606] hover:animate-pulse text-[18px] text-dimWhite 
                    ease-in duration-100 mt-4">
                            Click here to mail.
                        </p>
                    </a>
                </div>
            </div>
        </div>

    )
}
