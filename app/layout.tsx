import { Navbar, Toast } from "./components/index";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./styles/globals.css";
import { Metadata } from "next";
import { cookies } from "next/headers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesse's Portfolio",
  description: "Jesse's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkModeCookie: boolean = JSON.parse(
    cookies().get("darkMode")?.value ?? "true"
  );

  return (
    <html
      lang="en"
      className={`${poppins.className} ${
        darkModeCookie ? "dark bg-black" : "bg-light"
      }`}
      style={{ colorScheme: darkModeCookie ? "dark" : "light" }}
    >
      <body className="overflow-x-clip">
        <div className="m-auto px-4 pt-24 xss:px-8 flex w-full flex-col overflow-hidden">
          <header>
            <Toast />
            <Navbar />
          </header>
          <main className="max-w-[1400px] m-auto w-full flex flex-col">
            {children}
          </main>
        </div>
      </body>
      <Analytics debug={false} />
    </html>
  );
}
