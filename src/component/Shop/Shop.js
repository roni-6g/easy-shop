import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import fakeData from "../../fakeData/index";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handelAddProduct = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAdded);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };

  useEffect(() => {
    const savedProduct = getDatabaseCart();
    const productKeys = Object.keys(savedProduct);
    const newProduct = productKeys.map((pdKeys) => {
      const product = fakeData.find((pd) => pd.key === pdKeys);
      product.quantity = savedProduct[pdKeys];
      return product;
    });
    setCart(newProduct);
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((pd) => (
          <Product
            showAddToCart={true}
            handelAddProduct={handelAddProduct}
            product={pd}
            key={pd.key}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="cart-btn">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
