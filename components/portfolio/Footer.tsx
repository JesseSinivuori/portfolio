import styles from "../../styles/style";

type Props = {
  styles?: string;
};

export default function Footer(props: Props) {
  return (
    <div
      className={` bottom-0 left-0 right-0 w-full ${styles.paddingX} ${styles.flexCenter} ${props.styles}`}
    >
      <div className={`${styles.boxWidth} max-w-[1000px] `}>
        <section className={`${styles.flexCenter} mt-6 flex-col py-6`}>
          <div className="w-full flex-row justify-between border-t-[1px] border-t-[#3F3E45] pt-6 md:flex-row">
            <p className="font-popping text-center text-[16px] font-normal leading-[27px] text-dimWhite">
              2023 Jesse S&#105;niv&#117;o&#114;&#105;. All Rights Reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
