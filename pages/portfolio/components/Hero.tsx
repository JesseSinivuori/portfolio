import styles from "../../../styles/style";
import { imgofme } from "../../../public/assets/portfolio"
import ContactButton from './ContactButton';
import Image from 'next/image'
import { ReactNode, useEffect, useRef, useState } from "react";

//return hero section
export default function Hero() {

    const elementRef = useRef<any>(null);

    useEffect(() => {
        // create an intersection observer to detect when the element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // check if the element is in view
                if (entry.isIntersecting) {
                    // add the "in-view" class to the element to trigger the animation
                    entry.target.classList.add('in-view');
                } else {
                    // remove the "in-view" class to stop the animation
                    entry.target.classList.remove('in-view');
                }
            });
        });
        // get the child elements of the container
        const elements = elementRef.current.children;

        // start observing the child elements
        for (const element of elements) {
            observer.observe(element);
        }
        console.log(elementRef.current.children);
    }, [elementRef]);

    return (
        //section
        <section id='home' className={`flex-col md:flex-row ${styles.paddingY} ${styles.flexCenter} `}>
            {/**container */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                {/**contain heading and button*/}
                <div className='flex flex-row justify-between items-center w-full'>

                    {/**heading */}
                    <h1 ref={elementRef} className='flex-1 font-poppins font-light ss:text-[72px] 
                    text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                        .&#106;ess&#101; <br className='sm:block hidden' /> {" "}
                        <div className={`scroll-animation-left text-tansition`} >
                            <span className={`text-gradient`}>
                                s&#105;niv&#117;o&#114;&#105;</span>
                        </div>
                        {" "}
                    </h1>

                    {/**button */}
                    <div className='xs:flex hidden md:mr-4 mr-0'>
                        <ContactButton />
                    </div>
                </div>

                {/**text under heading */}
                <h1 className='font-poppins font-semibold ss:text-[68px]
                    text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
                    Software Engineer
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    I build websites, apps and games.
                </p>
            </div>

            {/**contain image and gradient */}
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10  relative `}>

                {/**image */}
                <Image src={imgofme} alt='Image of me.' className='w-[100%] h-[100%] 
                object-contain z-[5] max-h-[650px]'/>

                {/**gradients */}
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full
                bottom-40 white__gradient'></div>
                <div className='absolute z-[0] w-[50%] h-[50%] right-20
                bottom-20 blue__gradient '></div>
            </div>

        </section>
    )
}
