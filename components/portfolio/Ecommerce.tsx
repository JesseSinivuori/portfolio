import SlideAnimation from "./SlideAnimation";
import styles, { layout } from "../../styles/style";
import EcommerceImagesSection from "./EcommerceImagesSection";
import Skill from "./Skill";

type EcommerceProps = {};

export default function Ecommerce(props: EcommerceProps) {
  const images = [
    {
      id: "react",
      img: "/react.svg",
      name: "React",
    },
    {
      id: "nextjs",
      img: "/nextjs.svg",
      name: "Next.js",
    },
    {
      id: "typescript",
      img: "/typescript.svg",
      name: "TypeScript",
    },
    {
      id: "tailwindcss",
      img: "/tailwindcss.svg",
      name: "Tailwind CSS",
    },
    {
      id: "sanity",
      img: "/sanity.svg",
      name: "Sanity",
    },
    {
      id: "stripe",
      img: "/stripe.svg",
      name: "Stripe",
    },
  ];

  return (
    <SlideAnimation animation={"slide-animation-top"}>
      <section className={` flex-col ${styles.paddingY}`}>
        <div
          className={`${layout.sectionInfo} ${styles.flexCenter} relative z-[10] flex-col`}
        >
          <h2
            className={`${styles.heading2} mb-6 text-center text-[36px] xss:text-[42px]`}
          >
            Ecommerce Website
          </h2>
          <p
            className={`${styles.paragraph} ${styles.flexStart} w-full max-w-[480px] `}
          >
            A full stack restaurant themed ecommerce website, with Sanity
            backend and Stripe payment. 💸
          </p>
          <SlideAnimation animation={"slide-animation-top"}>
            <div
              className={`flex-wrap ${styles.flexCenter} w-full
            xs:min-w-[480px] xs:max-w-[680px] lg:max-w-full
          `}
            >
              {images.map((img) => (
                <Skill img={img} key={img.id} />
              ))}
            </div>
          </SlideAnimation>
        </div>
        <EcommerceImagesSection />
      </section>
    </SlideAnimation>
  );
}
