import confetti from "canvas-confetti";

const count = 200;
const defaults = {
	origin: { y: 0.7 },
};

function fire(particleRatio: number, opts: unknown) {
	confetti(
		Object.assign({}, defaults, opts, {
			particleCount: Math.floor(count * particleRatio),
		}),
	);
}

export const launchFireWorks = () => {
	return fire(0.35, {
		spread: 300,
		decay: 0.91,
		scalar: 0.8,
	});
};
