import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../utilities/CategoryCard/CategoryCard";
// import storeData from '../../storeData/storeWoman';
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

  render() {
    // console.log(this.state[this.state.categoryName][0].imgClass);
    return (
      <div className="categories">
        <Link
          to={`/products/${this.state.categoryName}/${this.state[this.state.categoryName][0].category.toLowerCase()}`}
          className="categories--link"
        >
          <CategoryCard
            categoryCardClass={this.state[this.state.categoryName][0].imgClass}
            categoryCardName={this.state[this.state.categoryName][0].category}
          />
        </Link>
        <Link
          to={`/products/${this.state.categoryName}/${this.state[this.state.categoryName][1].category.toLowerCase()}`}
          className="categories--link"
        >
          <CategoryCard
            categoryCardClass={this.state[this.state.categoryName][1].imgClass}
            categoryCardName={this.state[this.state.categoryName][1].category}
          />
        </Link>
        <Link
          to={`/products/${this.state.categoryName}/${this.state[this.state.categoryName][2].category.toLowerCase()}`}
          className="categories--link"
        >
          <CategoryCard
            categoryCardClass={this.state[this.state.categoryName][2].imgClass}
            categoryCardName={this.state[this.state.categoryName][2].category}
          />
        </Link>
        <Link
          to={`/products/${this.state.categoryName}/${this.state[this.state.categoryName][3].category.toLowerCase()}`}
          className="categories--link"
        >
          <CategoryCard
            categoryCardClass={this.state[this.state.categoryName][3].imgClass}
            categoryCardName={this.state[this.state.categoryName][3].category}
          />
        </Link>
      </div>
    );
  }
}
