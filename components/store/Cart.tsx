import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import getStripe from "../../lib/getStripe";
import toast from "react-hot-toast";
import Image from "next/image";
import CloseOnBack from "./CloseOnBack";
import OnClickOutside from "../helpers/OnClickOutside";
import copy from "copy-to-clipboard";

export default function Cart() {
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    showCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    handleCopy();

    const stripe: any = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.status === 500) return;

    const data = await response.json();

    const timeout = setTimeout(() => {
      toast.loading("Redirecting...");

      stripe.redirectToCheckout({ sessionId: data.id });

      localStorage.setItem(
        "context",
        JSON.stringify({
          totalPrice,
          totalQuantities,
          cartItems,
        })
      );
    }, 1000);
    return () => clearTimeout(timeout);
  };

  const handleCopy = () => {
    copy("4242 4242 4242 4242");
    toast.success("Stripe test card copied to clipboard.");
  };

  return (
    <CloseOnBack toggleState={showCart} setToggleState={setShowCart}>
      <OnClickOutside
        condition={showCart}
        onClickOutside={() => setShowCart(false)}
      >
        <div
          id="cart"
          data-testid="cart"
          className={`cart-wrapper h-[100vh] w-full max-w-[680px] translate-x-full overflow-hidden overscroll-none bg-nav
          ${showCart && "translate-x-0"}`}
        >
          <div className={`cart-container h-[100svh] rounded-md ss:h-full `}>
            <button
              type="button"
              className={`cart-heading hidden pb-8 transition-all duration-100
              hover:opacity-50 ss:flex`}
              onClick={() => {
                setShowCart((prev: any) => !prev);
              }}
            >
              <AiOutlineLeft />
              <span className="heading">Items</span>
              <span className="cart-num-items">{totalQuantities}</span>
            </button>
            {cartItems.length < 1 && (
              <div className="empty-cart">
                <AiOutlineShopping size={150} />
                <h3>{`It's empty... 👀`}</h3>
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="btn"
                >
                  Continue shopping
                </button>
              </div>
            )}
            <div className="product-container h-full overflow-auto overscroll-none px-4 pb-[220px] ">
              {cartItems.length >= 1 &&
                cartItems.map((item: any) => (
                  <div
                    className="flex flex-wrap rounded-xl even:bg-primary/75"
                    key={item._id}
                  >
                    <div
                      className="product relative m-[10px] flex w-full
                flex-wrap xss:flex-row xss:flex-nowrap"
                    >
                      {/**
                    <button
                      type="button"
                      className="remove-item absolute
                    right-[0px] top-[0px]
                    xss:bottom-[0px] xss:top-auto"
                      onClick={() => onRemove(item)}
                    >
                      <AiOutlinePlus />
                    </button>
                    */}
                      <div>
                        <Image
                          src={urlFor(item?.image[0])}
                          className="cart-product-image 
                    h-[100px] max-h-[100px] 
                    w-[100px] max-w-[100px]
                    rounded-xl xss:h-[200px]
                    xss:max-h-[200px] xss:w-[200px]
                    xss:max-w-[200px]"
                          alt={`Image of ${item.name}`}
                          width={180}
                          height={150}
                        />
                      </div>
                      <div className="w-full  ">
                        <div className="top flex w-full flex-wrap pl-[10px] xs:flex-row">
                          <h5 className="flex flex-1">{item.name}</h5>
                          <h4 className="ml-0 flex xs:ml-4">{item.price}€</h4>
                        </div>
                        <div className="mt-[10px] flex items-center justify-center  xss:mt-[20px] xss:justify-start">
                          <p className="quantity-desc w-full min-w-[90px] max-w-[140px]">
                            <span
                              className="minus"
                              onClick={() => {
                                item.quantity > 1
                                  ? toggleCartItemQuantity(item._id, "dec")
                                  : onRemove(item);
                              }}
                            >
                              <AiOutlineMinus />
                            </span>
                            <span className="num">{item.quantity}</span>
                            <span
                              className="plus"
                              onClick={() => {
                                toggleCartItemQuantity(item._id, "inc");
                              }}
                            >
                              <AiOutlinePlus />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/** 
                <span
                  className={`border-b-1 border-[#2c2c2c] ${styles.flexCenter}
                  w-full sm:mx-[20px] mx-[10px] m-[0px] xss:m-[10px]`}
                ></span>
                */}
                  </div>
                ))}
            </div>
            <div className="cart-bottom w-full bg-nav xs:max-w-[680px]">
              {cartItems.length >= 1 && (
                <>
                  <div className="total">
                    <h3>Total:</h3>
                    <h3>{totalPrice.toFixed(2)}€</h3>
                  </div>
                  <div className="btn-container">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => handleCheckout()}
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )}
              <button
                type="button"
                className={`cart-heading flex py-8 transition-all
              duration-100 hover:opacity-50 ss:hidden`}
                onClick={() => {
                  setShowCart((prev: any) => !prev);
                }}
              >
                <AiOutlineLeft />
                <span className="heading">Items</span>
                <span className="cart-num-items">{totalQuantities}</span>
              </button>
            </div>
          </div>
        </div>
      </OnClickOutside>
    </CloseOnBack>
  );
}
