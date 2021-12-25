import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import CategoryCard from "../utilities/CategoryCard/CategoryCard";

export default function Homepage() {
  return (
    <div className="homepage">
      <Link to="/categories/woman" className="homepage--link">
        <CategoryCard
          categoryCardClass="card--woman"
          categoryCardName="Woman"
        />
      </Link>
      <Link to="/categories/man" className="homepage--link">
        <CategoryCard categoryCardClass="card--man" categoryCardName="Man" />
      </Link>
      <Link to="/categories/kids" className="homepage--link">
        <CategoryCard categoryCardClass="card--kids" categoryCardName="Kids" />
      </Link>
      <Link to="/categories/home" className="homepage--link">
        <CategoryCard categoryCardClass="card--home" categoryCardName="Home" />
      </Link>
    </div>
  );
}
