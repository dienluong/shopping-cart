import React from 'react';

let Product = ({id, name, cost, category, clickHandler}) => (
  <div>
    <span><strong>#{id}</strong> | ${cost} | Type: {category} </span><button onClick={() => clickHandler(id)}>{name}</button>
  </div>
);

export default Product;
