import { arrowUp } from "../../public/assets/portfolio";
import styles from "../../styles/style";
import Image from "next/image";

type Props = {
  styles?: string; //add styles
};

export default function ArrowDown(props: Props) {
  return (
    <div className={`${props.styles}`}>
      {/**contain arrow image, make a circle around it + bounce animation */}
      <div
        className={`${styles.flexCenter}
            h-[32px] w-[32px] rounded-full`}
      >
        {/**arrow image */}
        <Image
          src={arrowUp}
          alt="image of arrow up"
          className={`rotate-[130deg] ${styles.flexCenter}`}
        />
      </div>
    </div>
  );
}
