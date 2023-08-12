export const navLinkStyle = (
  pathname: string,
  linkPathname: string
): string => {
  return pathname === linkPathname
    ? "dark:text-white/50 text-black/50"
    : "cursor-pointer select-none text-[16px] dark:text-white/75 dark:hover:text-white hover:text-black text-black/75";
};
