import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Navbar } from "./components/navbar/Navbar";
import { Toast } from "./components/Toast";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "800"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jesse's Portfolio",
	description: "Jesse's Portfolio",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const darkModeCookie: boolean = JSON.parse(
		(await cookies()).get("darkMode")?.value ?? "true",
	);

	return (
		<html
			lang="en"
			className={`${poppins.className} ${
				darkModeCookie ? "dark bg-black" : "bg-light"
			}`}
			style={{ colorScheme: darkModeCookie ? "dark" : "light" }}
		>
			<body className="relative overflow-x-clip">
				<div className="pointer-events-none fixed inset-0 z-[1] bg-[url('/noise.webp')] [background-size:64px_64px] bg-repeat opacity-[0.22] mix-blend-overlay" />
				<div className="relative z-[2] m-auto px-4 pt-24 xss:px-8 flex w-full flex-col overflow-hidden">
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
