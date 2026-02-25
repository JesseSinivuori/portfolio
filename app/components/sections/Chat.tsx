"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimationOnIntersection } from "../helpers";

type ChatMessage = {
	id: string;
	role: "assistant" | "user";
	text: string;
};

const starterQuestions = [
	"What project should I review first?",
	"What impact did your work have?",
	"How do you make architecture tradeoffs?",
];

const introText =
	"Hi, I am Jesse. I build fast, production-ready full stack products with a strong focus on clean UX, reliability, and shipping real outcomes. Ask me about project impact, architecture decisions, or role fit.";

export function Chat() {
	const [streamedIntro, setStreamedIntro] = useState("");
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<ChatMessage[]>([]);

	useEffect(() => {
		let i = 0;
		const timer = setInterval(() => {
			i += 1;
			setStreamedIntro(introText.slice(0, i));
			if (i >= introText.length) clearInterval(timer);
		}, 14);

		return () => clearInterval(timer);
	}, []);

	const canSend = useMemo(() => input.trim().length > 0, [input]);

	const sendMessage = () => {
		const trimmed = input.trim();
		if (!trimmed) return;

		setMessages((prev) => [
			...prev,
			{ id: `u-${Date.now()}`, role: "user", text: trimmed },
		]);
		setInput("");
	};

	return (
		<section className="relative mt-16 w-full">
			<ChatGradient />
			<div className="mx-auto w-full max-w-4xl rounded-2xl bg-white/45 p-4 shadow-sm backdrop-blur-xl dark:bg-black/25">
				<div className="h-[380px] overflow-y-auto rounded-xl p-4 backdrop-blur-md ">
					<ChatBubble
						role="assistant"
						text={streamedIntro || " "}
						streaming={streamedIntro.length < introText.length}
					/>
					{messages.map((message) => (
						<ChatBubble
							key={message.id}
							role={message.role}
							text={message.text}
						/>
					))}
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{starterQuestions.map((question) => (
						<button
							key={question}
							type="button"
							onClick={() => setInput(question)}
							className="rounded-full border border-black/15 px-3 py-2 text-sm text-black transition hover:border-black/40 dark:border-white/20 dark:text-white dark:hover:border-white/50"
						>
							{question}
						</button>
					))}
				</div>

				<div className="mt-4 flex flex-col gap-2">
					<div className="relative flex">
						<textarea
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Ask about projects, decisions, impact, or role fit..."
							rows={3}
							className="w-full resize-none rounded-xl border border-black/15 bg-white/10 p-3 pb-12 pr-14 text-sm text-black backdrop-blur-md outline-none transition [scrollbar-gutter:stable] focus:border-cyan-500 dark:border-white/20 dark:bg-white/[0.03] dark:text-white"
						/>
						<button
							type="button"
							onClick={sendMessage}
							disabled={!canSend}
							aria-label="Send message"
							className="absolute bottom-3 right-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-white transition enabled:hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-4 w-4"
								aria-hidden="true"
							>
								<path d="M12 19V5" />
								<path d="m5 12 7-7 7 7" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

const ChatGradient = () => (
	<AnimationOnIntersection
		customAnimation={{
			fromClass: "opacity-50",
			toClass: "opacity-100",
		}}
		className="pointer-events-none absolute inset-0 -z-10 duration-[3s]"
	>
		<div className="noise-filter-radial absolute -right-60 -top-40 h-[840px] w-[1840px] rotate-[5deg] overflow-hidden bg-gradient-to-bl from-cyan-400/80 via-cyan-500/45 to-transparent blur-[18px] z-[-2]" />
		<div className="noise-filter-radial absolute -right-40 top-20 h-[840px] w-[1840px] rotate-[10deg] overflow-hidden bg-gradient-to-bl from-blue-500/70 via-blue-500/35 to-transparent dark:from-emerald-400/70 dark:via-emerald-500/30 blur-[18px] z-[-1]" />
		<div className="noise-filter-radial absolute -right-20 top-0 h-[840px] w-[1840px] rotate-[25deg] overflow-hidden bg-gradient-to-bl from-fuchsia-500/70 via-fuchsia-500/30 to-transparent dark:from-blue-700/70 dark:via-blue-700/30 blur-[20px] z-[-3]" />
	</AnimationOnIntersection>
);

function ChatBubble({
	role,
	text,
	streaming = false,
}: {
	role: "assistant" | "user";
	text: string;
	streaming?: boolean;
}) {
	const assistant = role === "assistant";

	return (
		<div className={`mb-3 flex ${assistant ? "justify-start" : "justify-end"}`}>
			<div
				className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed md:max-w-[80%] ${
					assistant
						? "border border-black/10 bg-white text-black dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
						: "bg-cyan-600 text-white"
				}`}
			>
				<span>{text}</span>
				{streaming ? (
					<span className="ml-1 inline-block h-4 w-2 animate-pulse bg-cyan-500 align-middle" />
				) : null}
			</div>
		</div>
	);
}
