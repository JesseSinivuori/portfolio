"use client";
import { Toaster } from "react-hot-toast";

export default function Toast() {
  return (
    <Toaster
      containerClassName={`mt-16 lg:mt-0 z-[9999]`}
      toastOptions={{
        style: {
          padding: "16px",
          color: "white",
          backgroundColor: "var(--color-nav)",
        },
      }}
    />
  );
}
