const textOpacity = {
  high: "dark:text-white/90 text-black/90",
  medium: "dark:text-white/75 text-black/75",
  low: "dark:text-white/50 text-black/50",
};

export const styles = {
  boxWidth: "max-w-[1400px] w-full",

  h2: `${textOpacity.high} font-semibold xs:text-[48px] text-[40px] leading-[62px] ss:leading-[82px]`,
  p: `${textOpacity.medium} text-[18px] hyphens-auto`,
  link: `${textOpacity.medium} text-base hover:dark:text-white/90 hover:text-black/90 duration-100 ease-in-out cursor-pointer`,

  sectionPaddingY: "sm:py-16 py-6",
};
