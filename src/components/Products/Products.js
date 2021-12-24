import React, { Component } from 'react';
// import storeData from '../../storeData/storeWoman';
import './Products.css';
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

    // handleClick = () => {
    //     this.props.history.goBack();
    // }

    // displayItem = () => {
        
    //     const choosenItem = Number(this.props.match.params.id);
    //     const itemToDisplay = storeData.find(item => item.id === choosenItem )
    //     return (
    //         <div className="card">
    //             <img className="cardImg" src={itemToDisplay.imageUrl} alt={itemToDisplay.title}></img>
    //             <div className="cardInfo">
    //                 <h1>{itemToDisplay.title}</h1>
    //                 <p>Price: {itemToDisplay.price}</p>
    //                 <p>Size: {itemToDisplay.size}</p>
    //                 <button className="btn--category" onClick={this.handleClick}>Back</button>
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        return (
            <div className='product-detail'>
                {/* {this.displayItem()} */}
            </div>
        )
    }
}
