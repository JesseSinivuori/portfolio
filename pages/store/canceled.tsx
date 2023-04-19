import Link from "next/link";
import { BsBagX } from "react-icons/bs";
import { useStateContext } from "../../context/StateContext";
import React, { useEffect } from "react";

export default function Canceled() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    const contextString = localStorage.getItem("context");
    const context = JSON.parse(contextString ?? "{}");

    setCartItems(context.cartItems ?? []);
    setTotalPrice(context.totalPrice ?? 0);
    setTotalQuantities(context.totalQuantities ?? 0);
  }, [setCartItems, setTotalPrice, setTotalQuantities]);

  return (
    <div className={`cancel-wrapper flex`}>
      <div className="cancel">
        <p className="icon">
          <BsBagX />
        </p>
        <h2>Your order was canceled.</h2>
        <p className="description">
          If you have any questions, please email <br />
          <a className="email" href="mailto:purchase@example.com">
            purchase@example.com
          </a>
        </p>
        <Link href={"/store/home"}>
          <button type="button" className="btn w-[300px]">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}
