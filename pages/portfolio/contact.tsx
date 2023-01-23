import styles, { layout } from "../../styles/style"
import { Contact, Footer } from "./components"

//return contact page
export default function ContactPage() {
    return (
        <div className=" h-full w-full top-0 bottom-0 bg-black">

            <div className={` `}>

                {/**padding */}
                <div className={`${styles.paddingY} ${styles.flexCenter} 
            `}>

                    {/**content container */}
                    <div className={`${styles.flexCenter} ${styles.boxWidth} 
                 flex flex-col mt-40`}>
                        <Contact />
                        <Footer styles={''} />
                    </div>
                </div>
            </div>
        </div>
    )
}
