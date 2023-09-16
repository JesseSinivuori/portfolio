import { styles } from "@/app/styles/style";
import Image from "next/image";
import Link from "next/link";

export interface SkillProps {
  id: string;
  src: string;
  name: string;
  className?: string;
  logoTextClassName?: string;
  logoClassName?: string;
  description?: string;
  descriptionPosition?: "left" | "right";
  link: string;
  cardClassName?: string;
  descriptionClassName?: string;
  cardLogoClassName?: string;
  cardLogoTextClassName?: string;
}

export function Skill({
  src,
  name,
  className,
  logoTextClassName,
  logoClassName,
  link,
  description,
  descriptionClassName,
  cardClassName,
  cardLogoClassName,
  cardLogoTextClassName,
}: SkillProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-0 xs:p-4 relative overflow-hidden hover:overflow-visible
      ${className ?? ""} `}
    >
      <div
        className={`hidden xs:flex absolute flex-col -top-[1px] -left-[1px] z-[10]`}
      >
        <div
          className={`${
            cardClassName ?? ""
          } text-black/75 dark:text-white/75 w-full xl:w-[400px] xl:flex-row h-full flex flex-col opacity-0 hover:opacity-100 xl:mb-0 dark:bg-nav bg-navLight border dark:border-white border:black border-opacity-10 rounded-md p-4`}
        >
          <div className="flex-col flex justify-center items-center ">
            <Logo src={src} className={cardLogoClassName ?? ""} />
            <Link href={link ?? ""} rel="noopener" target="_blank">
              <LogoName
                name={name}
                className={`${
                  cardLogoTextClassName ?? ""
                } dark:text-blue-500 text-blue-700`}
              />
            </Link>
          </div>
          <div className={`mt-4 hyphens-auto ${descriptionClassName ?? ""}`}>
            {description}
          </div>
        </div>
      </div>
      <div className="relative z-[0] flex flex-col justify-center items-center">
        <Logo src={src} className={logoClassName} />
        <LogoName name={name} className={logoTextClassName} />
      </div>
    </div>
  );
}

const Logo = ({ src, className }: { src: string; className?: string }) => (
  <Image
    src={src}
    alt=""
    className={`z-[0] relative m-6 hidden xs:block xs:m-8 scale-75 xs:scale-100 h-[80px] min-h-[80px] w-[80px] min-w-[80px] object-contain
        ${className ?? ""} `}
    width={80}
    height={80}
  />
);

const LogoName = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => (
  <div
    className={`z-[0] relative p-2 xs:m-0 m-2 text-[14px] xs:text-[16px] dark:border-white/10 xs:bg-transparent border dark:xs:border-transparent xs:border-transparent border-black/10 rounded-md
        ${styles.p} ${className ?? ""}`}
  >
    {name}
  </div>
);
