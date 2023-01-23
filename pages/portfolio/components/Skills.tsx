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
                {mySkills.map((item: any, i) => (
                    <SlideAnimation content={item[i]} animationClass={"slide-animation-right"}                    />
                ))}

                
            </div>
        </section>

    )
}



