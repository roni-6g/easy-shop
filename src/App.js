import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./component/Review/Review";
import Inventory from "./component/Inventory/Inventory";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import NotFound from "./component/NotFound/NotFound";
import ProductDetails from "./component/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <NotFound> </NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
