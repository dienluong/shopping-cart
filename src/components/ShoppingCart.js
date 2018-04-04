import React from 'react';
import Product from './Product';

const ShoppingCart = ({products, clickHandler}) => (
  <section style={{backgroundColor: 'grey'}}>
    <h3>Shopping Cart</h3>
    <section>
      { products.map((product, idx) => (<Product key={idx} {...product} clickHandler={clickHandler} />)) }
    </section>
  </section>
);

export default ShoppingCart;
