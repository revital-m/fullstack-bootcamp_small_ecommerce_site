import React, { Component } from "react";
import "./ProductCard.css";

export default class ProductCard extends Component {
  handleClick = () => {};

  render() {
    return (
      <div className="productCard">
        <img
          className="cardImg"
          src={this.props.imgSrc}
          alt={this.props.title}
        ></img>
        <div className="cardInfo">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <button className="cardInfo--btn" onClick={this.handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
