import { react, typescript, html5, tailwindcss, codeimg } from "../../../public/assets/portfolio"
import styles, { layout } from "../../../styles/style";
import Image from 'next/image'
import SlideAnimation from "./SlideAnimation";

//return website section
export default function Website() {

    //array of languages
    const images = [
        {
            id: 'react',
            img: react,
            name: 'React',
        },
        {
            id: 'typescript',
            img: typescript,
            name: 'Typescript',
        },
        {
            id: 'html5',
            img: html5,
            name: 'HTML',
        },
        {
            id: 'tailwindcss',
            img: tailwindcss,
            name: 'Tailwind CSS',
        },

    ];

    return (
        //section
        <section >

            {/**reverse section layout */}
            <section id='website' className={`${layout.sectionReverse}  
            ${styles.flexCenter} ${styles.boxWidth} flex-col-reverse
            ${styles.paddingY}
            `}>

                {/**contain image */}
                <div className={`${layout.sectionImgReverse} flex-1 flex ${styles.flexCenter} md:my-0 my-10  relative`}>

                    {/**image */}
                    <Image src={codeimg} alt='Image of my code.' className={` z-[5]
                    object-contain
                    w-[470px]
                    max-w-[470px]
                    lg:w-[570px]
                    lg:max-w-[570px]
                    `} />

                    {/**gradients */}
                    <div className='absolute z-[0] w-[45%] h-[55%] left-0 pink__gradient'></div>
                    <div className='absolute z-[1] w-[40%] h-[60%] rounded-full
                    left-0 bottom-0 white__gradient'></div>
                    <div className='absolute z-[0] w-[40%] h-[60%] 
                    left-0 bottom-10 blue__gradient'></div>
                </div>

                {/**container */}
                s
                <div className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-8 mt-8
                    
                  `}>
                    <div className={``}>
                        {/**heading */}
                        <h2 className={`${styles.heading2} text-center mb-6 text-[42px]`}>
                            This{" "}
                            Website
                        </h2>

                        {/**text under heading*/}
                        <p className={`${styles.paragraph} w-full ${styles.flexCenter} justify-center`}>
                            Built in React, and the following languages.
                        </p>
                    </div>
                    <SlideAnimation content={
                        <div className={`flex-wrap ${styles.flexCenter}`}>
                            {/**map languages */}
                            {images.map((img) => (
                                //contain language
                                <div key={img.id} className={`justify-start 
                            items-center hover:scale-[1.2] mt-6 sm:mb-6 mb-2 
                            ease-in duration-100
                            `}>

                                    {/**image */}
                                    <Image src={img.img} alt={`image of ${img.id}`}
                                        className={`object-contain
                            w-[80px] min-w-[80px] m-10 
                                `} />

                                    {/**name */}
                                    <h2 className={`${styles.skillText} `}>{img.name}</h2>
                                </div>
                            ))}
                        </div>} animationClass={"scroll-animation-right"} />

                </div>

            </section>

        </section>

    )
}