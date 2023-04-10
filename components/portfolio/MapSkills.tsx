import { Key, ReactNode } from "react";
import styles from "../../styles/style";
import Image from "next/image";

type Props = {
  content: Array<{
    id: Key | null | undefined;
    img: any;
    name: ReactNode;
  }>;
};

export default function MapSkills(props: Props) {
  return (
    <div className={`${styles.flexCenter} w-full flex-wrap `}>
      {props.content?.map((item, _i: number) => (
        //contain skill
        <div key={item.id} className={`flex `}>
          <div
            className="duration-100 
                    ease-in
                    "
          >
            {/**image */}
            <Image
              src={item.img}
              alt={`image of ${item.id}`}
              className={`m-8 
                            w-[80px] min-w-[80px] object-contain 
                            `}
            />

            {/**name */}
            <p className={`${styles.paragraph} ${styles.skillText}`}>
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
