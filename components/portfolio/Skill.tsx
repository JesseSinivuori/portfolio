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
        alt={`image of ${name}`}
        className={`m-8 h-[80px] min-h-[80px] w-[80px] min-w-[80px] object-contain
        ${["nextjs", "unity"].includes(id) && "invert"} `}
        width={80}
        height={80}
      />
      <span className="p-2 font-poppins text-[18px] text-textDark/75 dark:text-textLight/75">
        {name}
      </span>
    </div>
  );
}
