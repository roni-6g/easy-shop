import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  // const total = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const pd = cart[i];
    total = total + pd.price * pd.quantity;
  }

  let shipping = 0;
  if (total > 0 && total < 49) {
    shipping = 4.99;
  } else if (total > 50) {
    shipping = 0;
  }

  const tax = Number((total / 10).toFixed(2));

  const grandTotal = shipping + tax + total;

  return (
    <div className="cart-container">
      <div className="cart">
        <h3>Order Summery</h3>
        <p>
          <small>Items ordered: {cart.length} </small>
        </p>
        <table>
          <tbody>
            <tr>
              <td>Items: </td>
              <td>{"$" + total.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping: </td>
              <td> {"$" + shipping} </td>
            </tr>
            <tr>
              <td>Estimated Tax: </td>
              <td> {"$" + tax} </td>
            </tr>
            <tr>
              <td>Order Total:</td>
              <td> {Number(grandTotal.toFixed(2))} </td>
            </tr>
          </tbody>
        </table>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
