import styles from "@/app/styles/style";
import Image from "next/image";

type SkillProps = {
  skill: {
    id: string;
    src: string;
    name: string;
  };
  className?: string;
};

export default function Skill(props: SkillProps) {
  const { skill, className } = props;
  const { id, src, name } = skill;

  return (
    <div
      className={`flex flex-col items-center justify-center p-0 xs:p-4 ${className}`}
    >
      <Image
        src={src}
        alt=""
        className={`m-4 xss:m-8 scale-75 xss:scale-100 h-[80px] min-h-[80px] w-[80px] min-w-[80px] object-contain
        ${["nextjs", "unity"].includes(id) && "invert"} `}
        width={80}
        height={80}
      />
      <span className={`p-2 text-[14px] xss:text-[16px] ${styles.paragraph}`}>
        {name}
      </span>
    </div>
  );
}
