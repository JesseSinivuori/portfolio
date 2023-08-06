import styles from "@/app/styles/style";
import {
  Skill,
  EcommerceImagesSection,
  AnimationOnIntersection,
} from "../index";

export default function Ecommerce() {
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
    {
      id: "sanity",
      src: "/sanity.svg",
      name: "Sanity",
    },
    {
      id: "stripe",
      src: "/stripe.svg",
      name: "Stripe",
    },
  ];

  return (
    <AnimationOnIntersection animation={"appear-from-bottom"}>
      <section
        className={`pt-32 pb-32 flex-col ${styles.paddingY}`}
        id="jesse's_kitchen"
      >
        <div className={` ${styles.flexCenter} relative z-[10] flex-col`}>
          <h2
            className={`${styles.heading2} mb-6 text-center text-[36px] xss:text-[42px]`}
          >
            Ecommerce Website
          </h2>
          <p className={`${styles.paragraph} w-full max-w-[480px] `}>
            A full stack restaurant themed ecommerce website, with Sanity
            backend and Stripe payment. 💸
          </p>
          <AnimationOnIntersection animation={"appear-from-bottom"}>
            <div
              className={`flex-wrap ${styles.flexCenter} w-full
            xs:min-w-[480px] xs:max-w-[680px] lg:max-w-full
          `}
            >
              {skills.map((skill) => (
                <Skill skill={skill} key={skill.id} />
              ))}
            </div>
          </AnimationOnIntersection>
        </div>
        <EcommerceImagesSection />
      </section>
    </AnimationOnIntersection>
  );
}
