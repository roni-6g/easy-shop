import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, price, key } = props.product;
  const cartItemStyle = {
    borderBottom: "1px solid lightGray",
    padding: "10px",
  };
  return (
    <div style={cartItemStyle}>
      <h3 style={{ fontSize: "16px", color: "blue" }}> {name} </h3>
      <p>Price: {"$" + price} </p>
      <p>Quantity: {quantity} </p>
      <button onClick={() => props.removeItem(key)} className="cart-btn">
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
