import {shoppingCartActions} from "../constants/actionTypes";

const initShoppingCart = [];
function shoppingCart(state=initShoppingCart, action) {
  switch (action.type) {
    case shoppingCartActions.ADD_TO_CART:
      return [...state.shoppingCart, action.payload];
    case shoppingCartActions.REMOVE_FROM_CART:
      return state.shoppingCart.filter(productId => productId !== action.payload);
    default:
      return state.shoppingCart;
  }
}

export default shoppingCart;
