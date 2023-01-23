import { MapSkills, SlideAnimation } from ".";
import { mySkills } from "../../../constants";
import styles, { layout } from "../../../styles/style";

//return skills
export default function Skills() {

    return (

        //section
        <section className={`${layout.section}  w-full flex-wrap justify-center
        ${styles.marginY}`}>

            {/**heading */}
            <h2 className={`${styles.heading2} mb-8
            text-[42px] text-center
            `}>
                My Skills
            </h2>
            <div className={`${styles.paddingY} `}>
                <SlideAnimation content={
                    <MapSkills content={mySkills} />}
                    animationClass={"scroll-animation-right"} />
            </div>
        </section>

    )
}



