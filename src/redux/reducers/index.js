import activeCategory from "./activeCategory";
import products from "./products";
import shoppingCart from "./shoppingCart";
import {combineReducers} from 'redux';

let reducer = combineReducers({ activeCategory, products, shoppingCart });
export default reducer;

// Remember: reducer is a pure function and state is immutable; therefore, a new state obj must be created and returned.
/*
function reducer(state, action) {
  return {
    activeCategory: activeCategory(state.activeCategory, action),
    products: products(state.products, action),
    shoppingCart: shoppingCart(state.shoppingCart, action)
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

