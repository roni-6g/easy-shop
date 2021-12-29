import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import happyImage from "../../images/giphy.gif";

const Review = () => {
  const [item, setItem] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const itemKeys = Object.keys(savedCart);
    const cartItem = itemKeys.map((key) => {
      const item = fakeData.find((pd) => pd.key === key);
      item.quantity = savedCart[key];
      return item;
    });

    setItem(cartItem);
  }, []);

  const removeItem = (productKey) => {
    const newCart = item.filter((pd) => pd.key !== productKey);
    setItem(newCart);
    removeFromDatabaseCart(productKey);
  };

  const handleOrderProcess = () => {
    setItem([]);
    setOrderPlaced(true);
    processOrder();
  };

  let thankYou;

  if (orderPlaced) {
    thankYou = <img src={happyImage} alt="" />;
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {thankYou}
        {item.map((pd) => (
          <ReviewItem
            removeItem={removeItem}
            key={pd.key}
            product={pd}
          ></ReviewItem>
        ))}
      </div>
      <div className="item-container">
        <Cart cart={item}>
          <Link to="/review">
            <button onClick={handleOrderProcess} className="cart-btn">
              Place Order
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
