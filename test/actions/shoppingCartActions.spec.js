import {expect} from 'chai';
import {removeFromCartAction, addToCartAction} from "../../src/redux/actions/shoppingCartActions";
import {shoppingCartActions} from "../../src/redux/constants/actionTypes";

describe('addToCartAction', () => {
  it('should return an object with payload containing specified ID', () => {
    expect(addToCartAction(23).payload).to.eql(23);
  });

  it('should return object with prop type with corresponding constant', () => {
    expect(addToCartAction(52).type).to.eql(shoppingCartActions.ADD_TO_CART);
  });
});

describe('removeFromCartAction', () => {
  it('should return an object with payload containing specified ID', () => {
    expect(removeFromCartAction(23).payload).to.eql(23);
  });

  it('should return an object with prop type with corresponding constant', () => {
    expect(removeFromCartAction(64).type).to.eql(shoppingCartActions.REMOVE_FROM_CART);
  });
});
