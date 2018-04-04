import { connect } from 'react-redux';
import Products from '../components/Products';
import {shoppingCartActions} from "../redux/constants/actionTypes";

// connect will call this function and pass it the value returned by store.getState()
function mapStateToProps(state) {
  return {
    products: state.products
  };
}

// connect calls this function and passes it the Redux store dispatch() method
function mapDispatchToProps(dispatch) {
  return {
    clickHandler(id) {
      dispatch({
        type: shoppingCartActions.ADD_TO_CART,
        payload: id
      })
    }
  }
}

let ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);
export default ProductsContainer;
