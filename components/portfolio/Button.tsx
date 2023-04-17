import Link from "next/link";
import styles from "../../styles/style";

type Props = {
  styles: string; //add styles to button
  to: string; //tell the button which page to go to like: "/contact"
};

//return a button
export default function Button(props: Props) {
  return (
    <div className={`${styles.flexCenter}`}>
      <Link href={props.to}>
        <button
          type="button"
          className={`rounded-md border-[1px] border-[#ff0000]
                py-2 px-4 font-poppins text-[18px] 
                font-medium text-[#ffffff] outline-none
                duration-100 ease-in 
                hover:border-[#ff0000] hover:text-[#ff0000]
                 ${props.styles}`}
        >
          Contact
        </button>
      </Link>
    </div>
  );
}
