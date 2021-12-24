import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import storeWoman from "../../storeData/storeWoman";
import storeMan from "../../storeData/storeMan";
import storeKids from "../../storeData/storeKids";
import storeHome from "../../storeData/storeHome";
import CategoryCard from '../utilities/CategoryCard/CategoryCard';

export default class Homepage extends Component {
    state = {
        womanData: storeWoman,
        manData: storeMan,
        kidsData: storeKids,
        homeData: storeHome,
    };

    render() {
        console.log(this.state.womanData);
        return (
            <div className="homepage">
                <Link to="/categories/woman" className="homepage--link">
                    <CategoryCard categoryCardClass="card--woman" categoryCardName="Woman" categoryData={this.state.womanData}/>
                </Link>
                <Link to="/categories/man" className="homepage--link">
                    <CategoryCard categoryCardClass="card--man" categoryCardName="Man" categoryData={this.state.manData}/>
                </Link>
                <Link to="/categories/kids" className="homepage--link">
                    <CategoryCard categoryCardClass="card--kids" categoryCardName="Kids" categoryData={this.state.kidsData}/>
                </Link>
                <Link to="/categories/home" className="homepage--link">
                    <CategoryCard categoryCardClass="card--home" categoryCardName="Home" categoryData={this.state.homeData}/>
                </Link>
            </div>
        )
    }
}
