import styles from "../../../styles/style";
import Button from "./Button"
import ArrowDown from "./ArrowDown";

//return contact button and arrow
export default function ContactBottom() {
    return (
        //container with pulse animation
        <div className={`${styles.flexCenter} flex-col animate-pulse mt-12 `}>

            <ArrowDown styles="animate-bounce"/>

            {/**contain button */}
            <div className={`${styles.flexCenter} `}>

                {/**button */}
                <Button to='/portfolio/contact' styles='m-8' />

            </div>
        </div>
    )
}
