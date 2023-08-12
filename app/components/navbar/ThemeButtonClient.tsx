"use client";
import { useState } from "react";
import { ThemeButtonEffects } from "./ThemeButtonEffects";

const toggleDarkModeCookie = () => fetch("/api/theme", { method: "PATCH" });

export function ThemeButtonClient({
  className,
  darkModeCookie,
  LightModeIcon,
  DarkModeIcon,
}: {
  className?: string;
  darkModeCookie: boolean;
  LightModeIcon: JSX.Element;
  DarkModeIcon: JSX.Element;
}) {
  const [darkMode, setDarkMode] = useState(darkModeCookie);

  const handleToggleDarkMode = async () => {
    setDarkMode(!darkMode);
    toggleDarkModeCookie();
  };

  return (
    <>
      <button
        id="theme-button"
        onClick={() => handleToggleDarkMode()}
        className={`${className ?? ""} hover:opacity-50 opacity-75`}
      >
        {darkMode ? LightModeIcon : DarkModeIcon}
      </button>
      <ThemeButtonEffects darkMode={darkMode} />
    </>
  );
}
