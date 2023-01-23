import Link from "next/link"
import { SiShopware } from 'react-icons/si'
import { FiSettings } from "react-icons/fi"
import { MdOutlineCancel } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { links } from '../data/dummy'
import { useRouter } from "next/router"
import { useDashboardContext } from "../contexts/ContextProvider"
import { useEffect } from "react"

type SidebarProps = {

}

export default function Sidebar(props: SidebarProps) {

  const router = useRouter();

  const { activeMenu, setActiveMenu, screenSize, currentRoute } = useDashboardContext();

  const handleCloseSideBar = () => {
    if (screenSize <= 1060) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }



  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (
    <div className={`bg-white absolute ${activeMenu ? ' animate-left-visible' : 'animate-left-hidden'} 
    ease-in-out duration-500 min-w-[240px] rounded-r-xl z-[999]`}>
      <div className={` h-screen md:overflow-hidden overflow-auto 
    md:hover:overflow-auto md:pb-20 pb-0 pt-10  md:pt-0   `}
      >
        {activeMenu && (<>
          <div className={`flex justify-between items-center  rounded-xl `}>
            <Link href='/dashboard/ecommerce' onClick={() => { handleCloseSideBar }}
              className='items-center gap-3 ml-3 mt-4 flex text-xl 
            font-extrabold tracking-tight dark:text-white text-slate-900'
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content='Menu' position="BottomCenter">
              <button type="button" onClick={() => {
                setActiveMenu((prev: boolean) =>
                  !prev)
              }}
                className='text-xl rounded-full p-3 hover:bg-light-gray
            mt-4 block md:hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-8 p-1  rounded-xl ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <Link href={`/dashboard/${link.name}`}
                    key={link.name}
                    onClick={() => { handleCloseSideBar }}
                    className={`${currentRoute === link.name ? activeLink : normalLink}`}
                  >
                    {link.icon}
                    <span className="capitalize">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>)}
      </div>
    </div>
  )
}
