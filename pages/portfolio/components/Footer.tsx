import styles from "../../../styles/style";
import React from 'react'

type Props = {
    styles: string; //style the footer to set the position on different pages if needed
}

//return footer
export default function Footer(props: Props) {
    return (
        //container
        <div className={` w-full bottom-0 left-0 right-0 ${styles.paddingX} ${styles.flexCenter} ${props.styles}`}>

            {/**set width */}
            <div className={`${styles.boxWidth} `}>

                {/**make a section for content */}
                <section className={`${styles.flexCenter} py-6 mt-6 flex-col`}>

                    {/**make the gray line */}
                    <div className="w-full flex-row justify-between md:flex-row
                                     pt-6 border-t-[1px] border-t-[#3F3E45]">

                        {/**footer text */}
                        <p className="font-popping font-normal text-center
                                    text-[16px]
                                    leading-[27px] text-dimWhite ">
                            2022 Jesse Sinivuori.{" "}
                            All Rights Reserved.
                        </p>
                    </div>

                </section>
            </div>
        </div>
    )
}
