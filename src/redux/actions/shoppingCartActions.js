import {shoppingCartActions} from "../constants/actionTypes";

function addToCartAction(id) {
  return {
    type: shoppingCartActions.ADD_TO_CART,
    payload: id
  };
}

function removeFromCartAction(id) {
  return {
    type: shoppingCartActions.REMOVE_FROM_CART,
    payload: id
  }
}

export {addToCartAction, removeFromCartAction};
