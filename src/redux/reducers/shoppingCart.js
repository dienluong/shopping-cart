import {shoppingCartActions} from "../constants/actionTypes";

const initShoppingCart = [];
function shoppingCart(state=initShoppingCart, action) {
  switch (action.type) {
    case shoppingCartActions.ADD_TO_CART:
      return [...state, action.payload];
    case shoppingCartActions.REMOVE_FROM_CART:
      return state.filter(productId => productId !== action.payload);
    default:
      return state;
  }
}

export default shoppingCart;
