import { useState } from 'react';
import Link from "next/link";
import { close, menu } from "../public/assets/portfolio"
import { navLinks } from '../constants/index';
import styles, { layout } from "../styles/style";
import Image from 'next/image'
import { useStateContext } from '../context/StateContext';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from '../pages/store/components';
import { useRouter } from 'next/router';

//return navbar
export default function Navbar() {

    const router = useRouter();
    const currentRoute = router.asPath;

    const canShowCart = () => {
        if (router.asPath.startsWith('/store/')) return true;
        if (router.asPath.startsWith('/product/')) return true;
        else return false;
    }

    const { showCart, setShowCart, totalQuantities } = useStateContext();

    //toggle menu on mobile
    const [toggle, setToggle] = useState(false);


    const handleClick = () => {
        setToggle((prev) => !prev);
    };

    return (
        //container
        <div className={`  `}>

            {/**padding and centering*/}
            <div className={`          `}>

                {/**set width */}
                <div className={` ${styles.boxWidth} py-4 
                bg-nav bg-opacity-75 backdrop-blur-[25px]
                `}>

                    {/**nav content container */}
                    <nav className={` flex justify-between items-center navbar 
                    
                    `} >

                        {/**make logo a link to home page*/}
                        <Link href={'/'}>

                            {/**logo text */}
                            <p className='text-white font-light hover:scale-[1.2] ml-[30px] 
                            rounded-full bg-transparent  
                            '>
                                <span className={'text-white'}>.</span>
                                &#106;
                                <span className={'text-[#70ffff] '}>s</span>
                            </p>
                        </Link>

                        {/**contain links */}
                        <ul className='list-none justify-end items-center flex-1 ss:flex hidden'>

                            {/**map links */}
                            {navLinks.map((nav, index) => (
                                <Link href={`${nav.id}`}
                                    key={nav.id}
                                    className={``}
                                >
                                    <li className={`font-poppins font-normal 
                                cursor-pointer text-[16px] rounded-md p-2 ease-in-out duration-100
                                ${currentRoute === nav.id && 'text-gray-500'}
                                ${currentRoute === '/portfolio/contact' && 'border-gray-600'}
                                ${!currentRoute.startsWith('/store') && nav.id.startsWith('/store') && 'text-gradient-ecommerce border-[1px] border-transparent hover:border-[#ffee00] hover:text-white'}
                                ${nav.id === '/portfolio/contact' && currentRoute !== '/portfolio/contact' ? ' border-[#ff0000] border-[1px]  hover:text-[#ff0000] hover:animate-pulse' :
                                            'hover:text-primary hover:bg-white'}
                                ${index === navLinks.length - 1 ? 'mr-[30px]' : 'mr-[25px]'}
                                text-white `}>
                                        {nav.title}
                                    </li>
                                </Link>
                            ))}
                            {canShowCart() &&
                                <button type="button" className={`cart-icon flex`}
                                    onClick={() => setShowCart(true)}
                                >
                                    <AiOutlineShopping />
                                    <span className="cart-item-qty ">{totalQuantities}</span>
                                </button>}
                        </ul>


                        {/**menu icon container on mobile(not in use(hidden)) */}
                        <div className={`ss:hidden mb-0 flex w-[28px] justify-end items-center relative cursor-pointer  `}>
                            {canShowCart() &&
                                <button type="button" className={`cart-icon flex `}
                                    onClick={() => setShowCart(true)}
                                >
                                    <AiOutlineShopping />
                                    <span className="cart-item-qty ">{totalQuantities}</span>
                                </button>}
                            {/**menu icons */}
                            <Image src={toggle ? close : menu}
                                alt='menu'
                                className='w-[28px] h-[28px] object-contain mr-[24px] '
                                onClick={() => handleClick()}
                            />
                            {/**menu container*/}
                            <div className={`${toggle ? 'flex animate-top-visible mt-20' : ' animate-top-hidden '} 
                             absolute ease-in-out duration-500 top-0
                             mr-4 min-w-[140px] 
                            `} >
                                {/**contain links */}
                                <ul className='list-none flex-col justify-end items-center
                                flex-1 bg-[#1b1b1b] 
                                 rounded-md 
                                backdrop-blur-[25px] p-1
                                ' >
                                    {/**map links */}
                                    {navLinks.map((nav, index) => (
                                        //list link titles
                                        <div className={`  `}>
                                            <Link href={`${nav.id}`}>
                                                <li key={nav.id} className={`
                                                
                                                font-poppins
                                            cursor-pointer text-[16px] p-2 rounded-md 
                                            ${currentRoute === nav.id && 'text-gray-600'}
                                            ${currentRoute === '/portfolio/contact' && 'border-gray-500'}
                                            ${nav.id === '/portfolio/contact' && currentRoute !== '/portfolio/contact' ? ' border-[#ff0000] border-[1px] hover:text-[#ff0000] hover:animate-pulse' :
                                                        'hover:text-primary hover:bg-white'}
                                            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
                                            text-white `}
                                                    onClick={() => handleClick()}
                                                >
                                                    {nav.title}
                                                </li>
                                            </Link>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {showCart && <Cart />}
                    </nav>
                </div>
            </div>
        </div>
    )
}
