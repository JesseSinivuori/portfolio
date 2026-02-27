"use client";

import { useEffect, useRef, useState } from "react";

type CarouselObjectProps = {
	content: React.ReactNode;
	label: string;
};

export function Carousel({
	carouselObjects,
	className,
	iconClassName,
	loadingFallback,
}: {
	carouselObjects: CarouselObjectProps[];
	className?: string;
	iconClassName?: string;
	loadingFallback?: React.ReactNode;
}) {
	const imageRef = useRef<HTMLDivElement>(null);
	const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [slideReady, setSlideReady] = useState<boolean[]>(() =>
		carouselObjects.map(() => false),
	);
	const fallbackNode = loadingFallback || <CarouselLoadingFallback />;

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

	useEffect(() => {
		setSlideReady(carouselObjects.map(() => false));
	}, [carouselObjects]);

	useEffect(() => {
		const slide = slideRefs.current[currentIndex];
		if (!slide || slideReady[currentIndex]) return;

		const images = Array.from(slide.querySelectorAll("img"));
		if (images.length === 0) {
			setSlideReady((prev) =>
				prev.map((ready, index) => (index === currentIndex ? true : ready)),
			);
			return;
		}

		let pendingImages = 0;
		const listeners: Array<{
			image: HTMLImageElement;
			onResolve: () => void;
		}> = [];

		const handleResolvedImage = () => {
			pendingImages -= 1;
			if (pendingImages <= 0) {
				setSlideReady((prev) =>
					prev.map((ready, index) => (index === currentIndex ? true : ready)),
				);
			}
		};

		images.forEach((image) => {
			if (image.complete) {
				return;
			}

			pendingImages += 1;
			image.addEventListener("load", handleResolvedImage, { once: true });
			image.addEventListener("error", handleResolvedImage, { once: true });
			listeners.push({ image, onResolve: handleResolvedImage });
		});

		if (pendingImages === 0) {
			setSlideReady((prev) =>
				prev.map((ready, index) => (index === currentIndex ? true : ready)),
			);
		}

		return () => {
			listeners.forEach(({ image, onResolve }) => {
				image.removeEventListener("load", onResolve);
				image.removeEventListener("error", onResolve);
			});
		};
	}, [currentIndex, slideReady]);

	const isSlideLoading = !slideReady[currentIndex];

	return (
		<div
			className={`${
				className || ""
			} flex flex-col justify-center items-center gap-8 py-4`}
		>
			<div className="flex relative w-full justify-center" ref={imageRef}>
				{isSlideLoading && (
					<div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
						{fallbackNode}
					</div>
				)}
				{carouselObjects.map((carouselObject, index) => {
					const isActive = index === currentIndex;
					return (
						<div
							key={carouselObject.label}
							ref={(element) => {
								slideRefs.current[index] = element;
							}}
							className={`transition-opacity duration-300 ${
								isActive
									? `relative ${isSlideLoading ? "opacity-0" : "opacity-100"}`
									: "absolute inset-0 opacity-0 pointer-events-none"
							}`}
							aria-hidden={!isActive}
						>
							{carouselObject.content}
						</div>
					);
				})}
			</div>
			<div className={`flex gap-16 ${iconClassName || ""}`}>
				{carouselObjects.length > 2 && (
					<button
						type="button"
						aria-label={`Show previous slide: ${carouselObjects[prevIndex].label}`}
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
					aria-label={`Show next slide: ${carouselObjects[nextIndex].label}`}
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

const CarouselLoadingFallback = () => (
	<div
		aria-live="polite"
		aria-busy="true"
		className="w-full max-w-[1050px] min-h-[360px] rounded-xl border border-black/10 dark:border-white/10 bg-zinc-200/60 dark:bg-zinc-800/60 animate-pulse"
	/>
);

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
		aria-hidden="true"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
		/>
	</svg>
);
