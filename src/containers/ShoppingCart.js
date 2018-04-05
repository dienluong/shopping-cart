import {connect} from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';
import {shoppingCartActions} from '../redux/constants/actionTypes';

function mapStateToProps(state) {
  const productsInCart = state.products.filter(product => state.shoppingCart.includes(product.id));
  return {
    products: productsInCart
  };
}

function mapDispatchToProps(dispatch) {
  // returns an object literal with method name "clickHandler", using ES6 syntax.
  return {
    clickHandler(id) {
      dispatch({
        type: shoppingCartActions.REMOVE_FROM_CART,
        payload: id
      });
    }
  }
}

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
export default ShoppingCartContainer;
