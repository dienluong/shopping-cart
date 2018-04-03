const initProducts =  [
  {id: 156, name: 'pizza', cost: 10, category: 'food'},
  {id: 257, name: 'apples', cost: 5, category: 'food'},
  {id: 383, name: 'tv', cost: 1000, category: 'electronics'},
  {id: 459, name: 'phone', cost: 300, category: 'electronics'},
];
function products(state=initProducts, action) {
  switch (action.type) {
    default:
      return state.products;
  }
}

export default products;
