import React, { Component } from "react";
import "./Products.css";
import storeWoman from "../../storeData/storeWoman";
import storeMan from "../../storeData/storeMan";
import storeKids from "../../storeData/storeKids";
import storeHome from "../../storeData/storeHome";
import ProductCard from "../utilities/ProductCard/ProductCard";

export default class Products extends Component {
  state = {
    woman: storeWoman,
    man: storeMan,
    kids: storeKids,
    home: storeHome,
    categoryName: this.props.match.params.name,
    categoryIdx: this.props.match.params.idx,
  };

  displayItem = () => {
    const dataArr =
      this.state[this.state.categoryName][this.state.categoryIdx].data;
    return dataArr.map((item) => {
      return (
        <ProductCard
          key={item.id}
          id={item.id}
          imgSrc={item.imageUrl}
          title={item.title}
          price={item.price}
        />
      );
    });
  };

  render() {
    return <div className="product-detail">{this.displayItem()}</div>;
  }
}
