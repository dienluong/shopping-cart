import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './containers/Products';
import ShoppingCart from './containers/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Shopping Cart app using <code>redux</code> and <code>react-redux</code>
        </p>
        <Products/>
        <ShoppingCart/>
      </div>
    );
  }
}

export default App;
