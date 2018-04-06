import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';
import sinon from 'sinon';
import Product from '../../src/components/Product';

Enzyme.configure({ adapter: new Adapter() });

describe('<Product />', () => {
  it('should respond to a click event by calling provided handler', () => {
    const product = {
      id: 383, name: 'tv', cost: 1000, category: 'electronics'
    };
    let handleClick = sinon.spy();
    let wrapper = shallow(<Product {...product} clickHandler={handleClick} />);
    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true);
  });
});
