import React, { Component } from "react";
import AppScreenRouter from './index.js';
import { ProductProvider } from './core/providers/Products/Products';

export default class App extends Component {

  render() {
    return (
      <ProductProvider>
        <AppScreenRouter />
      </ProductProvider>
    )
  }

}