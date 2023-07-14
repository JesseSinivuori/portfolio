import Popover from "../UI/Popover";

const ChartIcon = () => <div>💻</div>;
const GradientIcon = () => (
  <div className=" h-6 w-6 rounded-full bg-gradient-to-tr  from-rose-500  to-violet-500"></div>
);
const EcommerceIcon = () => <div className="scale-150">🍔</div>;
const DeliveryFeeCalculatorIcon = () => <div className="scale-150">🛴</div>;
const GameIcon = () => <div className="scale-150">🔵</div>;

export default function ProjectsPopover() {
  const links = [
    {
      name: "Ad Manager",
      description: "A full stack CRUD app for managing ad campaigns",
      href: "/#ad_manager",
      icon: ChartIcon,
    },
    {
      name: "Gradient Generator",
      description: "Create, test, animate and save gradients",
      href: "/#gradient_generator",
      icon: GradientIcon,
    },
    {
      name: "Ecommerce Website",
      description: "A full stack restaurant themed ecommerce website",
      href: "/#jesse's_kitchen",
      icon: EcommerceIcon,
    },
    {
      name: "Deliver Fee Calculator",
      description: "Calculate delivery fees",
      href: "/#delivery_fee_calculator",
      icon: DeliveryFeeCalculatorIcon,
    },
    {
      name: "Infinite Ball Game",
      description: "A game made with Unity and C#",
      href: "/#game",
      icon: GameIcon,
    },
  ];

  return <Popover links={links} />;
}
