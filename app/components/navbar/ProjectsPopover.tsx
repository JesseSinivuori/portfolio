import { Popover } from "../UI/Popover";

export function ProjectsPopover() {
  return <Popover links={links} id="projects-popover" />;
}

const AdManagerIcon = <div className="scale-150">💻</div>;
const GradientGeneratorIcon = (
  <div className=" h-6 w-6 rounded-full bg-gradient-to-tr from-rose-500 to-violet-500"></div>
);
const EcommerceIcon = <div className="scale-150">🍔</div>;
const DeliveryFeeCalculatorIcon = <div className="scale-150">🛴</div>;

const links = [
  {
    name: "Ecommerce Website",
    description: "A full stack restaurant themed ecommerce website",
    href: "/#jesse's_kitchen",
    icon: EcommerceIcon,
  },
  {
    name: "Ad Manager",
    description: "A full stack CRUD app for managing ad campaigns",
    href: "/#ad_manager",
    icon: AdManagerIcon,
  },
  {
    name: "Gradient Generator",
    description: "Create, test, animate and save gradients",
    href: "/#gradient_generator",
    icon: GradientGeneratorIcon,
  },
  {
    name: "Deliver Fee Calculator",
    description: "Calculate delivery fees",
    href: "/#delivery_fee_calculator",
    icon: DeliveryFeeCalculatorIcon,
  },
];
