

import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../../store/cartSlice";
import Button from "../../components/button/Button";

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  const totalAmt = products.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  const shippingCharge = 20;

  return (
    <div className="cart-container">
      {products.length > 0 ? (
        <div className="cart-content">


          <div className="cart-items">
            {products.map((item) => (
              <div key={item.id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <Button title='Reset' className='resetButton' onClick={() => dispatch(resetCart())} />

          <div className="cart-totals">
            <h1 className="totals-title">Cart totals</h1>

            <div className="totals-details">
              <p className="total-line">
                Subtotal
                <span className="subtotal-amount">${totalAmt.toFixed(2)}</span>
              </p>
              <p className="total-line">
                Shipping Charge
                <span className="shipping-charge">${shippingCharge}</span>
              </p>
              <p className="total-line">
                Total
                <span className="total-amount">
                  ${(totalAmt + shippingCharge).toFixed(2)}
                </span>
              </p>
            </div>

            <div className="checkout-button">
              <Link to="/checkout">
                <button className="checkout-btn">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      ) : ( 
        <div className="emptyCart">
          <h1 className="emptyCartHeading">Shopping Cart</h1>
          <div className="emptyCartImage">
            <img src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=" alt="Empty cart Image" />
          </div>
          <div className="emptyCartInfo">
            <h3>Your Cary is Empty!</h3>
            <p style={{fontSize:"0.8rem"}}>Add something to make me happy 😍</p>
            <div className="emptyCartButton">
            <Link to='/products'>
            <Button title='Continue Shopping' 
              className='continueShopping' />
            </Link>
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
};

export default Cart;
