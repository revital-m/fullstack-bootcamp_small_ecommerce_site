import React, { Component } from 'react';
import './CategoryCard.css';

export default class CategoryCard extends Component {
    state = { categoryData: this.props.categoryData };

    render() {
        return (
            <div className={`card ${this.props.categoryCardClass}`}>
                <h1>{this.props.categoryCardName}</h1>
            </div>
        )
    }
}
