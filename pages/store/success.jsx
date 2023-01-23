import Link from "next/link"
import { useEffect } from "react";
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from "../../context/StateContext"
import { runFireworks } from '../../lib/utils'

export default function Success() {
    const { setCartItems, setTotalPrice, setTotalQuantities } =
        useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
        <div className="success-wrapper flex">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for your purchase!</h2>
                <p className="email-msg">
                    Check your email inbox for the receipt.</p>
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
