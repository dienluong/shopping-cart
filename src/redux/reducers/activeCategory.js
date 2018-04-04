import {shoppingCartActions} from "../constants/actionTypes";

const initActiveCategory = 'food';
function activeCategory(state=initActiveCategory, action) {
  switch (action.type) {
    case shoppingCartActions.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

export default activeCategory;
