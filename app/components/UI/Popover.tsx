"use client";
import { Popover as HUIPopover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, type MouseEvent } from "react";
import { styles } from "@/app/styles/style";

interface LinkProps {
	name: string;
	description: string;
	href: string;
	icon: React.JSX.Element;
	featured?: boolean;
}

export function Popover({ links, id }: { links: LinkProps[]; id: string }) {
	const handleLinkClick = (
		event: MouseEvent<HTMLAnchorElement>,
		href: string,
		close: () => void,
	) => {
		close();
		if (typeof window === "undefined") return;
		if (window.location.pathname !== "/") return;
		if (!href.startsWith("/#") && !href.startsWith("#")) return;

		const hash = href.includes("#") ? href.split("#")[1] : "";
		const targetId = decodeURIComponent(hash || "");
		if (!targetId) return;

		const target = document.getElementById(targetId);
		if (!target) return;

		event.preventDefault();
		const basePath = `${window.location.pathname}${window.location.search}`;
		window.history.replaceState(null, "", basePath);

		window.requestAnimationFrame(() => {
			window.history.replaceState(
				null,
				"",
				`${basePath}#${encodeURIComponent(targetId)}`,
			);
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		});
	};

	return (
		<div className="flex w-full max-w-sm" id={id}>
			<HUIPopover className="w-full">
				{({ open, close }) => (
					<>
						<HUIPopover.Button
							className={`
                ${open ? "" : "text-opacity-75"}
                group inline-flex w-full items-center rounded-md bg-transparent px-2 py-2 text-base font-medium dark:text-white/75 text-black/75 focus-visible:ring outline-none ring-transparent hover:ring-1 hover:ring-black/90 dark:ring-white/90 focus:ring-black/90 dark:hover:ring-white/90 hover:ring-opacity-75 dark:hover:ring-opacity-75`}
						>
							<span className="flex w-full">Projects</span>
							<span
								className={`${open ? "" : " opacity-75"}
                  ml-2 flex h-5 w-full flex-1 dark:text-white/75 text-black/75 transition duration-150 ease-in-out group-hover:text-opacity-90 `}
								aria-hidden="true"
							>
								{ChevronDownIcon}
							</span>
						</HUIPopover.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
						>
							<HUIPopover.Panel className="relative left-1/2 z-10 mt-8 flex w-full max-w-sm -translate-x-1/2 transform px-4 xs:absolute sm:px-0 lg:max-w-3xl">
								<div className="overflow-hidden rounded-lg shadow-lg ring-1 dark:ring-white/10 ring-black/10 ring-opacity-5 ">
									<div className="relative grid gap-8 dark:bg-nav bg-navLight p-7 lg:grid-cols-2">
										{links.map((item) => (
											<Link
												onClick={(event) =>
													handleLinkClick(event, item.href, close)
												}
												key={item.name}
												href={item.href}
												className={`-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-opacity-50 focus-visible:hover:ring-black/90 dark:focus-visible:hover:ring-white/90 ${
													item.featured
														? "border border-blue-700/40 dark:border-cyan-300/45 dark:hover:bg-zinc-500/10 hover:bg-gray-500/10"
														: "dark:hover:bg-zinc-500/10 hover:bg-gray-500/10"
												}`}
											>
												<div
													className="flex h-10 w-10 shrink-0 items-center justify-center text-black/90 dark:text-white/90 sm:h-12 sm:w-12"
													aria-hidden="true"
												>
													{item.icon}
												</div>
												<div className="ml-4">
													<p className="flex items-center gap-2 font-semibold dark:text-white/90 text-black/90">
														{item.name}
														{item.featured ? (
															<span className="rounded-full bg-blue-700 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white dark:bg-cyan-500/20 dark:text-cyan-300">
																New
															</span>
														) : null}
													</p>
													<p className={`text-sm ${styles.p}`}>
														{item.description}
													</p>
												</div>
											</Link>
										))}
									</div>
								</div>
							</HUIPopover.Panel>
						</Transition>
					</>
				)}
			</HUIPopover>
		</div>
	);
}

const ChevronDownIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="h-6 w-6"
		aria-hidden="true"
	>
		<path
			fillRule="evenodd"
			d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
			clipRule="evenodd"
		/>
	</svg>
);
