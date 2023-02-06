import styles, { layout } from "../../styles/style"
import { Contact, Footer } from "./components"

//return contact page
export default function ContactPage() {
    return (
        <div className=" inset-0 bg-primary w-full h-screen fixed">

            <div className={`${styles.paddingY} ${styles.flexCenter} 
            `}>

                {/**content container */}
                <div className={`${styles.flexCenter} ${styles.boxWidth} 
                 flex flex-col mt-40`}>
                    <Contact />
                    <Footer styles={'fixed bottom-0 right-0 left-0'} />
                </div>
            </div>
        </div>
    )
}
