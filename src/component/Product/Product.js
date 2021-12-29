import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Product = (props) => {
  const product = props.product;
  const { name, img, seller, price, stock, key } = product;
  return (
    <div className="item-display">
      <div className="item-thumbnail">
        <img src={img} alt="item thumbnail" />
      </div>
      <div className="item-details">
        <h4>
          <Link to={"product/" + key}>{name}</Link>
        </h4>
        <p>By: {seller} </p>
        <p>{"$" + price}</p>
        <p>
          <small> Only {stock} left in stock - order soon </small>
        </p>
        {props.showAddToCart && (
          <button
            className="cart-btn"
            onClick={() => props.handelAddProduct(product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
