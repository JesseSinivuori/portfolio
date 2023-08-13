"use client";
import { Toaster } from "react-hot-toast";

export function Toast() {
  return (
    <Toaster
      containerClassName={`mt-16 z-[9999]`}
      toastOptions={{
        className:
          "dark:!text-white/90 !text-black/90 dark:!bg-nav !bg-navLight !p-4 !max-w-full",
      }}
    />
  );
}
