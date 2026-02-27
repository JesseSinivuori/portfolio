"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { ChatProjectId } from "@/app/lib/chat-projects";
import {
	buildChatPromptHref,
	buildProjectTellMeMorePrompt,
} from "@/app/lib/chat-prompts";
import { useTokenizedHref } from "./helpers/useTokenizedHref";

type TellMeMoreLinkProps = {
	projectId: ChatProjectId;
	className: string;
	children: ReactNode;
};

export function TellMeMoreLink({
	projectId,
	className,
	children,
}: TellMeMoreLinkProps) {
	const href = useTokenizedHref(
		buildChatPromptHref(buildProjectTellMeMorePrompt(projectId)),
	);

	return (
		<Link
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			className={className}
		>
			{children}
		</Link>
	);
}
