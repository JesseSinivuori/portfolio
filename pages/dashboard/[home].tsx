import './dashboard.module.css'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Pie, Stacked, Orders, Customers, Kanban, Editor, Calendar, ColorPicker, Line, Area, Bar, Financial, ColorMapping, Pyramid, Employees, Sidebar, Navbar } from './components/index'
import DashboardContext from './contexts/ContextProvider'
import { useDashboardContext } from './contexts/ContextProvider'
import { useEffect } from 'react'
import styles from '../../styles/style'
import Ecommerce from './components/Ecommerce';
import { usePathname } from 'next/navigation'

export default function Dashboard() {

    const { activeMenu } = useDashboardContext();

    const currentRoute = usePathname();



    return (
        <DashboardContext>
            <div className={``}>
                <div className='flex relative overflow-hidden dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4 '
                        style={{ zIndex: '999' }}
                    >
                        <TooltipComponent content='Settings' position='TopCenter'>
                            <button type='button' className='text-3xl p-3 
                    hover:drop-shadow-xl hover:bg-light-gray text-white'
                                style={{ background: 'blue', borderRadius: '50%' }}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className={`w-72 fixed  dark:bg-secondary-dark-bg `}

                        >
                            <Sidebar />
                        </div>
                    ) : (
                        <div className=' dark:bg-secondary-dark-bg md:min-w-[240px]
                        
                        '>
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-bg bg-main-bg min-h-screen w-full  
                ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                    }>
                        <div className='absolute md:static bg-main-bg dark:bg-main-dark-bg
                 w-full '>
                            <Navbar />
                        </div>
                        <div className={`flex-wrap justify-center w-full `}>
                            {currentRoute === '/dashboard/ecommerce' && <Ecommerce />}
                            {currentRoute === '/dashboard/orders' && <Orders />}
                            {currentRoute === '/dashboard/employees' && <Employees />}
                            {currentRoute === '/dashboard/customers' && <Customers />}
                            {currentRoute === '/dashboard/kanban' && <Kanban />}
                            {currentRoute === '/dashboard/editor' && <Editor />}
                            {currentRoute === '/dashboard/calendar' && <Calendar />}
                            {currentRoute === '/dashboard/colorpicker' && <ColorPicker />}
                            {currentRoute === '/dashboard/line' && <Line />}
                            {currentRoute === '/dashboard/area' && <Area />}
                            {currentRoute === '/dashboard/bar' && <Bar />}
                            {currentRoute === '/dashboard/pie' && <Pie />}
                            {currentRoute === '/dashboard/financial' && <Financial />}
                            {currentRoute === '/dashboard/colormapping' && <ColorMapping />}
                            {currentRoute === '/dashboard/pyramid' && <Pyramid />}
                            {currentRoute === '/dashboard/stacked' && <Stacked />}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardContext>
    )
}
