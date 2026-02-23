"use client";
import { useState } from "react";
import { OnClickOutside, OnPopState } from "../helpers";
import { MobileMenuEffects } from "./MobileMenuEffects";

export const MobileMenu = ({
	children,
	MobileMenuCloseIcon,
	MobileMenuIcon,
}: {
	children: React.ReactNode;
	MobileMenuCloseIcon: React.JSX.Element;
	MobileMenuIcon: React.JSX.Element;
}) => {
	const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

	return (
		<div className={`relative flex w-[28px] cursor-pointer `}>
			<MobileMenuEffects
				toggleMobileMenu={toggleMobileMenu}
				setToggleMobileMenu={setToggleMobileMenu}
			/>
			<button
				type="button"
				onClick={() => setToggleMobileMenu((prev) => !prev)}
				aria-label="toggle mobile menu"
				aria-expanded={toggleMobileMenu ? "true" : "false"}
				className={`h-[28px] w-[28px] object-contain hover:opacity-50
                ${
									toggleMobileMenu ? "rotate-180" : ""
								}  transition-all duration-100`}
			>
				{toggleMobileMenu ? MobileMenuCloseIcon : MobileMenuIcon}
			</button>
			<div
				className={`fixed right-0 top-0 h-screen overflow-x-clip overflow-y-scroll w-full px-4 transition-all duration-300 
                  ${!toggleMobileMenu && "hidden"}`}
			>
				<OnPopState onPopState={() => setToggleMobileMenu(false)}>
					<button
						className={`mt-20 flex flex-col items-end`}
						onClick={() => setToggleMobileMenu(false)}
						type="button"
						aria-label="close mobile menu"
					>
						<OnClickOutside
							condition={toggleMobileMenu}
							onClickOutside={() => setToggleMobileMenu(false)}
						>
							<div
								data-testid="mobile-menu"
								className="w-full min-w-[160px] list-none flex-col items-center rounded-md bg-navLight dark:bg-nav p-2"
							>
								{children}
							</div>
						</OnClickOutside>
					</button>
				</OnPopState>
			</div>
		</div>
	);
};
