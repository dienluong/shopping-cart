import activeCategory from "./activeCategory";
import products from "./products";
import shoppingCart from "./shoppingCart";
import {combineReducers} from 'redux';
/*
let initialState = {
  activeCategory: 'food',
  products: [
    {id: 156, name: 'pizza', cost: 10, category: 'food'},
    {id: 257, name: 'apples', cost: 5, category: 'food'},
    {id: 383, name: 'tv', cost: 1000, category: 'electronics'},
    {id: 459, name: 'phone', cost: 300, category: 'electronics'},
  ],
  shoppingCart: []
};
*/

let reducer = combineReducers(activeCategory, products, shoppingCart);
export default reducer;


// Remember: reducer is a pure function and state is immutable; therefore, a new state obj must be created and returned.
/*
function reducer(state, action) {
  return {
    activeCategory: activeCategory(state, action),
    products: products(state, action),
    shoppingCart: shoppingCart(state, action)
  };
}
*/

/*
  switch (action.type) {
    case shoppingCartActions.CHANGE_CATEGORY:
      // Using ES7 object spread syntax...
      return {
        ...state,
        activeCategory: action.payload
      };
    case shoppingCartActions.ADD_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload]
      };
    case shoppingCartActions.REMOVE_FROM_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(productId => productId !== action.payload)
      };
    default:
      return state;
  }
*/

