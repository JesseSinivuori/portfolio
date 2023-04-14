import styles from "../../styles/style";
import React from "react";

type Props = {
  styles?: string; //style the footer to set the position on different pages if needed
};

//return footer
export default function Footer(props: Props) {
  return (
    //container
    <div
      className={` bottom-0 left-0 right-0 w-full ${styles.paddingX} ${styles.flexCenter} ${props.styles}`}
    >
      {/**set width */}
      <div className={`${styles.boxWidth} max-w-[1000px] `}>
        {/**make a section for content */}
        <section className={`${styles.flexCenter} mt-6 flex-col py-6`}>
          {/**make the gray line */}
          <div
            className="w-full flex-row justify-between border-t-[1px]
                                     border-t-[#3F3E45] pt-6 md:flex-row"
          >
            {/**footer text */}
            <p
              className="font-popping text-center text-[16px]
                                    font-normal
                                    leading-[27px] text-dimWhite "
            >
              2023 Jesse S&#105;niv&#117;o&#114;&#105;. All Rights Reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
