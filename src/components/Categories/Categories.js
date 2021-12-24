import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../utilities/CategoryCard/CategoryCard";
import "./Categories.css";
import storeWoman from "../../storeData/storeWoman";
import storeMan from "../../storeData/storeMan";
import storeKids from "../../storeData/storeKids";
import storeHome from "../../storeData/storeHome";

export default class Products extends Component {
  state = {
    woman: storeWoman,
    man: storeMan,
    kids: storeKids,
    home: storeHome,
    categoryName: this.props.match.params.name,
  };

  displayItem = () => {
    return this.state[this.state.categoryName].map((category, idx) => {
      return (
        <Link
          to={`/products/${this.state.categoryName}/${this.state[
            this.state.categoryName
          ][idx].category.toLowerCase()}/${idx}`}
          className="categories--link"
          key={idx}
        >
          <CategoryCard
            categoryCardClass={
              this.state[this.state.categoryName][idx].imgClass
            }
            categoryCardName={this.state[this.state.categoryName][idx].category}
          />
        </Link>
      );
    });
  };

  render() {
    return <div className="categories">{this.displayItem()}</div>;
  }
}
