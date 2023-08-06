import styles from "@/app/styles/style";

type FooterProps = {
  className?: string;
};

export default function Footer(props: FooterProps) {
  return (
    <footer
      className={`bottom-0 w-full  ${styles.flexCenter} ${
        props.className ?? ""
      }`}
    >
      <div className={`${styles.boxWidth} px-8`}>
        <div
          className={`w-full justify-center py-6 mt-6 flex-col flex border-t border-t-white/10 pt-6`}
        >
          <small className="text-center text-[16px] font-normal leading-[27px] text-white/50">
            2023 Jesse S&#105;niv&#117;o&#114;&#105;. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
