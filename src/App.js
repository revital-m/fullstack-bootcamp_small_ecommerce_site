import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

localStorage.setItem("counter", 0);
localStorage.setItem("itemsArr", JSON.stringify([]));
localStorage.setItem("total", 0);

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Homepage} />
            <Route path="/categories/:name" exact component={Categories} />
            <Route
              path="/products/:name/:category/:idx"
              exact
              component={Products}
            />
            <Route path="/shopping-cart" exact component={ShoppingCart} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
