import styles from "@/app/styles/style";
import Image from "next/image";
import { Skill, AnimationOnIntersection } from "../index";

export default function Website() {
  const skills = [
    {
      id: "react",
      src: "/react.svg",
      name: "React",
    },
    {
      id: "nextjs",
      src: "/nextjs.svg",
      name: "Next.js",
    },
    {
      id: "typescript",
      src: "/typescript.svg",
      name: "TypeScript",
    },
    {
      id: "tailwindcss",
      src: "/tailwindcss.svg",
      name: "Tailwind CSS",
    },
  ];

  return (
    <AnimationOnIntersection animation={"appear-from-bottom"}>
      <section className="pb-24">
        <section
          id="website"
          className={`
            ${styles.flexCenter} flex-col-reverse md:flex-row
            ${styles.paddingY} pt-24 justify-evenly
            `}
        >
          <AnimationOnIntersection animation={"appear-from-bottom"}>
            <div
              className={`flex ${styles.flexCenter} relative
              left-[120px] my-10 xss:left-[80px] xs:left-0 md:my-0`}
            >
              <Image
                src={"/codeimg.webp"}
                alt=""
                className={` z-[5]
                    max-h-[456px]
                    w-[470px]
                    max-w-[470px]
                    object-contain
                    lg:w-[570px]
                    lg:max-w-[570px]
                    `}
                width={570}
                height={570}
                quality={100}
              />

              <div className="absolute -bottom-20 -left-20 z-[0] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[100px]"></div>
            </div>
          </AnimationOnIntersection>

          <div
            className={`${styles.flexCenter} mb-8 mt-8 flex-col flex-wrap sm:mb-20`}
          >
            <div className={``}>
              <h2 className={`${styles.heading2} mb-6 text-center text-[42px]`}>
                This Website
              </h2>

              <p
                className={`${styles.paragraph} w-full ${styles.flexCenter} justify-center`}
              >
                {`Built with ❤️, reusable components `}
                <br />
                {`+ my gradient generator tool.`}
              </p>
            </div>
            <AnimationOnIntersection animation={"slide-from-right"}>
              <div className={`flex-wrap ${styles.flexCenter} max-w-sm`}>
                {skills.map((skill) => (
                  <Skill skill={skill} key={skill.id} />
                ))}
              </div>
            </AnimationOnIntersection>
          </div>
        </section>
      </section>
    </AnimationOnIntersection>
  );
}
