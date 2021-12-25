import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  state = { counter: localStorage.getItem("counter") };

  componentDidMount = () => {
    setInterval(() => {
      if (localStorage.getItem("counter") !== this.state.counter) {
        this.handleShopping();
      }
    }, 1000);
  };

  handleShopping = () => {
    this.setState({ counter: localStorage.getItem("counter") });
  };

  render() {
    return (
      <header className="header">
        <Link className="header--link" to="/">
          Homepage
        </Link>
        <Link className="header--link" to="/shopping-cart">
          <p className="cart-counter">{this.state.counter}</p>
          <i className="myCart fas fa-shopping-cart"></i>
        </Link>
      </header>
    );
  }
}
