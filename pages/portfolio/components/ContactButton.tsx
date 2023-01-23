import styles from "../../../styles/style";
import { arrowUp } from "../../../public/assets/portfolio/index"
import Link from "next/link";
import Image from 'next/image'

//return the circle contact button
export default function ContactButton() {
    return (
        //make the button a link
        <Link href={'/portfolio/contact'}>

            {/**return a circle shaped container with 2px padding */}
            <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full 
         p-[2px] cursor-pointer bg-transparent
         bg-gradient-to-r from-[#70ffff] to-[#7088ff]
         hover:from-[#ffdf87] hover:to-[#ff4a4a]
         text-[#70ffff] hover:text-[#ffa759] 
         ease-in duration-300 hover:animate-pulse
        `}>

                {/**fill the circle with background color, leaving the 2px padding as borders */}
                <div className={`${styles.flexCenter} bg-primary flex-col w-[100%] h-[100%]
            rounded-full
            `}>

                    {/**container for content in the circle */}
                    <div className={`${styles.flexCenter} flex-1
                `}>

                        {/**contact text */}
                        <p className='font-poppins font-normal text-[18px] leading-[23px] 
                        mr-1 ease-in duration-300'>
                            Contact
                        </p>
                        
                        {/**arrow image */}
                        <Image src={arrowUp} className='w-[23px] h-[23px] object-contain'
                            alt='arrow' />
                    </div>

                </div>
            </div>
        </Link>
    )
}
