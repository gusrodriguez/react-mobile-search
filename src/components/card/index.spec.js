
import { shallow, mount } from 'enzyme';
import React from 'react';
import Card from '../card';

describe('Card', () => {
  let wrapper;
  let props;
  it('should render the price correctly', () => {
    props = {
      tour: {
        title: "German Tour: Parliament Quarter Reichstag glass dome",
        price: "14",
        currency: "$",
      },
    };

    wrapper = mount(<Card tour={props.tour} />);
    const span = wrapper.find('span');
    expect(span.text()).toEqual('$ 14');
  });

  it('should match snapshot', () => {
    wrapper = shallow(<Card tour={props.tour} />); 
    expect(wrapper).toMatchSnapshot();
  });
});

