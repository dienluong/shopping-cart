import React from 'react';
import Product from './Product';

let Products = ({products, clickHandler}) => (
  <section>
    <h3>Our Products</h3>
    <section>
      { products.map((product, idx) => (<Product key={idx} {...product} clickHandler={clickHandler} />)) }
    </section>
  </section>
);

export default Products;
