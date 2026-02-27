import type { ChatProjectId } from "./chat-projects";

export function buildProjectTellMeMorePrompt(projectId: ChatProjectId) {
	return `Tell me more about project ${projectId}. Focus on architecture, technical decisions, and impact.`;
}

export function buildChatPromptHref(prompt: string) {
	return `/?prompt=${encodeURIComponent(prompt)}#chat`;
}
