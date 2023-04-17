import Image, { StaticImageData } from "next/image";

type SkillProps = {
  img: {
    id: string;
    img: string;
    name: string;
  };
  className?: string;
};

export default function Skill(props: SkillProps) {
  const { img, className } = props;

  return (
    <div
      className={`flex flex-col items-center justify-center p-0 xs:p-4 ${className}`}
    >
      <Image
        src={img.img}
        alt={`image of ${img.name}`}
        className={`m-8 h-[80px] min-h-[80px] w-[80px] min-w-[80px] object-contain
        ${["nextjs", "unity"].includes(img.id) && "invert"} `}
        width={80}
        height={80}
      />
      <span className="p-2 font-poppins text-[18px] text-textDark/75 dark:text-textLight/75">
        {img.name}
      </span>
    </div>
  );
}
