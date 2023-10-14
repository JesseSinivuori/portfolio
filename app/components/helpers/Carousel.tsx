"use client";

import { useRef, useState } from "react";

export function Carousel({
  images,
  className,
}: {
  images: JSX.Element[];
  className?: string;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    imageRef.current?.scrollIntoView({ block: "center" });
  };

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    imageRef.current?.scrollIntoView({ block: "center" });
  };

  return (
    <div
      className={`${
        className || ""
      } flex flex-col justify-center items-center gap-8 py-4`}
    >
      <div className="flex" ref={imageRef}>
        {images[currentIndex]}
      </div>
      <div className="flex gap-16 hover:opacity-75">
        <button type="button" onClick={handleClickLeft} className="p-4">
          <ArrowLeftIcon />
        </button>
        <button type="button" onClick={handleClickRight} className="p-4">
          <ArrowLeftIcon className="rotate-180" />
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
    className={`${className || ""} w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);
