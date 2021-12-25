import React from "react";
import "./CategoryCard.css";

export default function CategoryCard(props) {
  return (
    <div className={`card ${props.categoryCardClass}`}>
      <h1>{props.categoryCardName}</h1>
    </div>
  );
}
