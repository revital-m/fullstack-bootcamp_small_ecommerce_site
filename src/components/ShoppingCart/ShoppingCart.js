import React, { Component } from "react";
import "./ShoppingCart.css";

export default class ShoppingCart extends Component {
  state = {
    data: JSON.parse(localStorage.getItem("itemsArr")),
    total: parseInt(localStorage.getItem("total")),
  };

  handleClick = (ItemIdx, btnName) => {
    const currentItemData = [...this.state.data];
    const newData = [];
    let newTotal = this.state.total;
    let newAmount = 0;
    currentItemData.forEach((item, idx) => {
      if (idx === ItemIdx) {
        if (btnName === "minusBtn" && item[4] > 0) {
          newAmount = item[4] - 1;
          newTotal -= parseInt(item[3]);
        }
        if (btnName === "plusBtn") {
          newAmount = item[4] + 1;
          newTotal += parseInt(item[3]);
        }
        newData.push([item[0], item[1], item[2], item[3], newAmount]);
      } else {
        newData.push(item);
      }
    });
    localStorage.setItem("total", newTotal);
    this.setState({
      data: newData,
      total: parseInt(localStorage.getItem("total")),
    });
  };

  displayShoppingItems = () => {
    return this.state.data.map((item, idx) => {
      return (
        <div className="cart__item" key={item[0]}>
          <img className="cart__item--img" src={item[1]} alt={item[2]}></img>
          <div className="cart__item--info">
            <div className="cart__item--title">
              <h1>{item[2]}</h1>
              <p>{item[3]}</p>
            </div>
            <div className="cart__item--amount">
              <button
                className="cart__item--btn minusBtn"
                onClick={() => this.handleClick(idx, "minusBtn")}
              ></button>
              <p>{item[4]}</p>
              <button
                className="cart__item--btn plusBtn"
                onClick={() => this.handleClick(idx, "plusBtn")}
              ></button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="cart-container">
        <div className="total">
          <p>Total:</p>
          <p>{`${this.state.total}$`}</p>
          <button className="total-btn">Pay</button>
        </div>
        <div className="cart-items-container">
          {this.displayShoppingItems()}
        </div>
      </div>
    );
  }
}
