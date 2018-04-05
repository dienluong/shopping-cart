import {expect} from 'chai';
import shoppingCart from '../../src/redux/reducers/shoppingCart';
import {shoppingCartActions} from '../../src/redux/constants/actionTypes';

describe('shoppingCart reducer', () => {
  it('can add a product', () => {
    const newState = shoppingCart([], { type: shoppingCartActions.ADD_TO_CART, payload: 123 });
    expect(newState).to.eql([123]);
  });

  it('can remove a product', () => {
    let state = [];
    state = shoppingCart(state, { type: shoppingCartActions.ADD_TO_CART, payload: 546 });
    state = shoppingCart(state, { type: shoppingCartActions.REMOVE_FROM_CART, payload: 546 });
    expect(state).to.be.empty;
  });
});
