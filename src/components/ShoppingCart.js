import React from 'react';
import Product from './Product';

const shoppingStyle = {
  position: 'absolute',
  backgroundColor: 'grey',
  width: '100%',
  height: '100%'
};

const ShoppingCart = ({products, clickHandler}) => (
  <section style={shoppingStyle}>
    <h3>Shopping Cart</h3>
    <section>
      { products.map((product, idx) => (<Product key={idx} {...product} clickHandler={clickHandler} />)) }
    </section>
  </section>
);

export default ShoppingCart;
