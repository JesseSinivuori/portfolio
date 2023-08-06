import { Navbar, Toast } from "./components/index";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./styles/globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "block",
});

export const metadata: Metadata = {
  title: "Jesse's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`bg-primary ${poppins.className}`}>
      <body>
        <div className="m-auto px-4 pt-24 xss:px-8 flex w-full flex-col overflow-hidden overflow-y-auto">
          <Toast />
          <Navbar />
          <main className="max-w-[1400px] m-auto w-full flex flex-col">
            {children}
          </main>
        </div>
      </body>
      <Analytics />
    </html>
  );
}
