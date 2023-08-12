import { styles } from "@/app/styles/style";
import Image from "next/image";

export interface SkillProps {
  id: string;
  src: string;
  name: string;
  className?: string;
  skillTextClassName?: string;
  skillImageClassName?: string;
}

export function Skill({
  src,
  name,
  className,
  skillTextClassName,
  skillImageClassName,
}: SkillProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-0 xs:p-4 z-[1]
      ${className ?? ""} `}
    >
      <Image
        src={src}
        alt=""
        className={`m-6 hidden xss:block xss:m-8 scale-75 xss:scale-100 h-[80px] min-h-[80px] w-[80px] min-w-[80px] object-contain
        ${skillImageClassName ?? ""} `}
        width={80}
        height={80}
      />
      <p
        className={`p-2 xss:m-0 m-2 text-[14px] xss:text-[16px] font-normal dark:border-white/10 xss:bg-transparent border  dark:xss:border-transparent xss:border-transparent border-black/10 rounded-md
        ${styles.p} ${skillTextClassName ?? ""}`}
      >
        {name}
      </p>
    </div>
  );
}
