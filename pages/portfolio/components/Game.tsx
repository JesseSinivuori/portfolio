import styles, { layout } from "../../../styles/style";
import { mygamegif, unity, csharp } from '../../../public/assets/portfolio'
import Image from 'next/image'
import SlideAnimation from "./SlideAnimation";

//return game section
export default function Game() {

    //array of languages
    const images = [
        {
            id: 'unity',
            img: unity,
            name: 'Unity',
        },
        {
            id: 'csharp',
            img: csharp,
            name: 'C Sharp',
        },
    ];

    return (
        //section
        <section id='game' className={`${layout.section} ${styles.paddingY}`}>

            {/**container */}
            <div className={`${layout.sectionInfo} `}>
                <div className={``}>
                    {/**header */}
                    <h2 className={`${styles.heading2} ${styles.flexCenter} text-center 
                mb-6 text-[42px]`}>
                        Original{" "}
                        Game
                    </h2>

                    {/**text under header*/}
                    <p className={`${styles.paragraph} w-full ${styles.flexCenter} `}>
                        Designed and developed from scratch.{" "}
                        <br className="xs:block hidden" />
                        Made in Unity, using C Sharp.
                    </p>
                </div>
                {/**container */}

                <SlideAnimation content={
                    <div className={`${styles.flexCenter} w-full`}>
                        {/**map logos */}
                        {images.map((img) => (

                            //contain image and name
                            <div key={img.id} className={`${styles.flexCenter} 
                                flex-row flex-wrap sm:mb-6
                                hover:scale-[1.2] ease-in duration-100 m-4 `}>

                                {/**image */}
                                <Image src={img.img} alt={`image of ${img.id}`}
                                    className={`object-contain object-center
                                        w-[80px] min-w-[80px] m-8  ${img.id !== 'unity' ? '' : 'bg-white'}
                                        `} />

                                {/**name of image */}
                                <p className={`${styles.skillText} `}>
                                    {img.name}
                                </p>
                            </div>
                        ))}
                    </div>
                } animationClass={"scroll-animation-left"} />

            </div>

            {/**contain gif */}
            <div className={`${layout.sectionImg} `}>

                {/**gif */}
                <Image src={mygamegif} alt='My game gif' className={`
                object-contain max-w-[470px] min-w-[360px]`}
                />
            </div>
        </section>
    )
}
