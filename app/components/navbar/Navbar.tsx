import { HomeLogo } from "./HomeLogo";
import { MobileMenu } from "./MobileMenu";
import { NavbarEffects } from "./NavbarEffects";
import { NavLinks } from "./NavLinks";

export function Navbar() {
	return (
		<div
			className={`fixed left-0 right-0 top-0 z-[9999] select-none overscroll-none`}
		>
			<div className={`max-w-[1400px] m-auto transition-all duration-1000`}>
				<NavbarEffects navStyles={[navbarBelowTopStyle, navbarAtTopStyle]}>
					<nav>
						<div className="flex w-full items-center gap-4 px-8 py-4 ">
							<div className="flex flex-1">
								<HomeLogo />
							</div>
							<div className="hidden justify-end gap-4 xs:flex">
								<NavLinks />
							</div>
							<div className="flex justify-end xs:hidden">
								<MobileMenu
									MobileMenuCloseIcon={<MobileMenuCloseIcon />}
									MobileMenuIcon={<MobileMenuIcon />}
								>
									<div className="space-y-4">
										<NavLinks />
									</div>
								</MobileMenu>
							</div>
						</div>
					</nav>
				</NavbarEffects>
			</div>
		</div>
	);
}

const navbarBelowTopStyle =
	"bg-white dark:bg-black/50 dark:backdrop-blur-[25px] border-b rounded-b-md dark:border-white/10 border-black/10";
const navbarAtTopStyle = "border-transparent bg-opacity-0 backdrop-blur-[0px]";

const MobileMenuCloseIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-7 h-7"
		aria-hidden="true"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
);

const MobileMenuIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-7 h-7"
		aria-hidden="true"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
);
