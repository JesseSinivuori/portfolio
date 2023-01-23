import React, { useEffect, useRef } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping }
  from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { useStateContext } from '../../../context/StateContext'
import { urlFor } from '../../../lib/client'
import getStripe from '../../../lib/getStripe'
import toast from 'react-hot-toast'
import styles from '../../../styles/style'


export default function Cart() {
  const cartRef = useRef<any>();

  const { totalPrice, totalQuantities, cartItems, setShowCart,
    toggleCartItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {

    const stripe: any = await getStripe()

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.status === 500) return;

    const data = await response.json();

    toast.loading('message: Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });

  }

  useEffect(() => {
    localStorage.setItem('context', JSON.stringify({
      totalPrice, totalQuantities, cartItems
    }));
  }, [totalPrice, totalQuantities, cartItems, handleCheckout]);

  return (
    <div className='cart-wrapper ' ref={cartRef}>
      <div className='cart-container  rounded-md 
    backdrop-blur-[55px] px-4'>
        <button type='button' className={`cart-heading`}
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>{totalQuantities}</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart '>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <button type='button' onClick={() => setShowCart(false)}
              className='btn'
            >
              Continue shopping
            </button>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item: any) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])}
                className='cart-product-image'
                alt={`Image of ${item.name}`}
              />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>€{item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div className='flex-1'>
                    <p className='quantity-desc'>
                      <span className='minus'
                        onClick={() => {
                          toggleCartItemQuantity(item._id, 'dec')
                        }}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className='num' >
                        {item.quantity}
                      </span>
                      <span className='plus'
                        onClick={() => {
                          toggleCartItemQuantity(item._id, 'inc')
                        }}
                      >
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>

                  <button type='button' className='remove-item'
                    onClick={() => onRemove(item)}>
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 &&
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>€{totalPrice.toFixed(2)}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn'
                onClick={() => handleCheckout()}
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
