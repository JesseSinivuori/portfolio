import { ContactLink } from "./ContactLink";
import { HomeLink } from "./HomeLink";
import { ProjectsPopover } from "./ProjectsPopover";
import { ThemeButton } from "./ThemeButton";

export const NavLinks = () => (
	<>
		<HomeLink />
		<ProjectsPopover />
		<ThemeButton className="p-2 w-full flex" />
		<ContactLink />
	</>
);
