import React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  const handleClick = () => {
    let alreadyInCart = false;

    let currentCounter = localStorage.getItem("counter");
    currentCounter++;

    let myTotal = parseInt(localStorage.getItem("total"));
    myTotal += parseInt(props.price);

    let cartItemsArr = JSON.parse(localStorage.getItem("itemsArr"));
    cartItemsArr.forEach((item) => {
      if (item[0] === props.id) {
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      let newItem = [props.id, props.imgSrc, props.title, props.price, 1];
      cartItemsArr.push(newItem);
      localStorage.setItem("itemsArr", JSON.stringify(cartItemsArr));
      localStorage.setItem("counter", currentCounter);
      localStorage.setItem("total", myTotal);
    }
  };

  return (
    <div className="productCard">
      <img className="cardImg" src={props.imgSrc} alt={props.title}></img>
      <div className="cardInfo">
        <h1>{props.title}</h1>
        <p>{props.price}</p>
        <button className="cardInfo--btn" onClick={handleClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
