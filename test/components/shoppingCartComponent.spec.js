import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';
import ShoppingCart from '../../src/components/ShoppingCart';

Enzyme.configure({ adapter: new Adapter() });

describe('<ShoppingCart />', () => {
  it('should contain <Product />', () => {
    const products = [
      {id: 156, name: 'pizza', cost: 10, category: 'food'},
      {id: 383, name: 'tv', cost: 1000, category: 'electronics'}
    ];
    let wrapper = shallow(<ShoppingCart products={products} />);
    expect(wrapper.find('Product')).to.have.length(2);
  });

  it('should render an <h3> header containing "Shopping Cart"', () => {
    let wrapper = shallow(<ShoppingCart products={[]} />);
    expect(wrapper.contains(<h3>Shopping Cart</h3>)).to.eql(true);
    // Alternatively:
    expect(wrapper.find('h3').text()).to.eql('Shopping Cart');
  });
});
