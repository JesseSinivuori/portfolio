import styles from "../../styles/style";
import Image from "next/image";

type Props = {
  styles?: string; //add styles
};

export default function ArrowDown(props: Props) {
  const arrowUp = "/arrow-up.svg";
  return (
    <div className={`${props.styles}`}>
      <div
        className={`${styles.flexCenter}
            h-[32px] w-[32px] rounded-full`}
      >
        <Image
          src={arrowUp}
          alt="image of arrow up"
          className={`rotate-[130deg] ${styles.flexCenter}`}
          height={24}
          width={24}
        />
      </div>
    </div>
  );
}
