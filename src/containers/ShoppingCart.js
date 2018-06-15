import {connect} from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';
import {removeFromCartAction} from '../redux/actions/shoppingCartActions';

function mapStateToProps(state) {
  // Put in cart only products with ID matching an ID in the state.shoppingCart array
  const productsInCart = state.products.filter(product => state.shoppingCart.includes(product.id));
  return {
    products: productsInCart
  };
}

function mapDispatchToProps(dispatch) {
  // returns an object literal with method name "clickHandler", using ES6 syntax.
  return {
    clickHandler(id) {
      dispatch(removeFromCartAction(id));
    }
  }
}

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
export default ShoppingCartContainer;
