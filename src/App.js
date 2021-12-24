import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
// import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";

class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Homepage} />
            <Route path="/categories/:name" exact component={Categories} />
            <Route path="/products/:category" exact component={Products} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
