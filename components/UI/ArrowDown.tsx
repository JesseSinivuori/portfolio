import styles from "../../styles/style";
import Image from "next/image";

type Props = {
  styles?: string;
};

export default function ArrowDown(props: Props) {
  return (
    <div className={`${props.styles}`}>
      <div className={`${styles.flexCenter}h-[32px] w-[32px] rounded-full`}>
        <Image
          src={"/arrow-up.svg"}
          alt="image of arrow up"
          className={`h-[24px] w-[24px] rotate-[130deg] ${styles.flexCenter}`}
          height={32}
          width={32}
          priority
        />
      </div>
    </div>
  );
}
