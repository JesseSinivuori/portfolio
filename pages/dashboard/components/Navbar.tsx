import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import { RiNotification3Line } from "react-icons/ri"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useDashboardContext } from "../contexts/ContextProvider"
import Image from "next/image"
import { useEffect } from "react"

type NavbarProps = {

}

export default function Navbar(props: NavbarProps) {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,
    screenSize, setScreenSize } =
    useDashboardContext();

  const NavButton = ({ title, customFunc, icon, color, dotColor }: any) => (
    <TooltipComponent content={title} position={"BottomCenter"}>
      <button type="button" onClick={customFunc} style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      >
        <span style={{ background: dotColor }} className='absolute inline-flex rounded-full 
        h-2 w-2 right-2 top-2'/>
        {icon}
      </button>

    </TooltipComponent>
  )

  useEffect(() => {
    const handleResize = () =>
      setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize)

    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1060) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    console.log(activeMenu);
  }, [screenSize]);


  return (
    <div className="flex justify-between p-2 md:mx-6 relative navbar rounded-b-md bg-white mt-[0px]">
      <div className="flex">
        <div className="block md:hidden">
          <NavButton title='Menu' customFunc={() =>
            setActiveMenu((prev: boolean) => !prev)}
            color='blue' icon={<AiOutlineMenu />}
          />
        </div>
        <div className="flex">
          <NavButton title='Cart' customFunc={() =>
            handleClick('cart')}
            color='blue' icon={<FiShoppingCart />} />
        </div>
        <div className="flex">
          <NavButton title='Chat' customFunc={() =>
            handleClick('chat')}
            color='blue' icon={<BsChatLeft />}
            dotColor='#03C9D7' />
        </div>
        <div className="flex">
          <NavButton title='Notifications' customFunc={() =>
            handleClick('notification')}
            color='blue' icon={<RiNotification3Line />}
            dotColor='#03C9D7' />
        </div>
      </div>
      <TooltipComponent content='Profile' position="BottomCenter">
        <div className="flex items-center gap-2 cursor-pointer
          p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfile')}
        >
          <Image className="rounded-full w-8 h-8" src={avatar} alt={"profile image"} />
          <p>
            <span className="text-gray-400 text-14">Hi, </span> {' '}
            <span className="text-gray-400 font-bold m-1 text-14">Michael</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>

      </TooltipComponent>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  )
}
