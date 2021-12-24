import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../utilities/CategoryCard/CategoryCard';
// import storeData from '../../storeData/storeWoman';
import './Categories.css';
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
        categoryName: this.props.match.params.name.toLowerCase(),
    };


    render() {
        console.log(this.state.categoryName);
        return (
            <div className="categories">
                <Link to={`/products/${this.state.categoryName}`} className="categories--link">
                    <CategoryCard categoryCardClass={"card--woman"} categoryCardName="Woman" categoryData={this.state.womanData}/>
                </Link>
                <Link to={`/products/${this.state.categoryName}`} className="homepage--link">
                    <CategoryCard categoryCardClass="card--man" categoryCardName="Man" categoryData={this.state.manData}/>
                </Link>
                <Link to={`/products/${this.state.categoryName}`} className="homepage--link">
                    <CategoryCard categoryCardClass="card--kids" categoryCardName="Kids" categoryData={this.state.kidsData}/>
                </Link>
                <Link to={`/products/${this.state.categoryName}`} className="homepage--link">
                    <CategoryCard categoryCardClass="card--home" categoryCardName="Home" categoryData={this.state.homeData}/>
                </Link>
            </div>
        )
    }
}
