import { ProjectsPopover } from "./ProjectsPopover";
import { ThemeButton } from "./ThemeButton";
import { HomeLink } from "./HomeLink";
import { ContactLink } from "./ContactLink";

export const NavLinks = () => (
  <>
    <HomeLink />
    <ProjectsPopover />
    <ThemeButton className="p-2 w-full flex" />
    <ContactLink />
  </>
);
