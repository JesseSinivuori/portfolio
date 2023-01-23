import Link from "next/link"
import { BsBagX } from 'react-icons/bs'
import { useStateContext } from '../../context/StateContext'
import React, { useEffect } from "react";
import styles from "../../styles/style";



export default function Canceled() {

    const { setCartItems, setTotalPrice, setTotalQuantities } =
        useStateContext();

    useEffect(() => {
        const contextString = localStorage.getItem('context');
        const context = JSON.parse(contextString);

        setCartItems(context.cartItems);
        setTotalPrice(context.totalPrice);
        setTotalQuantities(context.totalQuantities);
    }, []);

    return (
        <div className={`cancel-wrapper flex`}>
            <div className="cancel ">
                <p className="icon">
                    <BsBagX />
                </p>
                <h2>Your order was canceled.</h2>
                <p className="description">
                    If you have any questions, please email <br />
                    <a className="email"
                        href="mailto:purchase@example.com">
                        purchase@example.com
                    </a>

                </p>
                <Link href={"/store/home"}>
                    <button type="button" width='300'
                        className='btn'>Continue Shopping</button>
                </Link>
            </div>
        </div>
    )
}
