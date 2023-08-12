"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function WelcomeMessage() {
  useEffect(() => {
    const welcomeMessageShown = localStorage.getItem("welcomeMessageShown");
    if (!welcomeMessageShown) {
      toast.success("Welcome! You can find my skills + projects below.", {
        icon: "👋",
        duration: 6000000,
        position: "top-center",
      });
    }
    localStorage.setItem("welcomeMessageShown", "true");
  }, []);

  return null;
}
