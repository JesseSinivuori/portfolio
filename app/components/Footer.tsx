import { styles } from "@/app/styles/style";

type FooterProps = {
	className?: string;
};

export function Footer(props: FooterProps) {
	return (
		<footer
			className={`bottom-0 w-full flex justify-center ${props.className ?? ""}`}
		>
			<div className={`${styles.boxWidth} px-8`}>
				<div
					className={`w-full justify-center py-6 mt-6 flex-col flex border-t dark:border-t-white/10 border-t-black/10 pt-6`}
				>
					<small className="text-center text-[16px] font-normal leading-[27px] dark:text-white/50 text-black/50">
						2023 Jesse S&#105;niv&#117;o&#114;&#105;. All Rights Reserved.
					</small>
				</div>
			</div>
		</footer>
	);
}
