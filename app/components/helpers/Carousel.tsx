"use client";

import { useRef, useState } from "react";

type CarouselObjectProps = {
  content: React.JSX.Element;
  label: string;
};

export function Carousel({
  carouselObjects,
  className,
  iconClassName,
}: {
  carouselObjects: CarouselObjectProps[];
  className?: string;
  iconClassName?: string;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex =
    (currentIndex - 1 + carouselObjects.length) % carouselObjects.length;
  const nextIndex = (currentIndex + 1) % carouselObjects.length;

  const handleClickLeft = () => {
    setCurrentIndex(prevIndex);
    imageRef.current?.scrollIntoView({ block: "center" });
  };

  const handleClickRight = () => {
    setCurrentIndex(nextIndex);
    imageRef.current?.scrollIntoView({ block: "center" });
  };

  return (
    <div
      className={`${
        className || ""
      } flex flex-col justify-center items-center gap-8 py-4`}
    >
      <div className="flex" ref={imageRef}>
        {carouselObjects[currentIndex].content}
      </div>
      <div className={`flex gap-16 ${iconClassName || ""}`}>
        {carouselObjects.length > 2 && (
          <button
            type="button"
            aria-hidden
            onClick={handleClickLeft}
            className="p-4 hover:opacity-75"
          >
            <span className="flex gap-4">
              <ArrowLeftIcon className={iconClassName || ""} />
              {carouselObjects[prevIndex].label}
            </span>
          </button>
        )}
        <button
          type="button"
          aria-hidden
          onClick={handleClickRight}
          className="p-4 hover:opacity-75"
        >
          <span className="flex gap-4">
            {carouselObjects[nextIndex].label}
            <ArrowLeftIcon className={`rotate-180 ${iconClassName || ""}`} />
          </span>
        </button>
      </div>
    </div>
  );
}

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`${
      className || ""
    } w-6 h-6 dark:text-zinc-50/90 text-zinc-950/90`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);
