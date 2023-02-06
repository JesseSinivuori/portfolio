import Link from "next/link"
import { SlideAnimation } from "."
import styles, { layout } from "../../../styles/style"
import ArrowDown from "./ArrowDown"


type EcommerceProps = {

}

export default function Ecommerce(props: EcommerceProps) {
    return (
        <section className={`${layout.section} ${styles.flexCenter}  flex-wrap`}>

            <h2 className={`${styles.heading2} text-center mb-6 text-[42px]`}>
                Full Stack<br />
                Ecommerce Website
            </h2>
            <div className={`${styles.flexCenter} flex-col`}>
                <ArrowDown styles="animate-bounce" />
                <SlideAnimation content={
                    <Link href={"/store/home"}
                        className={`hover:animate-pulse ease-in-out duration-100`}>
                        <p className={`${styles.paragraph} text-gradient-ecommerce
                    border-[1px] border-transparent hover:border-[#ffee00] hover:text-white
                    p-4 rounded-md
                    `}>
                            See it here

                        </p>

                    </Link>
                } animationClass={"scroll-animation-left"} />
            </div>
        </section>
    )
}
