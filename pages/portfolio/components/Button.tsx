import Link from "next/link";
import styles from "../../../styles/style";

type Props = {
    styles: string; //add styles to button
    to: string; //tell the button which page to go to like: "/contact"
}

//return a button
export default function Button(props: Props) {
    return (
        //container
        <div className={`${styles.flexCenter}`}>

            {/**make the button a link */}
            <Link href={props.to}>

                {/** button bg-gradient-to-r from-[#70ffff] to-[#7088ff] 
                hover:from-[#ffdf87] hover:to-[#ff4a4a] */}
                <button type='button' className={`py-4 px-6 font-poppins 
                font-medium text-[18px] text-[#ffffff] outline-none 
                rounded-md border-[#70ffff] border-[1px]
                hover:border-[#ff0000] hover:text-[#ff0000] 
                ease-in duration-300
                 ${props.styles}
                `
                }>Contact</button>
            </Link>
        </div>

    )
}
