"use client";
import { useState } from "react";
import { ThemeButtonEffects } from "./ThemeButtonEffects";

export function ThemeButtonClient({
	className,
	darkModeCookie,
	LightModeIcon,
	DarkModeIcon,
}: {
	className?: string;
	darkModeCookie: boolean;
	LightModeIcon: React.JSX.Element;
	DarkModeIcon: React.JSX.Element;
}) {
	const [darkMode, setDarkMode] = useState(darkModeCookie);

	const toggleDarkModeCookie = () => fetch("/api/theme", { method: "PATCH" });

	const handleToggleDarkMode = async () => {
		setDarkMode(!darkMode);
		toggleDarkModeCookie();
	};

	return (
		<>
			<button
				type="button"
				aria-label={`${
					darkMode ? "switch to light mode" : "switch to dark mode"
				}`}
				onClick={() => handleToggleDarkMode()}
				className={`${className ?? ""} hover:opacity-50 opacity-75`}
			>
				{darkMode ? LightModeIcon : DarkModeIcon}
			</button>
			<ThemeButtonEffects darkMode={darkMode} />
		</>
	);
}
